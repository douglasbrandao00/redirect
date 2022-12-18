import { describe, expect, test } from "vitest";
import { UrlHash } from "../../../src/domain/entity/url-hash";

describe("UrlHash", () => {
  test("shoud generate string with length of 6", () => {
    const hashA = new UrlHash()
    const hashB = new UrlHash()

    expect(hashA.value).toHaveLength(6)
    expect(hashB.value).toHaveLength(6)
  })
  test("shoud generate string with length of 6", () => {
    const hashA = new UrlHash()
    const hashB = new UrlHash()

    expect(hashA.value).not.toBe(hashB.value)
  })
})
