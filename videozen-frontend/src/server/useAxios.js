import { useEffect, useState } from "react";

import { serverRequests } from "./serverRequests";

import { useData } from "../context/data-context";

export const useAxios = (endpoint, propertyToInitialize) => {
  const userId = "6096352966132b598c40964e";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { dispatch } = useData();

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

          console.log(data[propertyToInitialize]);
        } else {
          const {
            response: { data },
            error,
          } = await serverRequests({
            requestType: "get",
            url: `${process.env.REACT_APP_BACKEND}/${endpoint}/${userId}`,
          });

          const dataToBeDispatched =
            endpoint === "createdplaylist"
              ? data[propertyToInitialize].playlist
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

          console.log(
            endpoint === "createdplaylist"
              ? data[propertyToInitialize]
              : data[propertyToInitialize]
          );
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
