


exports.getDate = function() {
  var today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  return day;

}

function getDay() {
  var today = new Date();

  var options = {
    weekday: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  return day;

}
