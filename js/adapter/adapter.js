function CoffeeAmericanoAutomat () {
   this.makeCoffe = function () {
     console.log('Coffee making')
   }

   this.supplyCoffe = function () {
     console.log('supply to Client')
   }
}

function CapuchinoMaker () {
  this.makeCapuchino = function () {
    console.log('Coffee making');
    console.log('Add milk to cup');
    console.log('Add coffee to cup')
  }

  this.supplyCoffe = function () {
    console.log('Supply capuchino fast!')
  }
}

function CapuchinoAdapter (objectCapuchinoMaker) {
  this.capuchinoMaker = objectCapuchinoMaker;

  this.makeCoffe = function () {
    this.capuchinoMaker.makeCapuchino()
  }

  this.supplyCoffe = function () {
    this.capuchinoMaker.supplyCoffe();
  }
}
