var weather = require('weather-js');

var UserSearch = function(name, location) {
    this.name = name;
    this.location = location;
  };

  console.log(
    new UserSearch("", "")
  );
