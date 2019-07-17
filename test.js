(function(global) {
  'use strict';

  test();


  function test() {
    var promises = [];

    for (var i = 0; i < 10; i++) {
      var promise = request(i)
        .then(logResult)
        .catch(logError);

      promises.push(promise);
    }

    Promise
      .all(promises)
      .then(logFinalResult)
      .catch(logFinalError);
  }

  function request(arg) {
    return new Promise(function(resolve, reject) {
      if (arg % 2)
        setTimeout(resolve.bind(Promise, 'Promise ' + arg + ' resolved'), arg * 100);
      else
        setTimeout(resolve.bind(Promise, 'Promise ' + arg + ' resolved'), arg * 200);
    });
  }

  function logResult(res) {
    console.log(res);
    return res;
  }

  function logError(e) {
    console.error(e);
    throw new Error(e);
  }

  function logFinalResult(res) {
    console.log('Result: ', res);
  }

  function logFinalError(e) {
    console.error('Error: ', e);
  }

})(this);
