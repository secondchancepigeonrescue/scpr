// Runs in the <head> so the right colors are in place before the page draws.
// Follows the visitor's device setting unless they have pressed the light/dark button.
(function () {
  var theme = null;

  try {
    theme = localStorage.getItem("scpr-theme");
  } catch (e) {}

  if (!theme) {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  document.documentElement.dataset.theme = theme;
})();
