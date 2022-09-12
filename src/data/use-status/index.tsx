import { useState } from "react";
import { tuple } from "../../utils/tuple";

export type Status = "initial" | "request" | "success" | "failure";

export const useStatus = () => {
  const [status, setStatus] = useState<Status>("initial");

  return tuple(
    status,
    setStatus
  );
}
