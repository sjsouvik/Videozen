import axios from "axios";

export const serverRequests = async ({ requestType, data, url }) => {
  switch (requestType) {
    case "get":
      try {
        const response = await axios.get(url);
        return response.status === 200
          ? { response, error: false }
          : { error: true };
      } catch (error) {
        return { error: true };
      }

    case "post":
      try {
        const response = await axios.post(url, data);
        return response.status === 200
          ? { response, error: false }
          : { error: true };
      } catch (error) {
        return { error: true };
      }

    default:
      break;
  }
};
