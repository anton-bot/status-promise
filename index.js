/**
 * A Promise that exposes its status via the `status` property
 * and the promise itself via the `promise` property.
 */
class PromiseWithStatus {
  /**
   * @param {function} A function that takes two parameters,
   * `resolve` and `reject`.
   */
  constructor(fn) {
    let self = this;
    this.status = 'pending';
    this.promise = new Promise((resolve, reject) => {
      fn(
        () => { self.status = 'fulfilled'; resolve(); },
        () => { self.status = 'rejected'; reject(); },
      );
    });
  }
}

module.exports = PromiseWithStatus;
