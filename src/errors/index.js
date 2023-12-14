export default class ExceptionHandler {
  /**
   * @param {import("express").Application} app
   */
  static use(app) {
    app.use(
      /**
       * @param {ExtendedError | Error} err
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */
      (err, req, res, next) => {
        console.log(
          "\x1b[31m%s\x1b[0m",
          `[ERROR] : ${err.message}`
        );

        res.status(err.status || 500).json({
          error: {
            name: err.name,
            message: err.message,
          },
        });
      }
    );
  }
}
