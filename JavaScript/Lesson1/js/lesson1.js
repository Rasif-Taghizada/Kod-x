// BOM , DOM
// BOM -> Browser Object Model
// DOM -> Document Object Model

// console.log(typeof(2));
// Deyisenleri teyin etmeyin yollari:
// let a = 10.5;
// console.log(a); // 15;

// var a = 20;
// console.log(a);

// const b = 30;
// b = 10;
// console.log(b); //error


//! JavaScript ile istifadeciden deyer almaq:
//! Prompt() , alert(), confirm()
// let ilkDeyer = prompt("1 ile 10 arasinda reqem daxil edin:" , 1 )
// console.log(ilkDeyer)

//! Alert();
// alert();

//! confirm()
// let result = confirm("Davam etmek isteyirsiz?");
// console.log(result)


//! Data types:
/*
* JavaScript-de 2cur data tipler var:
1). Primitive:  number , boolean(true,false) , string, null(bos),
     undefined(teyin olunmayib), bigInt , NaN(not a number)
2). References: object , array , function
*/
//! Number: 
// let dataTypesNumber = 10;
// console.log(typeof dataTypesNumber)

//! Boolean:
// let isMarried = false;
// console.log( typeof isMarried)

//!  string:
// let str = 'h';
// console.log(str)

//! null:
// let deyerVarmi = null;
// console.log(deyerVarmi)

//! undefined:
// let deyer2;
// console.log(deyer2);

//! reference data types:
//* object: 
// let obj1 = {
//     ad: "Rasif",
//     soyad: "Taghizade",
//     age: 20,
// }; 
// console.log(obj1);

//* array(massiv);
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);

//! Sert operatorlari: 
// if , else if , else

// let a = 11;
// if(a < 11){
//     console.log("A-nin deyeri 11-den kicikdir!")
// }
// else if(a > 11){
//     console.log("a 11-den boyukdur");
// }
// else{
//     console.log("a-nin deyeri 11-in ozudur");
// }

//! Task:
// brief: istifadeci bir reqem daxil edecek, ve o reqeme uygun sertler qoy:
// let userNumber = Number(prompt("Bir reqem daxil edin:" , 0))
// console.log(typeof userNumber)

// let userNumber = Number(prompt("Istenilen bir reqem daxil edin:")); // 10
// if(userNumber < 50){
//     alert("Sizin daxil etdiyiniz reqem 50-den kicikdir")
// }
// else if(userNumber > 50 && userNumber < 100){
//     alert("Sizin daxil etdiyiniz eded 50 ile 100 arasinda yerlesir:")
// }
// else{
//     alert("sizin daxil etdiyiniz ededi artiq bilmirem");
// }


//! Task2:
let admin = prompt("adminin username-ni daxil edin:")
// CamelCase , KebabCase 
// adminDatabase , admin-database , admin_database
if(admin == "Rasif"){
    alert("Xos geldin Admin");
    let davamet  = confirm("Davam etmek isteyirsiz?")
    console.log(davamet);
    if(davamet){
        let parol = prompt("Parolu daxil edin:");
        if(parol == '12345'){
            alert("Proqrama xos geldiniz!")
        }
        else{
            alert("parolu duz daxil edin!");
        }
    }
}
else{
    console.log("Zehmet olmasa username-i duz daxil edin:")
}