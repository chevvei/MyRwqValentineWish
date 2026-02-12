// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .to(".six", 0.8, {
      opacity: 1,
      y: 0,
      visibility: "visible",
    }, "-=1")
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".heart-gallery", 0.5, {
      opacity: 0.4,
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else if (customData === "wishText" && Array.isArray(data[customData])) {
            // populate lyrics panel if wishText array exists
            const lyricsInner = document.getElementById("lyricsInner");
            if (lyricsInner) {
              lyricsInner.innerHTML = data[customData].map((l) => l).join("<br>");
            }
            // also set #wishText for page content if exists
            const wishTextEl = document.getElementById("wishText");
            if (wishTextEl) wishTextEl.innerText = data[customData].join(" \n");
          } else {
            const el = document.getElementById(customData);
            if (el) el.innerText = data[customData];
          }
        }
      });
    });
};

// Lyrics and player shape interactions
const setupMusicUI = () => {
  const lyricsToggle = document.getElementById("lyricsToggle");
  const lyricsPanel = document.getElementById("lyricsPanel");
  const shapeToggle = document.getElementById("shapeToggle");
  const playerShape = document.getElementById("playerShape");
  const collapseToggle = document.getElementById("collapseToggle");
  const musicPlayer = document.getElementById("musicPlayer");
  const musicAudio = document.getElementById("musicAudio");
  const musicIframe = document.getElementById("musicIframe");
  if (lyricsToggle && lyricsPanel) {
    lyricsToggle.addEventListener("click", () => {
      const open = lyricsPanel.classList.toggle("open");
      lyricsPanel.setAttribute("aria-hidden", !open);
    });
  }
  if (shapeToggle && playerShape) {
    const shapes = ["shape-pill", "shape-round", "shape-blob"];
    let idx = 0;
    shapeToggle.addEventListener("click", () => {
      playerShape.classList.remove(...shapes);
      idx = (idx + 1) % shapes.length;
      playerShape.classList.add(shapes[idx]);
    });
  }
  if (collapseToggle && musicPlayer) {
    collapseToggle.addEventListener("click", () => {
      const collapsed = musicPlayer.classList.toggle("collapsed");
      collapseToggle.innerText = collapsed ? "展开" : "收起";
    });
  }

  // ensure audio is usable: if audio fails to load, show iframe instead
  if (musicAudio && musicIframe) {
    musicAudio.addEventListener('error', () => {
      musicAudio.style.display = 'none';
      musicIframe.style.display = 'block';
    });
    // prefer audio as main control; hide iframe height shrink
    musicIframe.style.height = '260px';
    // attempt autoplay on load
    try {
      musicAudio.autoplay = true;
      const playPromise = musicAudio.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {
          // autoplay prevented by browser; keep collapsed but allow user to play
        });
      }
    } catch (e) {
      // ignore
    }
  }

  // make player draggable
  const makeDraggable = (el) => {
    if (!el) return;
    el.style.left = el.style.left || (window.innerWidth - el.offsetWidth - 18) + 'px';
    el.style.top = el.style.top || '18px';
    el.style.position = 'fixed';
    let isDown = false;
    let startX = 0;
    let startY = 0;
    let origX = 0;
    let origY = 0;

    const onDown = (clientX, clientY) => {
      isDown = true;
      startX = clientX;
      startY = clientY;
      origX = parseInt(el.style.left, 10) || 0;
      origY = parseInt(el.style.top, 10) || 0;
      el.classList.add('dragging');
    };
    const onMove = (clientX, clientY) => {
      if (!isDown) return;
      const dx = clientX - startX;
      const dy = clientY - startY;
      let nx = origX + dx;
      let ny = origY + dy;
      nx = Math.max(8, Math.min(nx, window.innerWidth - el.offsetWidth - 8));
      ny = Math.max(8, Math.min(ny, window.innerHeight - el.offsetHeight - 8));
      el.style.left = nx + 'px';
      el.style.top = ny + 'px';
    };
    const onUp = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove('dragging');
    };

    el.addEventListener('mousedown', (e) => { onDown(e.clientX, e.clientY); e.preventDefault(); });
    document.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    document.addEventListener('mouseup', onUp);

    // touch
    el.addEventListener('touchstart', (e) => { const t = e.touches[0]; onDown(t.clientX, t.clientY); e.preventDefault(); }, { passive: false });
    document.addEventListener('touchmove', (e) => { if (e.touches && e.touches[0]) { const t = e.touches[0]; onMove(t.clientX, t.clientY); } }, { passive: false });
    document.addEventListener('touchend', onUp);
  };

  makeDraggable(musicPlayer);
  // ensure collapse button label matches initial state
  if (musicPlayer && collapseToggle) {
    const isCollapsed = musicPlayer.classList.contains('collapsed');
    collapseToggle.innerText = isCollapsed ? '展开' : '收起';
  }
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

// expose a starter so we can control when the animation begins (after login)
window.startApp = () => {
  resolveFetch().then(animationTimeline);
};

// Simple login handling: show container and start app when correct password entered
const setupLogin = () => {
  const passBtn = document.getElementById("passBtn");
  const passInput = document.getElementById("passInput");
  const cover = document.getElementById("cover");
  const container = document.getElementsByClassName("container")[0];

  const tryUnlock = () => {
    const val = passInput && passInput.value && passInput.value.trim();
    if (val === "13161611162") {
      if (cover) cover.style.display = "none";
      if (container) container.style.visibility = "visible";
      if (window.startApp) window.startApp();
      const one = document.getElementsByClassName("one")[0];
      if (one) one.scrollIntoView({ behavior: "smooth" });
    } else if (passInput) {
      passInput.classList.add("shake");
      setTimeout(() => passInput.classList.remove("shake"), 600);
    }
  };

  if (passBtn) passBtn.addEventListener("click", tryUnlock);
  if (passInput)
    passInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") tryUnlock();
    });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupLogin);
} else {
  setupLogin();
}

// init music UI controls regardless of ready state
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupMusicUI);
} else {
  setupMusicUI();
}
