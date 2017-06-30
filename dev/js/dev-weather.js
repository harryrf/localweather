// HTTP and HTTPs are interchangable for these API's
// Use HTTP for offline editing
// Use HTTPS for online editing

// &#8451; = degrees Celsius
// &#8457; = degrees Fahrenheit

$(document).ready(function () {
  // Use this one for location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var coords = position.coords.latitude + "," + position.coords.longitude;

      // *NOTE: Change location API to browser, this one is off
      // location API
      //  $.getJSON("https://ipinfo.io/json", function (location) {
      //var coords = location.loc;

      // Live API
      api =
        "https://api.apixu.com/v1/forecast.json?key=49f97e05d5144c9c829185418170806&q=" +
        coords +
        "&days=3";

      devapi =
        "http://192.168.1.10:8080/projects/localweather/dev/json/dev-3-day-forecast.json";

      // Location

      $("#userLoc").html(location.name);

      // coordinates gathered from ipinfo.io
      // it's more precise

      // #### ALL CONTENT BELOW THIS LINE WILL GO INTO LIVE WEATHER.JS FILE ####

      // weather API
      $.getJSON(api, function (geo) {
        var location = geo.location;
        current = geo.current;
        condition = geo.current.condition;
        forecastday = geo.forecast.forecastday[0].day;
        astro = geo.forecast.forecastday[0].astro;
        is_day = geo.current.is_day;
        cCode = geo.current.condition.code;

        //    NO LONGER NEEDED, just proud of it
        //
        //    check how much total precipitation will
        //    occur in current day 's 24 hours
        //    var hoursToday = geo.forecast.forecastday[0].hour;
        //    var totalRain_in = 0;
        //    // After testing, this keeps adding to totalRain_in
        //    // day after day and never resets. Needs fixed.
        //    for (i = 0; i < hoursToday.length; i++) {
        //      totalRain_in += hoursToday[i].precip_in;
        //    }

        // check if is_day == 1 (day)
        // then check the conidition and set
        // icon based on the day conditions.
        // if is_day != (night) check conditions
        // then set icon based on night conditions.

        var icon = "";

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
              iconMedium;
              icon = "climacon sleet iconMedium";
              break;

            case cCode == 1276:
              icon = "climacon lightning iconMedium";
              break;
          }
        }

        // Current Condition Text and Icon

        $("#currentConditionText").html(condition.text);
        $("#currentConditionIcon").append("<div class='" + icon + "'></div>");

        // Switch for Fahrenheit and Celsius

        var fahrenheit = true;

        function changeUnit() {
          if (fahrenheit == true) {
            // current temp
            temp = Math.round(current.temp_f) + "&#8457;";
            // current info
            feelslike = Math.round(current.feelslike_f) + "&#8457;";
            maxtemp = Math.round(forecastday.maxtemp_f) + "&#8457;";
            mintemp = Math.round(forecastday.mintemp_f) + "&#8457;";
            wind = Math.round(current.wind_mph) + " MPH";
            vis = current.vis_miles + " MI";
            // forecasted current day
            avgtemp = Math.round(forecastday.avgtemp_f) + "&#8457;";
            maxwind = forecastday.maxwind_mph + " MPH";
            avgvis = forecastday.avgvis_miles + " MI";
            totalprecip = Math.round(forecastday.totalprecip_in) + " IN";

            fahrenheit = false;

          } else {
            // current temp
            temp = Math.round(current.temp_c) + "&#8451;";
            // current info
            feelslike = Math.round(current.feelslike_c) + "&#8451;";
            maxtemp = Math.round(forecastday.maxtemp_c) + "&#8451;";
            mintemp = Math.round(forecastday.mintemp_c) + "&#8451;";
            wind = Math.round(current.wind_kph) + " KPH";
            vis = current.vis_km + " KM";
            // forecasted current day
            avgtemp = Math.round(forecastday.avgtemp_c) + "&#8451;";
            maxwind = forecastday.maxwind_kph + " KPH";
            avgvis = forecastday.avgvis_km + " KM";
            totalprecip = Math.round(forecastday.totalprecip_mm / 100) + " CM";

            fahrenheit = true;

          }

          // Current Weather

          $("#currentTemp").html(temp);

          // Current Info

          $("#feelsLike").html(feelslike);
          $("#humidity").html(current.humidity + "&#37;");
          $("#maxTemp").html(maxtemp);
          $("#minTemp").html(mintemp);
          $("#currentWindSpeed").html(wind);
          $("#currentWindDirection").html(current.wind_dir);
          $("#visibility").html(vis);

          // Forecasted Current Day

          $("#totalRain").html(totalprecip);
          $("#avgTemp").html(avgtemp);
          $("#avgHumidity").html(forecastday.avghumidity + "&#37;");
          $("#maxWind").html(maxwind);
          $("#sunrise").html(astro.sunrise);
          $("#sunset").html(astro.sunset);
          $("#moonrise").html(astro.moonrise);
          $("#moonset").html(astro.moonset);

          //          return fahrenheit;
        } // end changeUnit();

        changeUnit();

        $(".changeUnit").on("click", function () {
          changeUnit();
        });

      }); // getJSON
    }); // nav func
  } // nav if
}); // doc ready
