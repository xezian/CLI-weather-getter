var weather = require('weather-js');

var UserSearch = function(name, location) {
    this.name = name;
    this.location = location;
    this.getWeather = function() {
      weather.find({search: location, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        console.log(JSON.stringify(result, null, 2));
       });
    };
  };
  var Jason = new UserSearch("Jason","Tucson")
  Jason.getWeather();
  module.exports = {
    UserSearch: UserSearch,
  }
