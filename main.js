var tahmin = alert('Senin icin 1 ila 20 arasinda bir sayi tuttum')
var rastSayi = Math.floor(Math.random() * 20) + 1;
var tahminHakki = parseInt(prompt('Kac deneme hakkin olsun?'));


while (tahminHakki > 0) {
    tahmin = prompt('Hadi bakalim tahmin et:');
    if (tahmin == rastSayi) {
        tahminHakki--;
        alert("Tebrikler! Senin icin tutmus oldugum sayi " +
            rastSayi + this.tahmin + " kez daha deneyebilirdin ama gerek kalmadi. Süpersin");
        break;
    } else if (tahmin < rastSayi) {
        tahminHakki--;
        alert("Uups. Büyük düsün ! " +
            tahminHakki + " hakkin kaldi. Hadi bakalim ");
        // if the number is bigger, alerts the user
    } else if (tahmin > rastSayi) {
        tahminHakki--;
        alert("Oppss! Tahminin yeteri kadar büyük degil  " +
            tahminHakki + " hakkin kaldi. Denemeye devam !");
    }
    if (tahminHakki == 0) {
        alert("Maalesef bilemedin. Senin icin tuttugum sayim " + rastSayi);
    }
}