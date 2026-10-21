(function () {
  const $ = (id) => document.getElementById(id);
  const sections = { start: $("start"), quiz: $("quiz"), result: $("result") };

  // ---- Build the question list: for every category, an "I" and a "you" question
  const questions = [];
  QUIZ.forEach((cat) => {
    questions.push({ cat, who: "her", id: cat.id + "-her", title: `If I were ${cat.a}, what ${cat.what} would I be?` });
    questions.push({ cat, who: "him", id: cat.id + "-him", title: `If you were ${cat.a}, what ${cat.what} would you be?` });
  });

  function show(name) {
    Object.entries(sections).forEach(([k, el]) => (el.hidden = k !== name));
    window.scrollTo(0, 0);
  }

  function renderQuiz() {
    const wrap = $("questions");
    wrap.innerHTML = "";
    questions.forEach((q, qi) => {
      const fs = document.createElement("fieldset");
      fs.className = "question";
      fs.id = "q-" + q.id;
      const legend = document.createElement("legend");
      legend.textContent = `${q.cat.emoji} ${q.title}`;
      fs.appendChild(legend);
      const sub = document.createElement("p");
      sub.className = "sub";
      sub.textContent = q.who === "her" ? "About you" : "About me";
      fs.appendChild(sub);

      const grid = document.createElement("div");
      grid.className = "options" + (q.cat.wide ? " wide" : "");
      q.cat.options.forEach((opt, oi) => {
        const label = document.createElement("label");
        label.className = "opt";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = q.id;
        input.value = oi;
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.innerHTML = `<span class="em" aria-hidden="true">${opt.emoji}</span><span></span>`;
        chip.lastChild.textContent = opt.label;
        label.append(input, chip);
        grid.appendChild(label);
      });
      fs.appendChild(grid);
      wrap.appendChild(fs);
    });
    updateProgress();
  }

  function answeredCount() {
    return questions.filter((q) => document.querySelector(`input[name="${q.id}"]:checked`)).length;
  }

  function updateProgress() {
    const n = answeredCount();
    $("bar-fill").style.width = (n / questions.length) * 100 + "%";
    $("progress-text").textContent = `${n} of ${questions.length} answered`;
  }

  // ---- Scoring
  function parsePoints(str) {
    const out = {};
    (str || "").trim().split(/\s+/).forEach((tok) => {
      if (tok.length < 3) return;
      out[tok.slice(0, 2)] = (out[tok.slice(0, 2)] || 0) + parseInt(tok.slice(2), 10);
    });
    return out;
  }

  function score() {
    const total = {}, strong = {};
    COUPLES.forEach((c) => { total[c.key] = 0; strong[c.key] = 0; });
    questions.forEach((q) => {
      const checked = document.querySelector(`input[name="${q.id}"]:checked`);
      const pts = parsePoints(q.cat.options[checked.value][q.who]);
      Object.entries(pts).forEach(([k, v]) => {
        if (!(k in total)) return;
        total[k] += v;
        if (v >= 3) strong[k] += 1;
      });
    });
    // Highest total wins; ties go to the couple with more "strong" matches
    return [...COUPLES].sort((a, b) => total[b.key] - total[a.key] || strong[b.key] - strong[a.key])[0];
  }

  // ---- Result photo: tries images/couples/<photo>.jpg / .jpeg / .png / .webp
  function loadPhoto(couple) {
    const fig = $("photo");
    const exts = ["jpg", "jpeg", "png", "webp"];
    const placeholder = fig.innerHTML;
    fig.innerHTML = placeholder;
    (function tryNext(i) {
      if (i >= exts.length) return;
      const img = new Image();
      img.alt = couple.names;
      img.onload = () => { fig.innerHTML = ""; fig.appendChild(img); };
      img.onerror = () => tryNext(i + 1);
      img.src = `images/couples/${couple.photo}.${exts[i]}`;
    })(0);
  }

  function showResult(couple) {
    $("couple-names").textContent = couple.names;
    $("couple-show").textContent = `from ${couple.show}`;
    $("couple-blurb").textContent = couple.blurb;
    $("photo").innerHTML = `<div class="photo-placeholder"><span aria-hidden="true">🌹</span><p>Our photo goes here</p></div>`;
    loadPhoto(couple);
    show("result");
    $("result-title").focus({ preventScroll: true });
  }

  // ---- Events
  $("begin").addEventListener("click", () => show("quiz"));
  $("quiz-form").addEventListener("change", updateProgress);
  $("quiz-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelectorAll(".question.missing").forEach((el) => el.classList.remove("missing"));
    const missing = questions.filter((q) => !document.querySelector(`input[name="${q.id}"]:checked`));
    const err = $("error");
    if (missing.length) {
      missing.forEach((q) => $("q-" + q.id).classList.add("missing"));
      err.textContent = missing.length === 1
        ? "One question still needs an answer. It's highlighted above."
        : `${missing.length} questions still need an answer. They're highlighted in pink.`;
      err.hidden = false;
      $("q-" + missing[0].id).scrollIntoView({ block: "center" });
      return;
    }
    err.hidden = true;
    showResult(score());
  });
  $("retake").addEventListener("click", () => {
    $("quiz-form").reset();
    updateProgress();
    show("start");
  });

  renderQuiz();
})();
