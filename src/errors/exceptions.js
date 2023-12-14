import { ReasonPhrases, StatusCodes } from "http-status-codes";

export class NotFoundException extends Error {
  name = ReasonPhrases.NOT_FOUND;
  status = StatusCodes.NOT_FOUND;

  constructor(message) {
    super();

    this.message = message || this.name;
  }
}
