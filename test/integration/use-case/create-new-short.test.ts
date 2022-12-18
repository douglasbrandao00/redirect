import { describe,test, expect } from "vitest";
import { UrlShortRepository } from "../../../src/domain/repository/url-repository";
import { CreateNewShort } from "../../../src/domain/use-case/create-new-short";

class MemoryUrlShortRepository implements UrlShortRepository {
  constructor() { }
  async save(): Promise<void> { }
}
function makeSut() {
  const repository = new MemoryUrlShortRepository()
  return new CreateNewShort(repository)
}

describe('CreateNewShort', () => {
  test("Should be able to create new url short when correct data is provided", async () => {
    const urlCandidate = 'http://google.com'
    const sut = makeSut()
    const result = await sut.exec(urlCandidate)
    expect(result[0]).toBeNull()
    expect(result[1].url).toEqual(urlCandidate)
  })
})
