var weather = require('weather-js');

var UserSearch = function(name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.now();
  this.getWeather = function() {
    weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
      if(err) console.log(err);
      console.log("==========================================");
      console.log(`Where: ${JSON.stringify(result[0].location.name)}`);
      console.log(`Temp: ${JSON.stringify(result[0].current.temperature)}`);
      console.log(`Conditions: ${JSON.stringify(result[0].current.skytext)}`);
      console.log("==========================================");
      });
  };
};
module.exports = {
  UserSearch: UserSearch,
};
