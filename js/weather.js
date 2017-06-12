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
      var icon = "";
      var code = geo.current.condition.code;

      switch (true) {
        case code === 1000:
          icon = "<div class='climacon sun'></div>";
          // icon == "http://abstrakt.ws/uploaded/harry-2015.jpg";
          break;
      }
      $("currentConditionIcon").html(icon);
      // $("#currentConditionIcon").prepend("<img id='conditionIcon' src='https:" + condition.icon + "' alt='' /> <br/>" + condition.text);
      $("#temp").html(current.temp_f + "&#8457;");
      $("#feelsLike").html("Feels like: " + current.feelslike_f + "&#8457;");
    });

    $("#userLoc").html("Weather for " + location.city + ", " + location.region + ".");
  });
});
