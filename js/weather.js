// HTTP and HTTPs are interchangable for these API's
// Use HTTP for offline editing
// Use HTTPS for online editing


// &#8451; = degrees Celsius
// &#8457; = degrees Fahrenheit

$(document).ready(function () {

  // location API
  $.getJSON("https://ipinfo.io/json", function (location) {

    var coords = location.loc;
    var api = "https://api.apixu.com/v1/current.json?&key=49f97e05d5144c9c829185418170806&q=" + coords;
    // weather API
    $.getJSON(api, function (geo) {

      var location = geo.location;
      var current = geo.current;
      var condition = geo.current.condition;
      var is_day = geo.current.is_day;
      var cCode = geo.current.condition.code;
      var icon = "";

      // check if is_day == 1 (day) 
      // then check the conidition and set
      // icon based on the day conditions.
      // if is_day != (night) check conditions
      // then set icon based on night conditions.
      if (is_day == 1) {
        switch (true) {

          case cCode == 1000:
            icon = "climacon sun";
            break;

          case cCode == 1003:
            icon = "climacon cloud sun";
            break;

          case cCode == 1006:
            icon = "climacon cloud";
            break;

          case cCode == 1009:
            icon = "climacon haze sun";
            break;

          case cCode == 1030:
          case cCode == 1135:
            icon = "climacon fog sun";
            break;

          case cCode == 1063:
          case cCode == 1180:
          case cCode == 1183:
          case cCode == 1240:
          case cCode == 1243:

            icon = "climacon rain sun";
            break;

          case cCode == 1066:
          case cCode == 1210:
          case cCode == 1216:
          case cCode == 1222:
          case cCode == 1255:
          case cCode == 1258:
            icon = "climacon snow sun";
            break;

          case cCode == 1069:
          case cCode == 1204:
          case cCode == 1207:
          case cCode == 1249:
          case cCode == 1252:
          case cCode == 1261:
          case cCode == 1264:
            icon = "climacon sleet sun";
            break;

          case cCode == 1072:
          case cCode == 1198:
          case cCode == 1201:
            // needs climacon thermometer
            icon = "climacon rain";
            break;

          case cCode == 1186:
          case cCode == 1189:
            icon = "climacon rain";
            break;

          case cCode == 1087:
          case cCode == 1273:
            icon = "climacon lightning sun";
            break;

          case cCode == 1279:
            // needs climacon snowflake
            icon = "climacon lightning sun";
            break;

          case cCode == 1282:
            // needs climacon snowflake
            icon = "climacon lightning";
            break;

          case cCode == 1114:
            // needs climacon wind
            icon = "climacon snow";
            break;

          case cCode == 1117:
          case cCode == 1213:
          case cCode == 1219:
          case cCode == 1225:
            icon = "climacon snow";
            break;

          case cCode == 1147:
            // needs climacon thermometer
            icon = "climacon fog";
            break;

          case cCode == 1150:
          case cCode == 1153:
            icon = "climacon drizzle sun";
            break;

          case cCode == 1168:
          case cCode == 1171:
            // needs climacon thermometer
            icon = "climacon drizzle";
            break;

          case cCode == 1192:
          case cCode == 1246:
            icon = "climacon downpour sun";
            break;

          case cCode == 1195:
            icon = "climacon downpour";
            break;

          case cCode == 1237:
            icon = "climacon sleet";
            break;

          case cCode == 1276:
            icon = "climacon lightning";
            break;

        }
      } else {
        switch (true) {

          case cCode == 1000:
            icon = "climacon moon";
            break;

          case cCode == 1003:
            icon = "climacon cloud moon";
            break;

          case cCode == 1006:
            icon = "climacon cloud";
            break;

          case cCode == 1009:
            icon = "climacon haze moon";
            break;

          case cCode == 1030:
          case cCode == 1135:
            icon = "climacon fog moon";
            break;

          case cCode == 1063:
          case cCode == 1180:
          case cCode == 1183:
          case cCode == 1240:
          case cCode == 1243:

            icon = "climacon rain moon";
            break;

          case cCode == 1066:
          case cCode == 1210:
          case cCode == 1216:
          case cCode == 1222:
          case cCode == 1255:
          case cCode == 1258:
            icon = "climacon snow moon";
            break;

          case cCode == 1069:
          case cCode == 1204:
          case cCode == 1207:
          case cCode == 1249:
          case cCode == 1252:
          case cCode == 1261:
          case cCode == 1264:
            icon = "climacon sleet moon";
            break;

          case cCode == 1072:
          case cCode == 1198:
          case cCode == 1201:
            // needs climacon thermometer
            icon = "climacon rain";
            break;

          case cCode == 1186:
          case cCode == 1189:
            icon = "climacon rain";
            break;

          case cCode == 1087:
          case cCode == 1273:
            icon = "climacon lightning moon";
            break;

          case cCode == 1279:
            // needs climacon snowflake
            icon = "climacon lightning moon";
            break;

          case cCode == 1282:
            // needs climacon snowflake
            icon = "climacon lightning";
            break;

          case cCode == 1114:
            // needs climacon wind
            icon = "climacon snow";
            break;

          case cCode == 1117:
          case cCode == 1213:
          case cCode == 1219:
          case cCode == 1225:
            icon = "climacon snow";
            break;

          case cCode == 1147:
            // needs climacon thermometer
            icon = "climacon fog";
            break;

          case cCode == 1150:
          case cCode == 1153:
            icon = "climacon drizzle moon";
            break;

          case cCode == 1168:
          case cCode == 1171:
            // needs climacon thermometer
            icon = "climacon drizzle";
            break;

          case cCode == 1192:
          case cCode == 1246:
            icon = "climacon downpour moon";
            break;

          case cCode == 1195:
            icon = "climacon downpour";
            break;

          case cCode == 1237:
            icon = "climacon sleet";
            break;

          case cCode == 1276:
            icon = "climacon lightning";
            break;
        }
      }

      $("#currentConditionIcon").append("<div class='climaLarge " + icon + "'></div>");
      // $("#currentConditionIcon").prepend("<img id='conditionIcon' src='https:" + condition.icon + "' alt='' /> <br/>" + condition.text);
      $("#temp").html(current.temp_f + "&#8457;");
      $("#feelsLike").html("Feels like: " + current.feelslike_f + "&#8457;");
    });

    $("#userLoc").html("Weather for " + location.city + ", " + location.region + ".");
  });
});
