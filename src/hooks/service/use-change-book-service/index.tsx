import { IBookDto } from "../../../interface/IBookDto";
import { useRequest } from "../../../data/use-request";
import { tuple } from "../../../utils/tuple";

export const useChangeBookService = () => {
  let endpointUrl = "/book/change";

  const [fetchRequest, fetchRequestStatus, fetchRequestData] = useRequest<IBookDto>({
    endpoint: endpointUrl,
    method: "put",
  });

  return tuple(
    fetchRequest,
    fetchRequestStatus,
    fetchRequestData
  );
}
