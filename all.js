(function(global) {
  'use strict';

  /**
   * Take an array of promises and return a promise that resolve when all the
   * given promise are resolved, or reject as soon as a promise is rejected.
   *
   * The promise resolve with the values returned by the given promises, or
   * reject with the error of the promise rejected.
   *
   * @param  {Array} promises An array of promises
   *
   * @return {Promise<Array>}          [description]
   */
  global._all = function all(promises) {
    return new Promise(function(resolve, reject) {

    });
  }

})(this);
