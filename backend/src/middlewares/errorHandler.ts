import { ErrorRequestHandler } from 'express';

const errorHandlerMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { status, message } = err;

  res.status(status).json({ message });
};

export default errorHandlerMiddleware;

