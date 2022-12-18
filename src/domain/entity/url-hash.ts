import crypto from "node:crypto"

export class UrlHash {
  readonly value?: string
  constructor() {
    const hash = crypto.randomBytes(3).toString('hex')
    this.value = hash
  }
}
