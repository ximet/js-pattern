var BuyTicketAirplane = function () {
  this.buy = function () { console.log('buy ticket airplane'); }
}

var TransportingToAirport = function () {
  this.transport = function () { console.log('going to airport'); }
}

var CollectThing = function () {
  this.collect = function () { console.log('collect thing'); }
}

var ChooseCountryTrip = function () {
  this.choose = function () { console.log('choose a county trip') }
}

var TripFacade = function () {
  var chooseCountry = new ChooseCountry();
  var buyTicket = new BuyTicketAirplane();
  var collect = new CollectThing();
  var transporting = new TransportingToAirport();

  this.goToTrip = function () {
    chooseCountry.choose();
    buyTicket.buy();
    collect.collect();
    transporting.transport();
  }
}

function run () {
  var objectTrip = new TripFacade();

  objectTrip.goToTrip();
}
