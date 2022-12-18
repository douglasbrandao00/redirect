import { describe, expect, test } from 'vitest'
import { Url } from '../../../src/domain/entity/url'

describe("Url", () => {
  test("Should create a valid url if url candidate is valid", () => {
    const urlCandidate = "http://google.com/oiausd=?iaosud"
    const url = new Url(urlCandidate)

    expect(url.value).toEqual(urlCandidate)
  })
  test("Should throw error if invalid url is provided", () => {
    const urlCandidate = "uaiw.er"

    expect(() => new Url(urlCandidate)).toThrow()
  })
})
