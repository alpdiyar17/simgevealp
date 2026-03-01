(() => {
  const phrase = document.getElementById("phrase");
  const left = document.getElementById("leftText");

  // 1) Başta: "Seni seviyorum Simge"
  // 2) Sonra "seviyorum" kalbe dönüşür, kalbin solunda Alp, sağında Simge kalır
  // 3) Animasyon 1 kez biter (loop yok)

  const START_MS = 1400;

  window.setTimeout(() => {
    // Sol metni "Seni" -> "Alp" olarak değiştir (yumuşak geçiş)
    left.classList.add("fade-out");
    window.setTimeout(() => {
      left.textContent = "Alp";
      left.classList.remove("fade-out");
    }, 260);

    // Orta kelimeyi kalbe dönüştür
    phrase.classList.add("morph");
  }, START_MS);
})();
