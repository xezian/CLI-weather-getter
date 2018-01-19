var UserSearch = require("./user.js").UserSearch;
var fs = require("fs");

// create a weatheradmin constructor
var WeatherAdmin = function(){
// add a method called newUserSearch
  // teaks name and location
  // searches weather
  // appends user name, location, and date to logfile

  this.newUserSearch = function(name, location) {
    var search = new UserSearch(name, location);
    search.getWeather();

    var logText = 
      "\nName:" + search.name + " Location: " + search.location + " Date: " + search.date;

    fs.appendFile("log.txt", logText, function(){});
  }

  this.getData = function() {
    // console log all the searches in log file...
    fs.readFile("log.txt", "utf8", function(error, data) {
      console.log(data);
    });
  }
}

module.exports = WeatherAdmin;


// var admin = new WeatherAdmin();

// admin.newUserSearch("Billy Joel", "New York, NY");
// search weather (and console log it?)
// add user name, location, date to logfile

// admin.getData();
// logs all searches we stored in logfile
