//Uber: profile, travel

const profile = {
    name: "Alymi Reyna",
    vehicle: "Honda Fit 2015",
    trips: 320,
    rating: 4.4,
    years: 1,

    getNameTripsAndRating: function(){
      return this.name + " has a " + this.rating + " stars rating and a total of " + this.trips + " trips."
    }
   }

const travel = {
    pickUpPoint: "Picadilly Circus",
    dropOff: "Greenwich Avenue",
    time: "14:20",

    getpickUpPointAndDropOff: function(){
      return "Travel from " + this.pickUpPoint + " to " + this.dropOff
    }
   }
   
   console.log(profile.getNameTripsAndRating())
   console.log(travel.getpickUpPointAndDropOff())
   