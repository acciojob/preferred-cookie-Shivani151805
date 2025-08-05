//your JS code here. If required.
// Utility to get cookie by name
function getCookie(name) {
  const value = document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="));
  return value ? value.split("=")[1] : null;
}

// Utility to set cookie
function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 86400000)); // 86400000ms = 1 day
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Apply CSS variables based on cookie or default
function applyPreferences() {
  const fontSize = getCookie("fontsize") || "16";
  const fontColor = getCookie("fontcolor") || "#000000";

  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  // Also update the form fields with saved values
  document.getElementById("fontsize").value = fontSize;
  document.getElementById("fontcolor").value = fontColor;
}

// On form submit, save preferences in cookies and apply them
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save to cookies
  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  // Apply immediately
  applyPreferences();
});

// On page load
applyPreferences();
