import { URL } from 'url'
export class InvalidUrlError extends Error {
  constructor(stack: string | undefined) {
    super('Invalid Url')
    this.name = 'InvalidUrlError '
    this.stack = stack
  }
}

export class Url {
  readonly value?: string
  constructor(urlCandidate: string) {
    try {
      const url = new URL(urlCandidate)
      this.value = url.href
      
    } catch (error) {
      if (error instanceof Error) {
        throw new InvalidUrlError(error.stack)
      }
    }
  }
}
