(function () {
  "use strict";

  var config = window.ABCPRO_ACTIVITY;
  if (!config) return;

  var intro = document.getElementById("intro-screen");
  var game = document.getElementById("game-screen");
  var complete = document.getElementById("complete-screen");
  var prompt = document.getElementById("prompt");
  var visual = document.getElementById("prompt-visual");
  var choices = document.getElementById("choices");
  var feedback = document.getElementById("feedback");
  var next = document.getElementById("next-button");
  var progress = document.getElementById("progress-fill");
  var progressTrack = progress.parentElement;
  var round = 0;
  var solved = false;
  var audioContext = null;

  document.documentElement.style.setProperty("--accent", config.accent);
  document.documentElement.style.setProperty("--accent-dark", config.accentDark);
  document.title = config.title + " | 123 ABC Pro";
  document.getElementById("activity-title").textContent = config.title;
  document.getElementById("activity-kicker").textContent = config.kicker;
  document.getElementById("hero-symbols").textContent = config.symbols.join(" ");

  function showScreen(target) {
    [intro, game, complete].forEach(function (screen) {
      screen.hidden = screen !== target;
    });
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.86;
    utterance.pitch = 1.08;
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  }

  function tone(frequency, duration) {
    try {
      audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
      var oscillator = audioContext.createOscillator();
      var gain = audioContext.createGain();
      oscillator.frequency.value = frequency;
      oscillator.type = "triangle";
      gain.gain.setValueAtTime(0.12, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
      return;
    }
  }

  function success(message) {
    solved = true;
    feedback.textContent = message || "Great job!";
    feedback.className = "feedback good";
    next.hidden = false;
    tone(660, 0.18);
    window.setTimeout(function () { tone(880, 0.24); }, 120);
    speak(feedback.textContent);
    window.setTimeout(function () { next.focus({ preventScroll: true }); }, 260);
  }

  function tryAgain(button) {
    feedback.textContent = "Try again.";
    feedback.className = "feedback try-again";
    button.classList.add("is-wrong");
    tone(190, 0.18);
    window.setTimeout(function () { button.classList.remove("is-wrong"); }, 260);
  }

  function buildVisual(question) {
    visual.replaceChildren();
    visual.removeAttribute("aria-label");
    visual.hidden = !question.visual;
    if (!question.visual) return;
    if (question.visual.type === "clock") {
      var clock = document.createElement("div");
      clock.className = "clock-face";
      clock.setAttribute("role", "img");
      clock.setAttribute("aria-label", question.visual.label);
      var hour = document.createElement("span");
      hour.className = "clock-hand hour";
      hour.style.setProperty("--angle", question.visual.hourAngle + "deg");
      var minute = document.createElement("span");
      minute.className = "clock-hand minute";
      minute.style.setProperty("--angle", question.visual.minuteAngle + "deg");
      clock.append(hour, minute);
      visual.append(clock);
      return;
    }
    (question.visual.items || []).forEach(function (item) {
      var token = document.createElement("span");
      token.className = "visual-token";
      token.textContent = item;
      token.setAttribute("aria-hidden", "true");
      visual.append(token);
    });
    if (question.visual.label) visual.setAttribute("aria-label", question.visual.label);
  }

  function buildPaint(question) {
    var grid = document.createElement("div");
    grid.className = "paint-grid";
    grid.setAttribute("role", "group");
    grid.setAttribute("aria-label", question.prompt);
    var painted = 0;
    for (var index = 0; index < question.cells; index += 1) {
      var cell = document.createElement("button");
      cell.type = "button";
      cell.className = "paint-cell";
      cell.setAttribute("aria-label", "Paint square " + (index + 1));
      cell.setAttribute("aria-pressed", "false");
      cell.addEventListener("click", function (event) {
        if (event.currentTarget.getAttribute("aria-pressed") === "true") return;
        event.currentTarget.setAttribute("aria-pressed", "true");
        painted += 1;
        tone(360 + painted * 34, 0.12);
        feedback.textContent = painted + " of " + question.goal + " painted";
        if (painted >= question.goal) {
          grid.querySelectorAll("button").forEach(function (button) { button.disabled = true; });
          success("You made a " + config.label + " picture!");
        }
      });
      grid.append(cell);
    }
    choices.append(grid);
  }

  function buildChoices(question) {
    if (question.kind === "paint") {
      buildPaint(question);
      return;
    }
    var selected = 0;
    question.choices.forEach(function (choice, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.textContent = choice.label;
      button.dataset.correct = String(Boolean(choice.correct));
      if (choice.color) {
        button.dataset.color = choice.color;
        button.style.background = choice.color;
        button.style.setProperty("--choice-ink", choice.ink || "#fff");
      }
      button.addEventListener("click", function () {
        if (solved || button.getAttribute("aria-pressed") === "true") return;
        if (!choice.correct) {
          tryAgain(button);
          return;
        }
        button.classList.add("is-correct");
        button.setAttribute("aria-pressed", "true");
        selected += 1;
        if (question.kind === "multi" && selected < question.correctCount) {
          feedback.textContent = "Good. Find " + (question.correctCount - selected) + " more.";
          feedback.className = "feedback good";
          tone(520, 0.12);
          return;
        }
        choices.querySelectorAll("button").forEach(function (item) { item.disabled = true; });
        success(question.success);
      });
      button.addEventListener("keydown", function (event) {
        if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
        event.preventDefault();
        var buttons = Array.from(choices.querySelectorAll(".choice-button"));
        var offset = event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 1;
        buttons[(buttons.indexOf(button) + offset + buttons.length) % buttons.length].focus();
      });
      button.setAttribute("aria-pressed", "false");
      button.style.setProperty("--choice-index", index);
      choices.append(button);
    });
  }

  function renderRound() {
    solved = false;
    next.hidden = true;
    feedback.textContent = "";
    feedback.className = "feedback";
    choices.replaceChildren();
    var question = config.questions[round];
    prompt.textContent = question.prompt;
    buildVisual(question);
    buildChoices(question);
    var progressValue = Math.round((round + 1) / config.questions.length * 100);
    progress.style.width = progressValue + "%";
    progressTrack.setAttribute("aria-valuenow", String(progressValue));
    progressTrack.setAttribute("aria-valuetext", "Round " + (round + 1) + " of " + config.questions.length);
    speak(question.prompt);
    var firstButton = choices.querySelector("button");
    if (firstButton) firstButton.focus({ preventScroll: true });
  }

  function finish() {
    progress.style.width = "100%";
    progressTrack.setAttribute("aria-valuenow", "100");
    progressTrack.setAttribute("aria-valuetext", "Activity complete");
    localStorage.setItem("abcpro.progress." + config.key, JSON.stringify({
      completed: true,
      completedAt: new Date().toISOString()
    }));
    document.getElementById("complete-title").textContent = config.completeTitle;
    showScreen(complete);
    speak(config.completeTitle);
  }

  function start() {
    round = 0;
    showScreen(game);
    tone(440, 0.12);
    renderRound();
  }

  document.getElementById("start-button").addEventListener("click", start);
  document.getElementById("restart-button").addEventListener("click", start);
  document.getElementById("sound-button").addEventListener("click", function () {
    var text = game.hidden ? config.title : config.questions[round].prompt;
    speak(text);
    tone(523, 0.12);
  });
  next.addEventListener("click", function () {
    if (!solved) return;
    round += 1;
    if (round >= config.questions.length) finish();
    else renderRound();
  });
})();
