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
      // eslint-disable-next-line no-unused-vars
      (err, req, res, next) => {
        console.log(
          "\x1b[31m%s\x1b[0m",
          `
          [ERROR] : ${err.message}
          [CODE] : ${err.status || 500}
          [TIMESTAMP] : ${new Date().toJSON()}
          `,
        );

        return res.status(err.status || 500).json({
          error: {
            name: err.name,
            message: err.message,
          },
        });
      },
    );
  }
}
