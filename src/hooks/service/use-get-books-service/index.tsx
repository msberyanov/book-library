import { useRequest } from "../../../data/use-request";
import { IBookDto, Status } from "../../../interface/IBookDto";
import { tuple } from "../../../utils/tuple";

export const useGetBooksService = (status: Status) => {
  let endpointUrl = "/book/get";

  if (status !== Status.NEW) {
    endpointUrl += `?status=${status}`
  }

  const [fetchRequest, fetchRequestStatus, fetchRequestData] = useRequest<IBookDto[]>({
    endpoint: endpointUrl,
    method: "get"
  });

  return tuple(
    fetchRequest,
    fetchRequestStatus,
    fetchRequestData
  );
}
