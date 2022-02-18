/** Class representing a Upload. */
export default class Upload {
  /**
   * Create a user.
   * @param {String} id - Place holder for a unique Firebase id.
   * @param {String} webPath - A generated URL for the file.
   * @param {String} format - the file extension.
   * @param {String} title - An optional title given to the file by the user.
   */
  id = "";
  webPath = "";
  format = "";
  title = "";

  /**
   * @param  {Object} args - Upload arguments supplied during
   * upload creation
   */
  constructor(args) {
    Object.keys(args).forEach(v => {
      this[v] = args[v];
    });

    return {
      ...this,
    };
  }
}
