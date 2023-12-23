import { ReasonPhrases, StatusCodes } from "http-status-codes";

export class NotFoundException extends Error {
  name = ReasonPhrases.NOT_FOUND;
  status = StatusCodes.NOT_FOUND;

  constructor(message) {
    super();

    this.message = message || this.name;
  }
}

export class UnauthorizedException extends Error {
  name = ReasonPhrases.UNAUTHORIZED;
  status = StatusCodes.UNAUTHORIZED;

  constructor(message) {
    super();

    this.message = message || this.name;
  }
}

export class LogicException extends Error {
  name = ReasonPhrases.INTERNAL_SERVER_ERROR;
  status = StatusCodes.INTERNAL_SERVER_ERROR;

  constructor(message) {
    super();

    this.message = message || this.name;
  }
}
