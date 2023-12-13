import { content } from "../database/db";

export default class ContentService {
  _model = content;

  get model() {
    return this._model;
  }

  async getAllContents() {
    const contents = await this._model.findMany({});

    return {
        data: contents
    } 
  }
}
