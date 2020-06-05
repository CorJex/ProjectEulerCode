function isDivisible(number, inRange) { //verilen sayı, verilen aralıktaki bütün sayılara bölünebilir mi?
    let ilk = inRange[0] //aralıktaki ilk sayı
    let son = inRange[1] //aralıktaki son sayı
    for (; ilk <= son; ilk++) {
        if (number % ilk > 0) return false; //eğer herhangi bir bölme işleminde kalanlı sonuç çıkarsa 0 döndür
    }
    return true; // buraya kadar false dönmediyse true döndür
}

let i = 1;
while (true) { //istediğimiz sayıyı bulana kadar çalışsın
    if (isDivisible(i, [1, 20])) { //1 den başlayarak sonsuza kadar artacak şekilde bütün sayıları 1-20 arasında-
        //-ki sayılara bölünüyor mu diye test ediyoruz
        console.log(i) //bulduysak sayıyı konsola yazdır
        break; //bulduysak döngüyü durdur, boşuna elektrik harcamayalım
    }
    i++;
}