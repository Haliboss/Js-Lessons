//* FOR EACH LOOP *******ÖNEMLİ********

//* Array.forEach() metodu, dizideki her bir eleman için bir kere callback fonksiyonunu çağırır.
//* En az bir parametre alır. Bu parametre, dizideki her bir eleman için çağrılacak fonksiyondur. En fazla üç parametre alabilir. Bu parametreler, sırasıyla, dizi elemanı, dizinin index numarası ve dizidir.
//* Avantajı kullanımı kolay olmasıdır. Dizinin elemanlarına direkt olarak erişebiliriz. Dizinin uzunluğunu belirtmek gibi bir zorunluluk yoktur.
//* Dezavantajı ise, döngüyü kırma gibi bir işlem yapamayız. Yani döngüyü kırma gibi bir ihtiyacımız olursa for döngüsünü kullanmamız gerekir.
//* forEach() metodu, dizinin orijinalini değiştirmez. Bu yüzden forEach() metodu ile dizinin elemanlarını değiştirmek mümkün değildir.
//* forEach() metodu, undefined değerini döndürür. Void fonksiyonlar gibi çalışır. Return vermez.
//* Bir diğer dezavantajı yavaş çalışmasıdır. Çünkü forEach() metodu, dizinin her bir elemanı için callback fonksiyonunu çağırır. Bu yüzden forEach() metodu, for döngüsüne göre daha yavaştır.

//! Dizideki herbir fiyati konsola yazdiriniz.

const fiyatlar = [120, 300, 250, 600, 700];

fiyatlar.forEach((fiyat) => console.log(fiyat));

//! Fiyatkların toplamını yazdırınız.

let toplam = 0;
fiyatlar.forEach((fiyat) => (toplam += fiyat));
console.log("Toplam fiyat :", toplam);

//! NOT: forEach metodu void metottur. (herhangi bir değer döndürmez)

console.log(fiyatlar.forEach((fiyat) => (toplam += fiyat)));

//* FOREACH İÇİNDE İNDİS KULLANIMI

//* Array.forEach(function(şuankiDeğer, indisi dizi)) şeklinde kullanılır.
//* şuankiDeğer: Dizideki şuanki değerdir. Kullanımı ZORUNLUDUR.
//* indisi: Dizideki şuanki değerin indisi. Kullanımı OPSİYONELDİR.
//* dizi: Dizinin kendisidir. Kullanımı OPSİYONELDİR.
//* NOT: Bu parametrelerin isimlerini kullanıcı belirler ancak sırası önemlidir. Şuanki değer, indisi ve dizi sırasıyla ilk, ikinci ve üçüncü parametrelerdir.

//! Dizideki her fiyatı ara toplami ve herbir fiyata %10 zam yapiniz.

let total = 0;
fiyatlar.forEach((fiyat, index, arr) => {
  total += fiyat;
  console.log(`${index + 1}.iterasyon: ${total}`);
  arr[index] = Math.trunc(fiyat * 1.1);
});

console.log(fiyatlar);

//* MAP METODU

//* Array.map() metodu, bir fonksiyonu parametre olarak alır ve orijinal dizinin kopyasını bu fonskiyona göre modifiye ederek döndürür.
//* Yani bir diziyi TRANSFORMASYONDAN gerçirmek için kullanılır.
//* map() metodu orijinal diziyi değiştirmez. Yeni bir dizi oluşturarak döndürür.

//! Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı map() metodu ile yapalım.

let isimler = ["Ahmet", "Mehmet", "Ayşe", "Fatma", "Ali"];

let bykIsimler = isimler.map((isim) => isim.toUpperCase());
console.log(bykIsimler, isimler);

console.log(isimler.map((isim) => isim.toUpperCase()));
console.log(isimler);

//! TL fiytatları dizisindeki rakamları Euro ve Dolar karşılıklarına çeviren uygulamayı map() metodu ile yapalım.

const tlFiyatlar = [120, 300, 250, 600, 700];
const dolarKur = 18.5;
const euroKur = 21.5;

const dolarFiyatlar = tlFiyatlar.map((fiyat) =>
  Number((fiyat / dolarKur).toPrecision(3))
);
const euroFiyatlar = tlFiyatlar.map((fiyat) =>
  Number((fiyat / euroKur).toFixed(2))
);

console.log(dolarFiyatlar);
console.log(euroFiyatlar);

//! Product dizisindeki ürünlerin isimlerini büyük harfe çeviren uygulamayı map() metodu ile yapalım.

const products = ["Ipod", "Iphone", "Ipad", "Macbook", "Apple Watch"];

products.map((p, i, arr) => (arr[i] = p.toUpperCase()));
console.log(products); //? Orijinal diziyi değiştirdik.

//* FILTER METODU

//* Array.filter() metodu, bir fonksiyonu parametre olarak alır ve bu fonksiyonun döndürdüğü koşula uygun olan dizinin kopyasını filtreleyerek döndürür.
//* filter() metodu orijinal diziyi değiştirmez. Yeni bir dizi oluşturarak döndürür.

//! Maasi 10000 TL den fazla olanlari filtreleyiniz.

const maaslar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const maasThan = maaslar.filter((maas) => maas > 10000);
console.log(maasThan);

const range = maaslar.filter((maas) => maas >= 5000 && maas <= 15000);
console.log(range);

//! Maasi 9000 TL den az olanlara %20 zam yapiniz. ve yeni dizide saklayalim.

const zamliMaaslar = maaslar
  .filter((maas) => maas < 9000)
  .map((maas) => maas * 1.2);

console.log(zamliMaaslar);

//* REDUCE METODU

//* reduce() metodu tek bir değer döndürür. Bu değer, dizideki her bir eleman üzerinde belirtilen işlemi gerçekleştirir.
//* Array.reduce(function (toplam, şuankiDeğer, indisi, dizi), başlangıçDeğeri) şeklinde kullanılır.
//* toplam: Önceki işlemin sonucudur. İlk işlemden önce başlangıç değeri kullanılır.
//* şuankiDeğer: Dizideki şuanki değerdir. Kullanımı ZORUNLUDUR.

//! Bir firma, 9000 TL den az olanlara %20 zam yapar. 9000 TL den fazla olanlara %10 zam yapar. Maaslarin toplamini hesaplayiniz.

const yeniMaaslarToplam = maaslar
  .filter((maas) => maas <= 9000)
  .map((maas) => Math.trunc(maas * 1.1))
  .reduce((toplam, maas) => toplam + maas, 0);

console.log("Yeni maaslarin toplami:", yeniMaaslarToplam);
