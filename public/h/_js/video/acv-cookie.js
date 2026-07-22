function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function getClosedCaptionSizeByValue(value) {
  var size = "";
  switch (value) {
    case "1":
      size = 100;
      break;
    case "2":
      size = 150;
      break;
    case "3":
      size = 175;
      break;
    case "4":
      size = 200;
      break;
    default:
      break;
  }
  return size;
}
function getPlaybackSpeedByValue(value) {
  var speed = "";
  switch (value) {
    case "1":
      speed = 100;
      break;
    case "2":
      speed = 130;
      break;
    case "3":
      speed = 170;
      break;
    case "4":
      speed = 200;
      break;
    default:
      break;
  }
  return speed;
}
//Read cookie and set SpecialDefinitions variables.
function readCookieAndSetSpecialVars(cookieName, SpecialDefinitions) {
  var cookie = getCookie(cookieName);
  if (typeof cookie != "undefined" && cookie != "") {
        var IsCaptionsOn = cookie.charAt(0);
        var ShowProgressBar = cookie.charAt(1);
        var SpaceBarArrowControls = cookie.charAt(2);
        var AudioMuteViaKeyBoard = cookie.charAt(3);
        var ClosedCaptionSize = cookie.charAt(4);
        var PlaybackSpeed = cookie.charAt(5);

        SpecialDefinitions.isCaptionsOn = IsCaptionsOn == "1" ? true : false;
        SpecialDefinitions.showProgressBar = ShowProgressBar == "1" ? true : false;
        SpecialDefinitions.SpaceBarArrowControls = SpaceBarArrowControls == "1" ? true : false;
        SpecialDefinitions.AudioMuteViaKeyBoard = AudioMuteViaKeyBoard == "1" ? false : true;
        SpecialDefinitions.ClosedCaptionSize = getClosedCaptionSizeByValue(ClosedCaptionSize);
        SpecialDefinitions.PlaybackSpeed = getPlaybackSpeedByValue(PlaybackSpeed);
    }
}
