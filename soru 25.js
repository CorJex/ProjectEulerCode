function basamakSayisi(number) { //string'e dönüştürüp basamak sayısını bulmak için yardımcı fonksiyon
    return number.toString().length;
}

var fibonacciA = 0n; //fibonacci ilk sayı
var fibonacciB = 1n;//fibonacci ikinci sayı
for (var i = 1; i < Infinity; i++) {
    var temp = fibonacciA; //
    fibonacciA += fibonacciB; // <--- Bu üç satır a'yı arttırıp, b 'yi a'nın eski değerine atıyor. fibonacci için
    fibonacciB = temp; //
    if (basamakSayisi(fibonacciA) > 999) { //basamak sayısı 1000 ise
        console.log(i) //sonucu ekrana yazdır
        break; //döngüden çık
    }
}