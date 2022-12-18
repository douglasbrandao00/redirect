import { Url } from "../url";
import { UrlHash } from "../url-hash";

export interface UrlShortRepository {
  save(urlShort: { url: Url, hash: UrlHash }): Promise<void>
}
