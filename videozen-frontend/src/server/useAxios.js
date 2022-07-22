import { useEffect, useState } from "react";

import { serverRequests } from "./serverRequests";

import { useData } from "../context/data-context";
import { useAuth } from "../context/auth-context";

export const useAxios = (endpoint, propertyToInitialize) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { dispatch } = useData();
  const { authToken, authUser } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        if (endpoint === "video" || endpoint === "allplaylist") {
          const {
            response: { data },
            error,
          } = await serverRequests({
            requestType: "get",
            url: `${process.env.REACT_APP_BACKEND}/${endpoint}`,
          });

          if (!error) {
            dispatch({
              type: "INITIALIZE_DATA",
              payload: {
                name: propertyToInitialize,
                data: data[propertyToInitialize],
              },
            });
          }
        } else {
          const {
            response: { data },
            error,
          } = await serverRequests({
            requestType: "get",
            url: `${process.env.REACT_APP_BACKEND}/${endpoint}/${authUser._id}`,
            token: { headers: { authorization: `Bearer ${authToken}` } },
          });

          const dataToBeDispatched =
            endpoint === "createdplaylist"
              ? !data[propertyToInitialize]
                ? []
                : data[propertyToInitialize].playlist
              : !data[propertyToInitialize]
              ? []
              : data[propertyToInitialize].videos;

          if (!error) {
            dispatch({
              type: "INITIALIZE_DATA",
              payload: {
                name: propertyToInitialize,
                data: dataToBeDispatched,
              },
            });
          }
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, error };
};
