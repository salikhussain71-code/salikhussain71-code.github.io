(function () {
  var r = document.documentElement;
  try { var t = localStorage.getItem("theme"); if (t === "light" || t === "dark") r.setAttribute("data-theme", t); } catch (e) {}
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.getElementById("theme");
    if (!b) return;
    function dark() { var t = r.getAttribute("data-theme"); return t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; }
    function sync() { b.setAttribute("aria-pressed", String(dark())); }
    b.addEventListener("click", function () { var n = dark() ? "light" : "dark"; r.setAttribute("data-theme", n); try { localStorage.setItem("theme", n); } catch (e) {} sync(); });
    sync();
  });
})();
