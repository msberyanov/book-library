import axios from "axios";
import { useCallback, useState } from "react";
import { tuple } from "../../utils/tuple";
import { useStatus } from "../use-status";
import { useBookLibraryContext } from "../../book-library";

export const HOST_NAME = "http://localhost:8080";

type RequestMethod = "get" | "post" | "put";

interface RequestProps {
  endpoint: string;
  method: RequestMethod;
}

export const useRequest = <T,>({
  endpoint,
  method,
}: RequestProps) => {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useStatus();

  const {setLoading} = useBookLibraryContext();

  axios.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
  })

  const fetchRequest = useCallback((body?: Object) => {
    setStatus("request");

    switch (method) {
      case "get":
        setLoading(true);

        axios
          .get(HOST_NAME + endpoint)
          .then(result => {
            if (result.status === 200) {
              setStatus("success");
              setData(result.data);
            }
          })
          .catch(error => {
            setStatus("failure");
          })
          .finally(() =>
            setTimeout(() => setLoading(false), 500)
          );
        break;
      case "post":
        break;
      case "put":
        console.log("wow")
        axios
          .put(HOST_NAME + endpoint, JSON.stringify(body),
            {
              headers: {
                'Content-Type': 'application/json'
              }
            })
          .then(result => {
            if (result.status === 200) {
              setStatus("success");
              setData(result.data);
            }
          })
          .catch(error => {
            console.log(error)
            setStatus("failure");
          });
        break;
      default:
        throw Error("The given method is not supported");
    }

  }, [endpoint, method, setLoading, setStatus]);

  return tuple(
    fetchRequest,
    status,
    data
  );
}
