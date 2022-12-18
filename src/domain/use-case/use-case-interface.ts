import { ErrorOrSuccess } from "../error-or-success";

export interface useCaseInterface {
  exec(param : any): Promise<ErrorOrSuccess> }
