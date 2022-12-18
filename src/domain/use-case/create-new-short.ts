import { ErrorOrSuccess } from "../error-or-success";
import { UrlShortRepository } from "../repository/url-repository";
import { Url } from "../entity/url";
import { UrlHash } from "../entity/url-hash";
import { useCaseInterface } from "./use-case-interface";

export class CreateNewShort implements useCaseInterface {
  constructor(private urlShortRepository: UrlShortRepository) { }
  async exec(urlCandidate: string): Promise<ErrorOrSuccess> {
    try {
      const url = new Url(urlCandidate)
      const hash = new UrlHash()
      await this.urlShortRepository.save({ url, hash })
      return [null, { url: url.value, hash: hash.value }]
    } catch (error) {
      if (error instanceof Error) {
        return [error, null]
      }
      return [new Error(), {}]
    }
  };
}
