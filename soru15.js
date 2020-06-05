function permutasyon(n) {
    var p = 1;
    while (n != 1) { // ((n *= n-1) -=n-2)  *=n-3).... Permütasyon
        p *= n
        n--
    }
    return p
}

function kombinasyonuHesapla(n, r) {
    return permutasyon(n) / (permutasyon(r) * permutasyon(n - r))
}
console.log("cevap: " + (kombinasyonuHesapla(40, 20))); //40 hareket var, 20 aşağı 20 sağa. 40! / 20! * 20! bize cevabı verir
//  !!!Cevap Yüz milyar üzerinde olduğu için hepsini deneyerek bulmak çok uzun sürerdi!!! O yüzden denklem kullanarak çözdüm