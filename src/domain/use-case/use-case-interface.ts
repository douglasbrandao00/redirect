import { ErrorOrSuccess } from "../error-or-success";

export interface useCase {
  exec: Promise<ErrorOrSuccess>
}
