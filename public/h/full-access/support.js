(function () {
  "use strict";

  var FULL_ACCESS_KEY = "abcpro.fullAccess";
  var PROFILE_KEY = "abcpro.profile";
  var lastFocused = null;
  var modalRoot = null;

  var colorRoutes = {
    orange: "/h/colors/orange/index.html",
    yellow: "/h/colors/yellow/index.html",
    green: "/h/colors/green/index.html",
    blue: "/h/colors/blue/index.html",
    purple: "/h/colors/purple/index.html",
    brown: "/h/colors/brown/index.html",
    white: "/h/colors/white/index.html",
    black: "/h/colors/black/index.html",
    gray: "/h/colors/gray/index.html",
    pink: "/h/colors/pink/index.html"
  };

  var colorFilters = {
    orange: "sepia(1) saturate(7) hue-rotate(340deg)",
    yellow: "sepia(1) saturate(6) hue-rotate(2deg)",
    green: "sepia(1) saturate(5) hue-rotate(75deg)",
    blue: "sepia(1) saturate(6) hue-rotate(165deg)",
    purple: "sepia(1) saturate(6) hue-rotate(225deg)",
    brown: "sepia(1) saturate(3) hue-rotate(335deg) brightness(.78)",
    white: "brightness(1.08)",
    black: "brightness(.55)",
    gray: "brightness(.82)",
    pink: "sepia(1) saturate(5) hue-rotate(285deg)"
  };

  var mathTiles = [
    { row: 1, column: 2, slug: "three-crows", label: "Three Crows", icon: "3", color: "#5d6670" },
    { row: 1, column: 4, slug: "five-little-bears", label: "Five Little Bears", icon: "5", color: "#bd7b42" },
    { row: 1, column: 5, slug: "higgilty-piggilty", label: "Higgilty Piggilty", icon: "1·2·3", color: "#d54e3d" },
    { row: 2, column: 1, slug: "ten-little-kittens", label: "Ten Little Kittens", icon: "10", color: "#7b6aa8" },
    { row: 2, column: 3, slug: "five-little-farmers", label: "Five Little Farmers", icon: "5+", color: "#3b9c58" },
    { row: 2, column: 4, slug: "pirate-song", label: "Pirate Song", icon: "+", color: "#e08a25" },
    { row: 2, column: 5, slug: "time-song", label: "The Time Song", icon: "◷", color: "#4c91b5" },
    { row: 3, column: 2, slug: "st-ives", label: "Going to St. Ives", icon: "×", color: "#9272b7" },
    { row: 3, column: 3, slug: "today-is-monday", label: "Today Is Monday", icon: "7", color: "#ef6a4b" }
  ];

  function isFullAccess() {
    return localStorage.getItem(FULL_ACCESS_KEY) === "true";
  }

  function setFullAccess(enabled) {
    localStorage.setItem(FULL_ACCESS_KEY, String(enabled));
    var url = new URL(window.location.href);
    url.searchParams.set("full", enabled ? "1" : "0");
    window.location.replace(url.toString());
  }

  function ensureModal() {
    if (modalRoot) return modalRoot;
    modalRoot = document.createElement("div");
    modalRoot.className = "abcpro-modal-backdrop";
    modalRoot.hidden = true;
    modalRoot.innerHTML = "<section class=\"abcpro-modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"abcpro-modal-title\"><header class=\"abcpro-modal-header\"><h2 id=\"abcpro-modal-title\"></h2><button class=\"abcpro-modal-close\" type=\"button\" aria-label=\"Close\">×</button></header><div class=\"abcpro-modal-content\"></div></section>";
    document.body.append(modalRoot);
    modalRoot.querySelector(".abcpro-modal-close").addEventListener("click", closeModal);
    modalRoot.addEventListener("click", function (event) {
      if (event.target === modalRoot) closeModal();
    });
    modalRoot.addEventListener("keydown", trapFocus);
    return modalRoot;
  }

  function trapFocus(event) {
    if (event.key === "Escape") {
      closeModal();
      return;
    }
    if (event.key !== "Tab") return;
    var focusable = Array.from(modalRoot.querySelectorAll("button, input, a[href]"));
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function closeModal() {
    if (!modalRoot) return;
    modalRoot.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function openModal(mode, trigger) {
    var root = ensureModal();
    var title = root.querySelector("#abcpro-modal-title");
    var content = root.querySelector(".abcpro-modal-content");
    lastFocused = trigger || document.activeElement;
    if (mode === "profile" || mode === "join" || mode === "signin") {
      var profile = localStorage.getItem(PROFILE_KEY) || "";
      title.textContent = "Local profile";
      content.innerHTML = "<p>Full Access works on this device without an external account.</p><label>Player name<input id=\"abcpro-profile-name\" maxlength=\"24\" autocomplete=\"nickname\"></label><button class=\"abcpro-primary-action\" type=\"button\">Save and enable Full Access</button>";
      var input = content.querySelector("input");
      input.value = profile;
      content.querySelector("button").addEventListener("click", function () {
        localStorage.setItem(PROFILE_KEY, input.value.trim() || "Learner");
        localStorage.setItem(FULL_ACCESS_KEY, "true");
        closeModal();
        if (document.body.dataset.fullAccessHub) setFullAccess(true);
      });
    } else if (mode === "help") {
      title.textContent = "Help";
      content.innerHTML = "<p>Choose an answer, paint square, or activity tile to continue. Use the music button to hear the current prompt again.</p><ul><li>Tab and arrow keys move through controls.</li><li>Enter or Space activates the focused control.</li><li>Escape closes this dialog.</li></ul><p><a href=\"/h/accessibility/index.html\">Open accessibility options</a></p>";
    } else {
      title.textContent = "Accessibility";
      content.innerHTML = "<p>Use Tab to move through controls, Enter or Space to activate them, and Escape to close dialogs.</p><ul><li>Activities include visible focus states and spoken prompts.</li><li>Videos include captions and local transcripts.</li><li>Reduced-motion preferences are respected in the new activities.</li></ul>";
    }
    root.hidden = false;
    document.body.style.overflow = "hidden";
    var first = root.querySelector("input, button");
    if (first) first.focus();
  }

  function createAccessBar(kind) {
    var full = isFullAccess();
    var bar = document.createElement("div");
    bar.className = "abcpro-access-bar" + (kind === "math" ? " math-access-bar" : "");
    bar.innerHTML = "<span class=\"abcpro-access-label\">123 ABC Pro " + (full ? "Full Access" : "Visitor") + "</span><button class=\"abcpro-access-button\" type=\"button\" aria-pressed=\"" + full + "\">" + (full ? "Visitor View" : "Full Access") + "</button><button class=\"abcpro-profile-button\" type=\"button\" aria-label=\"Local profile\" title=\"Local profile\">◎</button>";
    bar.querySelector(".abcpro-access-button").addEventListener("click", function () { setFullAccess(!full); });
    bar.querySelector(".abcpro-profile-button").addEventListener("click", function (event) { openModal("profile", event.currentTarget); });
    return bar;
  }

  function unlockColors() {
    document.querySelectorAll(".rows-container .disabled img").forEach(function (image) {
      var match = image.alt.toLowerCase().match(/color ([a-z]+)/);
      if (!match || !colorRoutes[match[1]]) return;
      var span = image.closest("span");
      var link = document.createElement("a");
      link.className = span.className.replace("disabled", "") + " disabled-full-access";
      link.href = colorRoutes[match[1]];
      link.setAttribute("aria-label", "Open " + match[1] + " activity");
      link.style.setProperty("--unlock-filter", colorFilters[match[1]]);
      image.alt = "Color " + match[1] + " activity";
      link.append(image);
      span.replaceWith(link);
    });
  }

  function unlockMath() {
    var container = document.getElementById("animation_container");
    if (!container) return;
    var grid = document.createElement("div");
    grid.className = "abcpro-math-grid";
    grid.setAttribute("aria-label", "Full Access math activities");
    mathTiles.forEach(function (tile) {
      var link = document.createElement("a");
      link.className = "abcpro-math-tile";
      link.href = "/h/mathsongs/" + tile.slug + "/index.html";
      link.style.gridRow = tile.row;
      link.style.gridColumn = tile.column;
      link.style.setProperty("--tile-color", tile.color);
      link.innerHTML = "<span aria-hidden=\"true\">" + tile.icon + "</span>" + tile.label;
      grid.append(link);
    });
    container.append(grid);
  }

  function setupHub() {
    var kind = document.body.dataset.fullAccessHub;
    if (!kind) return;
    var query = new URL(window.location.href).searchParams.get("full");
    if (query === "1") localStorage.setItem(FULL_ACCESS_KEY, "true");
    if (query === "0") localStorage.setItem(FULL_ACCESS_KEY, "false");
    var full = isFullAccess();
    document.body.dataset.fullAccess = String(full);
    var oldBanner = document.querySelector(".guest-top-banner");
    var accessBar = createAccessBar(kind);
    if (oldBanner) oldBanner.replaceWith(accessBar);
    else document.body.prepend(accessBar);
    if (full && kind === "colors") unlockColors();
    if (full && kind === "math") unlockMath();
  }

  function setupSupportActions() {
    document.querySelectorAll("[data-abcpro-action], .accessible-link").forEach(function (control) {
      control.addEventListener("click", function (event) {
        event.preventDefault();
        openModal(control.dataset.abcproAction || "accessibility", control);
      });
    });
    document.querySelectorAll('a[href="#"]').forEach(function (link) {
      var label = (link.textContent || "").trim().toLowerCase();
      if (!label) return;
      if (label.includes("join") || label.includes("sign in") || label.includes("profile")) {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          openModal(label.includes("join") ? "join" : "signin", link);
        });
      }
    });
  }

  function improveCanvasAccess() {
    document.querySelectorAll("canvas").forEach(function (canvas) {
      canvas.setAttribute("role", "application");
      canvas.setAttribute("tabindex", "0");
      canvas.setAttribute("aria-label", document.title.replace(" | 123 ABC Pro", "") + " interactive activity");
    });
  }

  function addRuntimeBrand() {
    if (document.querySelector(".brand-wordmark, .support-brand, .logo, .abcpro-access-bar")) return;
    var brand = document.createElement("div");
    brand.className = "abcpro-runtime-brand";
    brand.textContent = "123 ABC Pro";
    document.body.append(brand);
  }

  setupHub();
  setupSupportActions();
  improveCanvasAccess();
  addRuntimeBrand();
  window.ABCProSupport = { openModal: openModal, isFullAccess: isFullAccess };
})();
