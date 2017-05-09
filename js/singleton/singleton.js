const someValue = (function () {

  var valueInstance;

  function create () {

    function justDoing() {
      //doing smth
    }

    return {
      justDoing: justDoing
    };
  }

  return {
    getInstance: function() {
      if(!valueInstance) {
        valueInstance = create();
      }
      return valueInstance;
    }
  };

  function Singleton () {
    if(!valueInstance) {
      valueInstance = intialize();
    }
  };

})();
