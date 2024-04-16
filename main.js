// 1. Pastdagi code'da else qismi muhimmin? Ya'ni else qismini ishlatilish yoki ishlatilmasligi code'ga qanchalik ta'sir qiladi? 
//   function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Did parents allow you?');
//     }
//   }


// ////////kerak emaas





// 2. Ikki a va b sonlarning eng kichigini qaytaruvchi min(a,b) funksiyani yozing:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1



//  function min(a, b) {
//     return a < b ? a : b;
// }

// console.log(min(2, 5)); 
// console.log(min(3, -1)); 
// console.log(min(1, 1));





// 3. n darajasida x ni qaytaruvchi pow(x,n) funksiyani yozing. Yoki boshqacha qilib aytganda, x ni o'ziga n marta ko'paytiradi va natijani qaytaradi:
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1



// function pow(x, n) {
//     return Math.pow(x, n);
// }

// console.log(pow(3, 2));
// console.log(pow(3, 3)); 
// console.log(pow(1, 100)); 




// 4. Yoshni yillar bilan oladigan va yoshni kunlarda qaytaradigan funksiya yarating:
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300




// function calcAge(age) {
//     var days = age * 365; 
//     return days;
// }

// console.log(calcAge(65)); 
// console.log(calcAge(0)); 
// console.log(calcAge(20)); 







// 5. Quyidagi code'da xatolik mavjud. Uni topib to'g'irlang:
// function cubes(a) {
// 	retunr a ** 3
// }





// function cubes(a) {
//     return a ** 3;
// }

// console.log(cubes(3)); 






// 6. Voltaj va oqimni qabul qiladigan va hisoblangan quvvatni qaytaradigan funksiya yarating: 
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600





// function count(voltage, current) {
//     return voltage * current;
// }

// console.log(count(230, 10));
// console.log(count(110, 3));
// console.log(count(480, 20));





// 7. Soatlarni soniyalarga aylantiruvchi funksiyani yozing:
// howManySeconds(2) ➞ 7200
// howManySeconds(10) ➞ 36000
// howManySeconds(24) ➞ 86400





// function how(hours) {
//     return hours * 3600;
// }

// console.log(how(2)); 
// console.log(how(10)); 
// console.log(how(24)); 







// 8. JavaScript-da bo'linish operatsiyasining qoldigini topadigan bitta operator mavjud. Parametr sifatida ikkita raqam berilgan. Birinchi parametr ikkinchi parametrga bo'lingan holda qoldiq, qoldiqni qiymatini topadigan funksiya yarating:
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0



// function remainder(a, b) {
//     return a % b;
// }

// console.log(remainder(1, 3));
// console.log(remainder(3, 4)); 
// console.log(remainder(-9, 45)); 
// console.log(remainder(5,5)); 

// 9. Bo'sh joy bilan birlashtirilgan "something" sozini va berilgan a argumentini qaytaruvchi funktsiyani yozing:
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"



// function giveMeSomething(a) {
//     return "something " + a;
// }

// console.log(giveMeSomething("is better than nothing")); 
// console.log(giveMeSomething("Bob Jane"));
// console.log(giveMeSomething("something")); 




// 10. Raqamni yagona argument sifatida qabul qiladigan va u noldan kichik yoki teng bo'lsa, true, aks holda false'ni qaytaradigan funksiya yarating:
// lessThanOrEqualToZero(5) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-2) ➞ true



// function lessThanOrEqualToZero(num) {
//     return num <= 0;
// }

// console.log(lessThanOrEqualToZero(5)); 
// console.log(lessThanOrEqualToZero(0)); 
// console.log(lessThanOrEqualToZero(-2)); 

