// HTTP and HTTPs are interchangable for these API's
// Use HTTP for offline editing
// Use HTTPS for online editing


// &#8451; = degrees Celsius
// &#8457; = degrees Fahrenheit

$(document).ready(function () {

  // location API
  $.getJSON("https://ipinfo.io/json", function (location) {
    var coords = location.loc;

    // Live API
    var api = "https://api.apixu.com/v1/forecast.json?key=49f97e05d5144c9c829185418170806&q=" + coords + "&days=3";

    // Dev API
    var devapi = "http://192.168.0.2:8080/json/dev-3-day-forecast.json";

    // coordinates gathered from ipinfo.io
    // it's more precise
    $("#userLoc").html(location.city + ", " + location.region);

    // weather API
    $.getJSON(devapi, function (geo) {


      var location = geo.location;
      var current = geo.current;
      var condition = geo.current.condition;
      var forecastday = geo.forecast.forecastday[0].day;
      var is_day = geo.current.is_day;
      var cCode = geo.current.condition.code;

      var icon = "";

      // check how much total precipitation will
      // occur in current day's 24 hours
      var hoursToday = geo.forecast.forecastday[0].hour;
      var totalRain_in = 0;

      for (i = 0; i < hoursToday.length; i++) {
        totalRain_in += hoursToday[i].precip_in;
      }

      // check if is_day == 1 (day) 
      // then check the conidition and set
      // icon based on the day conditions.
      // if is_day != (night) check conditions
      // then set icon based on night conditions.
      if (is_day == 1) {
        switch (true) {

          case cCode == 1000:
            icon = "climacon sun iconMedium";
            break;

          case cCode == 1003:
            icon = "climacon cloud sun iconMedium";
            break;

          case cCode == 1006:
            icon = "climacon cloud iconMedium";
            break;

          case cCode == 1009:
            icon = "climacon haze sun iconMedium";
            break;

          case cCode == 1030:
          case cCode == 1135:
            icon = "climacon fog sun iconMedium";
            break;

          case cCode == 1063:
          case cCode == 1180:
          case cCode == 1183:
          case cCode == 1240:
          case cCode == 1243:

            icon = "climacon rain sun iconMedium";
            break;

          case cCode == 1066:
          case cCode == 1210:
          case cCode == 1216:
          case cCode == 1222:
          case cCode == 1255:
          case cCode == 1258:
            icon = "climacon snow sun iconMedium";
            break;

          case cCode == 1069:
          case cCode == 1204:
          case cCode == 1207:
          case cCode == 1249:
          case cCode == 1252:
          case cCode == 1261:
          case cCode == 1264:
            icon = "climacon sleet sun iconMedium";
            break;

          case cCode == 1072:
          case cCode == 1198:
          case cCode == 1201:
            // needs climacon thermometer
            icon = "climacon rain iconMedium";
            break;

          case cCode == 1186:
          case cCode == 1189:
            icon = "climacon rain iconMedium";
            break;

          case cCode == 1087:
          case cCode == 1273:
            icon = "climacon lightning sun iconMedium";
            break;

          case cCode == 1279:
            // needs climacon snowflake
            icon = "climacon lightning sun iconMedium";
            break;

          case cCode == 1282:
            // needs climacon snowflake
            icon = "climacon lightning iconMedium";
            break;

          case cCode == 1114:
            // needs climacon wind
            icon = "climacon snow iconMedium";
            break;

          case cCode == 1117:
          case cCode == 1213:
          case cCode == 1219:
          case cCode == 1225:
            icon = "climacon snow iconMedium iconMedium";
            break;

          case cCode == 1147:
            // needs climacon thermometer
            icon = "climacon fog iconMedium";
            break;

          case cCode == 1150:
          case cCode == 1153:
            icon = "climacon drizzle sun iconMedium";
            break;

          case cCode == 1168:
          case cCode == 1171:
            // needs climacon thermometer
            icon = "climacon drizzle iconMedium";
            break;

          case cCode == 1192:
          case cCode == 1246:
            icon = "climacon downpour sun iconMedium";
            break;

          case cCode == 1195:
            icon = "climacon downpour iconMedium";
            break;

          case cCode == 1237:
            icon = "climacon sleet iconMedium";
            break;

          case cCode == 1276:
            icon = "climacon lightning iconMedium";
            break;

        }
      } else {
        switch (true) {

          case cCode == 1000:
            icon = "climacon moon iconLarge";
            break;

          case cCode == 1003:
            icon = "climacon cloud moon iconMedium";
            break;

          case cCode == 1006:
            icon = "climacon cloud iconMedium";
            break;

          case cCode == 1009:
            icon = "climacon haze moon iconMedium";
            break;

          case cCode == 1030:
          case cCode == 1135:
            icon = "climacon fog moon iconMedium";
            break;

          case cCode == 1063:
          case cCode == 1180:
          case cCode == 1183:
          case cCode == 1240:
          case cCode == 1243:

            icon = "climacon rain moon iconMedium";
            break;

          case cCode == 1066:
          case cCode == 1210:
          case cCode == 1216:
          case cCode == 1222:
          case cCode == 1255:
          case cCode == 1258:
            icon = "climacon snow moon iconMedium";
            break;

          case cCode == 1069:
          case cCode == 1204:
          case cCode == 1207:
          case cCode == 1249:
          case cCode == 1252:
          case cCode == 1261:
          case cCode == 1264:
            icon = "climacon sleet moon iconMedium";
            break;

          case cCode == 1072:
          case cCode == 1198:
          case cCode == 1201:
            // needs climacon thermometer
            icon = "climacon rain iconMedium";
            break;

          case cCode == 1186:
          case cCode == 1189:
            icon = "climacon rain iconMedium";
            break;

          case cCode == 1087:
          case cCode == 1273:
            icon = "climacon lightning moon iconMedium";
            break;

          case cCode == 1279:
            // needs climacon snowflake
            icon = "climacon lightning moon iconMedium";
            break;

          case cCode == 1282:
            // needs climacon snowflake
            icon = "climacon lightning iconMedium";
            break;

          case cCode == 1114:
            // needs climacon wind
            icon = "climacon snow iconMedium";
            break;

          case cCode == 1117:
          case cCode == 1213:
          case cCode == 1219:
          case cCode == 1225:
            icon = "climacon snow iconMedium";
            break;

          case cCode == 1147:
            // needs climacon thermometer
            icon = "climacon fog iconMedium";
            break;

          case cCode == 1150:
          case cCode == 1153:
            icon = "climacon drizzle moon iconMedium";
            break;

          case cCode == 1168:
          case cCode == 1171:
            // needs climacon thermometer
            icon = "climacon drizzle iconMedium";
            break;

          case cCode == 1192:
          case cCode == 1246:
            icon = "climacon downpour moon iconMedium";
            break;

          case cCode == 1195:
            icon = "climacon downpour iconMedium";
            break;

          case cCode == 1237:
            iconMedium
            icon = "climacon sleet iconMedium";
            break;

          case cCode == 1276:
            icon = "climacon lightning iconMedium";
            break;
        }
      }

      $("#test").html(condition.text);
      // Current top
      $("#currentConditionText").html(condition.text);
      $("#currentConditionIcon").append("<div class='" + icon + "'></div>");
      $("#currentTemp").html(current.temp_f + "&#8457;");

      // Current bottom

      $("#feelsLike").html("Feels like " + current.feelslike_f + "&#8457;");
      $("#humidity").html("Humidity: " + current.humidity + "&#37;");
      $("#maxTemp").html("High: " + forecastday.maxtemp_f + "&#8457;");
      $("#minTemp").html("Low: " + forecastday.mintemp_f + "&#8457;");

      // Extra info

      $("#totalRain").html("Rain: " + totalRain_in + "\"");

    });

  });

});
