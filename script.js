let words = [
  { word: "Deney", bannedWords: ["Laboratuvar", "Hipotez", "Sonuç"] },
  { word: "Atom", bannedWords: ["Elektron", "Proton", "Nötron"] },
  { word: "Galaksi", bannedWords: ["Yıldız", "Güneş", "Uzay"] },
  { word: "Evrim", bannedWords: ["Tanrı", "Yaratılış", "İnanç"] },
  { word: "Fotosentez", bannedWords: ["Güneş", "Bitki", "Karbondioksit"] },
  { word: "Yıldız", bannedWords: ["Gök", "Gece", "Teleskop"] },
  { word: "Elon Musk", bannedWords: ["Tesla", "Mars", "Neuralink"] },
  {
    word: "Stephen Hawking",
    bannedWords: ["Koltuk Değneği", "Tekerlekli Sandalye", "Kas Hastalığı"],
  },
  {
    word: "Paralel Evren",
    bannedWords: ["Uzay-Zaman", "Teorik Fizik", "Zaman Kırılması"],
  },
  { word: "Laboratuvar", bannedWords: ["Kimya", "Cıva", "Reaksiyon"] },
  { word: "Keşif", bannedWords: ["Buluş", "Kâşif", "Arkeoloji"] },
  { word: "Teori", bannedWords: ["Hipotez", "Kanıt", "Bilim"] },
  { word: "Kalp", bannedWords: ["Pompalama", "Damar", "Kasılma"] },
  { word: "Enzim", bannedWords: ["Katalizör", "Reaksiyon", "Substrat"] },
  { word: "Hücre", bannedWords: ["DNA", "Organeller", "Bölünme"] },
  { word: "Mantar", bannedWords: ["Zehirlenme", "Orman", "Toplamak"] },
  { word: "Bitki", bannedWords: ["Kök", "Yaprak", "Çiçek"] },
  { word: "İnsan", bannedWords: ["46 Kromozom", "Hayvan", "Homo Sapiens"] },
  { word: "Teleskop", bannedWords: ["Galaksi", "Gözlem", "Yıldız"] },
  { word: "Oppenheimer", bannedWords: ["Nükleer", "Proje", "Bomba"] },
  { word: "Barack Obama", bannedWords: ["Amerika", "Başkan", "Kimya"] },
  { word: "Alfred Nobel", bannedWords: ["Nobel", "Kimyager", "Nobelyum"] },
  { word: "Aziz Sancar", bannedWords: ["DNA", "Nobel", "Biyokimya"] },
  { word: "Orhan Pamuk", bannedWords: ["İstanbul", "Yazar", "Roman"] },
  { word: "Kronoloji", bannedWords: ["Tarih", "Zaman", "Takvim"] },
  { word: "Hukuk", bannedWords: ["Yasa", "Mahkeme", "Ceza"] },
  { word: "Ekonomi", bannedWords: ["Üretim", "Dağıtım", "Tüketim"] },
  { word: "Atatürk", bannedWords: ["Cumhuriyet", "Lider", "Bayrak"] },
  { word: "Nümizmatik", bannedWords: ["Para", "Resim", "Madalyon"] },
  { word: "Psikoloj", bannedWords: ["Zihinsel", "Terapi", "Ruhsal"] },
  { word: "Sosyoloji", bannedWords: ["Toplum", "Kültür", "Halk"] },
  { word: "Matematik", bannedWords: ["Sayı", "Ders", "Problem"] },
  { word: "Einstein", bannedWords: ["İzafiyet Teorisi", "Nobel", "Alman"] },
  { word: "Astronot", bannedWords: ["Seyahat", "Uzay", "Roket"] },
  { word: "Evren", bannedWords: ["Uzay", "Galaksi", "Boşluk"] },
  { word: "Yörünge", bannedWords: ["Güneş Sistemi", "Dünya", "Gezegen"] },
  { word: "Edison", bannedWords: ["Patent", "Işık", "Ampül"] },
  { word: "Bilim", bannedWords: ["Deney", "Araştırma", "Laboratuvar"] },
  { word: "İnovasyon", bannedWords: ["Yenilik", "Tasarım", "Düşünme"] },
  { word: "İcat", bannedWords: ["Mucit", "Yenilik", "Bulmak"] },
  { word: "Nikola Tesla", bannedWords: ["Ampul", "Wi-Fi", "Tesla Bobini"] },
  { word: "Kloroplast", bannedWords: ["Hücre", "Fotosentez", "Bitki"] },
  { word: "Mitokondri", bannedWords: ["Hücre", "Solunum", "Sitoplazma"] },
  { word: "DNA", bannedWords: ["Genetik", "Kromozom", "Nükleotid"] },
  { word: "Beher", bannedWords: ["Ölçüm", "Kimyasal", "Karışım"] },
  { word: "NH3", bannedWords: ["Amonyak", "Azot", "Hidrojen"] },
  { word: "NaCl", bannedWords: ["Tuz", "Klor", "Sodyum"] },
  { word: "Graham Bell", bannedWords: ["Telefon", "İcat", "Amerika"] },
  { word: "H2O", bannedWords: ["Su", "Hidrojen", "Oksijen"] },
];

let score = 0;
let passCount = 5; // Geçme hakkı
let currentIndex;
let timerInterval;

// Butonları belirli bir durumda ayarlayan yardımcı fonksiyon
function setButtonsDisabled(disabled) {
  document
    .querySelectorAll(".buttons button")
    .forEach((button) => (button.disabled = disabled));
}

// Oyunu başlatan fonksiyon
function startGame() {
  score = 0;
  passCount = 5;
  document.getElementById("score").innerText = "Skor: " + score;
  document.getElementById("pass-count").innerText = "Geçme Hakkı: " + passCount;
  startTimer(120); // 120 saniye süre verilebilir
  setButtonsDisabled(false); // Tüm butonları etkinleştir
  document.getElementById("start-btn").disabled = true; // "Oyunu Başlat" butonunu devre dışı bırak
  showRandomWord();
}

let usedWords = []; // Kullanılan kelimeleri izlemek için bir dizi

// Rastgele kelime gösteren fonksiyon
function showRandomWord() {
  let remainingWords = words.filter(
    (wordObj) => !usedWords.includes(wordObj.word)
  ); // Kullanılmamış kelimeleri filtrele

  if (remainingWords.length === 0) {
    alert("Tüm kelimeler kullanıldı! Sayfa yenileniyor...");
    setTimeout(function () {
      location.reload();
    }, 2000); // 2 saniye sonra sayfayı yenile
    return;
  }

  let randomIndex = Math.floor(Math.random() * remainingWords.length);
  let wordObj = remainingWords[randomIndex];
  usedWords.push(wordObj.word); // Kullanılan kelimeyi listeye ekle
  document.getElementById("word").innerText = wordObj.word;
  document.getElementById("banned-words").innerText =
    "Yasaklı kelimeler: " + wordObj.bannedWords.join(", ");
}

// Süreyi başlatan fonksiyon
function startTimer(duration) {
  let timer = duration;
  let minutes, seconds;
  timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerText =
      "Süre: " + minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(timerInterval);
      setButtonsDisabled(false); // Oyun bittiğinde tüm butonları etkinleştir
      alert("Süre doldu! Sayfa yenileniyor...");
      setTimeout(function () {
        location.reload();
      }, 2000); // 2 saniye sonra sayfayı yenile
    }
  }, 1000);
}

// Doğru cevap butonuna tıklanınca çalışan fonksiyon
function correctAnswer() {
  score++;
  document.getElementById("score").innerText = "Skor: " + score;
  showRandomWord();
}
// Yanlış cevap butonuna tıklanıncaçalışan fonksiyon
function wrongAnswer() {
  score--;
  document.getElementById("score").innerText = "Skor: " + score;
  showRandomWord();
}
// Geç butonuna tıklanınca çalışan fonksiyon
function pass() {
  if (passCount > 0) {
    passCount--;
    document.getElementById("pass-count").innerText =
      "Geçme Hakkı: " + passCount;
    showRandomWord();
  }
}

// Karanlık Moda Geçirir
document.getElementById("dark-mode-btn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
