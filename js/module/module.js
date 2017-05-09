const myModule = (function(){
  const privateVar = 'Some string';

  var someGetMethod = function() {
    return privateVar;
  }

  var secondSomeMethod = function() {
    console.log('Worked?!')
  }

  return {
    first: someGetMethod,
    second: secondSomeMethod
  }
})()

myModule.first();
myModule.second();
