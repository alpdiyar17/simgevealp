(() => {
  const phrase = document.getElementById("phrase");
  const left = document.getElementById("leftText");

  // 1) Bir süre "Seni seviyorum Simge" görünsün
  const START_MS = 1400;

  // 2) "seviyorum" -> kalp dönüşsün; kalbin solunda Alp, sağında Simge kalsın
  window.setTimeout(() => {
    // Sol metni "Seni" -> "Alp" olarak yumuşakça değiştir
    left.classList.add("fade-out");
    window.setTimeout(() => {
      left.textContent = "Alp";
      left.classList.remove("fade-out");
    }, 260);

    // Orta kelimeyi kalbe dönüştür
    phrase.classList.add("morph");
    // Animasyon burada biter (loop yok).
  }, START_MS);
})();
