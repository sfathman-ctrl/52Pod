/* =========================================================
   52 LAUNCH — LIFTOFF RUN
   =========================================================
   A Chrome-dino-style endless runner. Rocket auto-runs,
   player jumps over obstacles (Red Tape, Rejected, Delays)
   and collects Funding boosts for bonus points.
   No external images — everything is drawn on canvas.
   ========================================================= */

(function () {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const scoreEl = document.getElementById("score");
  const bestEl = document.getElementById("best");
  const overlay = document.getElementById("game-overlay");
  const startBtn = document.getElementById("game-start-btn");

  const GROUND_Y = 230;
  const GRAVITY = 0.7;
  const JUMP_FORCE = -13;

  const OBSTACLE_LABELS = ["RED TAPE", "REJECTED", "DELAY", "PATENT PENDING"];
  const BOOST_LABEL = "FUNDING";

  let best = Number(localStorage.getItem("liftoffRunBest") || 0);
  bestEl.textContent = best;

  let state = "idle"; // idle | running | over
  let player, obstacles, boosts, speed, score, spawnTimer, boostTimer, frame;

  function resetState() {
    player = { x: 60, y: GROUND_Y, vy: 0, w: 34, h: 34, jumping: false };
    obstacles = [];
    boosts = [];
    speed = 6;
    score = 0;
    spawnTimer = 0;
    boostTimer = 0;
    frame = 0;
  }

  function jump() {
    if (state === "idle") {
      startGame();
      return;
    }
    if (state === "over") {
      startGame();
      return;
    }
    if (!player.jumping) {
      player.vy = JUMP_FORCE;
      player.jumping = true;
    }
  }

  function startGame() {
    resetState();
    state = "running";
    overlay.style.display = "none";
    requestAnimationFrame(loop);
  }

  function endGame() {
    state = "over";
    if (score > best) {
      best = score;
      localStorage.setItem("liftoffRunBest", String(best));
      bestEl.textContent = best;
    }
    overlay.style.display = "flex";
    startBtn.textContent = "Try Again";
  }

  function spawnObstacle() {
    const label = OBSTACLE_LABELS[Math.floor(Math.random() * OBSTACLE_LABELS.length)];
    const w = 60 + label.length * 4;
    obstacles.push({ x: canvas.width + 20, y: GROUND_Y - 10, w: w, h: 40, label });
  }

  function spawnBoost() {
    boosts.push({
      x: canvas.width + 20,
      y: GROUND_Y - 90 - Math.random() * 40,
      w: 26,
      h: 26,
      collected: false
    });
  }

  function drawGround() {
    ctx.strokeStyle = "#0a0a0a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y + 34);
    ctx.lineTo(canvas.width, GROUND_Y + 34);
    ctx.stroke();
  }

  function drawPlayer() {
    ctx.save();
    ctx.translate(player.x, player.y);
    // Rocket body (triangle + rect), ignition-orange fill on white/black theme
    ctx.fillStyle = "#e01e1e";
    ctx.strokeStyle = "#0a0a0a";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(player.w / 2, -player.h);
    ctx.lineTo(player.w, -player.h * 0.35);
    ctx.lineTo(0, -player.h * 0.35);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillRect(0, -player.h * 0.35, player.w, player.h * 0.35);
    ctx.strokeRect(0, -player.h * 0.35, player.w, player.h * 0.35);

    // flame when jumping
    if (player.jumping) {
      ctx.fillStyle = "#ffb347";
      ctx.beginPath();
      ctx.moveTo(player.w * 0.2, 0);
      ctx.lineTo(player.w * 0.5, 14);
      ctx.lineTo(player.w * 0.8, 0);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();
  }

  function drawObstacle(o) {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#0a0a0a";
    ctx.lineWidth = 2;
    ctx.fillRect(o.x, o.y - o.h, o.w, o.h);
    ctx.strokeRect(o.x, o.y - o.h, o.w, o.h);

    ctx.fillStyle = "#0a0a0a";
    
