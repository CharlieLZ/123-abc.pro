(function () {
  "use strict";

  var form = document.getElementById("local-profile-form");
  if (!form) return;

  var profileKey = "abcpro.profile";
  var fullAccessKey = "abcpro.fullAccess";
  var nameInput = document.getElementById("profile-name");
  var fullAccess = document.getElementById("full-access");
  var status = document.getElementById("profile-status");
  var reset = document.getElementById("reset-progress");

  nameInput.value = localStorage.getItem(profileKey) || "";
  fullAccess.checked = localStorage.getItem(fullAccessKey) === "true";

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.setItem(profileKey, nameInput.value.trim() || "Learner");
    localStorage.setItem(fullAccessKey, String(fullAccess.checked));
    status.textContent = "Saved on this device.";
  });

  reset.addEventListener("click", function () {
    if (!window.confirm("Reset completed activity progress on this device?")) return;
    Object.keys(localStorage).forEach(function (key) {
      if (key.indexOf("abcpro.progress.") === 0) localStorage.removeItem(key);
    });
    status.textContent = "Activity progress reset.";
  });
})();
