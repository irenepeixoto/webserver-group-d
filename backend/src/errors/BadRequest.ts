class BadRequestError extends Error {
  readonly status: number;
  constructor(message: string) {
    super(message);

    this.status = 400;
  }
}

export default BadRequestError;
