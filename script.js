(() => {
  "use strict";

  const phone = "0388838940";
  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(message, state = "success") {
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.dataset.state = state;
    toastTimer = window.setTimeout(() => {
      toast.textContent = "";
      delete toast.dataset.state;
    }, 3200);
  }

  function isSafeHttps(value) {
    try { return new URL(value).protocol === "https:"; }
    catch { return false; }
  }

  const copyButton = document.getElementById("btn-copy-zalo");
  copyButton?.addEventListener("click", async () => {
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(phone);
      } else {
        const field = document.createElement("textarea");
        field.value = phone;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
        field.select();
        const copied = document.execCommand("copy");
        field.remove();
        if (!copied) throw new Error("Clipboard copy failed");
      }
      showToast("Đã sao chép số Zalo.");
    } catch {
      showToast("Không thể sao chép. Vui lòng thử lại.", "error");
    }
  });

  const audio = document.getElementById("background-music");
  const musicButton = document.getElementById("music-btn");
  if (audio && musicButton) {
    const syncMusicState = () => {
      const playing = !audio.paused && !audio.ended;
      musicButton.setAttribute("aria-pressed", String(playing));
      musicButton.setAttribute("aria-label", playing ? "Tạm dừng nhạc nền" : "Phát nhạc nền");
    };
    ["play", "pause", "ended", "error"].forEach((eventName) => audio.addEventListener(eventName, syncMusicState));
    audio.addEventListener("error", () => showToast("Không tải được file nhạc nền.", "error"));
    musicButton.addEventListener("click", async () => {
      if (!audio.paused) {
        audio.pause();
        return;
      }
      try { await audio.play(); }
      catch {
        syncMusicState();
        showToast("Trình duyệt chưa thể phát nhạc. Hãy thử lại sau.", "error");
      }
    });
    syncMusicState();
  }

  const year = document.getElementById("copyright-year");
  if (year) year.textContent = String(new Date().getFullYear());

  document.querySelectorAll("a[target='_blank']").forEach((link) => {
    if (!isSafeHttps(link.href)) {
      link.removeAttribute("href");
      link.removeAttribute("target");
      link.setAttribute("aria-disabled", "true");
    }
  });
})();
