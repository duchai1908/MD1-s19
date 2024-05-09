//bt1
// let ten = prompt("Nhap ten");
// let phone = +prompt("Nhap phone");
// let address = prompt("Nhap address");
// let person = {
//     id : 1,
//     ten,
//     phone,
//     address
// }
// console.log(person);
//bt2
// let ten = prompt("Nhap ten");
// let phone = +prompt("Nhap phone");
// let address = prompt("Nhap address");
// let person = {
//     id : 1,
//     ten,
//     phone,
//     address
// }

// delete person.address;
// person.email = "asdadw@gmai.com";
// console.log(person);
//bt3
// let soluong = +prompt("Nhap so luong sinh vien");
// let arr=[];
// for(var i = 0; i<soluong ;i++){
//     var stt = i+1;
//     var ten = prompt("Nhap ten sv thu "+stt);
//     var id = stt;
//     let person ={
//         id,
//         ten,
//     }
//     arr.push(person);
// }
// console.log(arr);
//bt4
// let person = [
// {
//     id : 1,
//     ten: "Hai",
//     phone: 13212312,
//     address:"Hanoi"
// },
// {
//     id : 2,
//     ten: "OK",
//     phone: 13212312,
//     address:"Hanoi"
// }]
// for(let i in person){
//     console.log(person[i].id);
//     console.log(person[i].ten);
//     console.log(person[i].phone);
//     console.log(person[i].address);
// }
//bt5
// let a = prompt("Nhap ten tac gia");
// let book = [
//     {
//         author:"Hai",
//         bookname:"Java"
//     },
//     {
//         author:"Hai",
//         bookname:"JS"
//     },
//     {
//         author:"Ngon",
//         bookname:"C++"
//     },
// ]
// for(var i = 0; i<book.length; i++){
//     if(book[i].author == a){
//         console.log(book[i].bookname);
//     }
// }
//bt6
// let arr=[
//     {
//         phone:"Iphone11",
//         price: 140
//     },
//     {
//         phone:"Iphone12",
//         price: 120
//     },
//     {
//         phone:"Iphone13",
//         price: 130
//     },
// ]
// arr.sort((a, b) => a.price - b.price)
// console.log(arr)
//bt7
// let arr=[];
// let abc = true;
// let flag = 0;
// let regemail = "@gmail.com";
// while(abc){
//     var a = prompt("Nhap ten");
//     if(a != "" && a.length >= 3){
//         abc = false;
//     }
// }
// abc = true;
// while(abc){
//     var b = prompt("Nhap email");
//     let checkmail = b.slice(b.length-10);
//      if(checkmail == regemail){
//         abc = false;
//     }
// }
// abc = true;
// while(abc){
//     var c = prompt("Nhap mat khau");
//      if(c.length > 8){
//         abc = false;
//     }
// }
  
// let person ={
//     ten: a,
//     email: b,
//     mk: c
// }
// arr.push(person);
// console.log(arr);

//bt8
// let arr=[
//     {
//         ten:"Hai",
//         email: "abc@gmail.com",
//         mk:"134"
//     }
// ];
// let abc = true;
// let flag1 = 1;
// let xyz = true;
// let regemail = "@gmail.com";
// while(abc){
//     var a = prompt("Nhap ten");
//     if(a != ""){
//         abc = false;
//     }
// }
// abc = true;
// while(abc){
//     var flag = 1;
//     var b = prompt("Nhap email");
//     let checkmail = b.slice(b.length-10);
//     if(checkmail == regemail){
//         flag = 0;
//     }
//     if(arr.length < 1){
//         flag = 0;
//     }else{
//         for(var i = 0; i< arr.length; i++){
//             if(arr[i].email == b){
//                 flag =2;
//                 break;
//             } 
//         }
//         if(flag==0){
//             abc = false;
//         }
//     } 
// }
// abc = true;
// while(abc){
//     var c = prompt("Nhap mat khau");
//      if(c.length > 8){
//         abc = false;
//     }
// }
// console.log(a);
// console.log(b);
// console.log(c);
// let person ={
//     ten:a,
//     email:b,
//     mk: c
// }
// arr.push(person);
// do{   
//     let login = prompt("nhap email");
//     let pwd = prompt("nhap password");
//     for(let i in arr){
//         var j = 1;
//         if(arr[i].email == login && arr[i].mk == pwd){
//             console.log("Dang nhap thanh cong");
//             console.log(arr[i]);
//             xyz = false;
//             break;
//         }           
//     }
//     if(xyz == true){
//         console.log("Sai tai khoan hoac mat khau");
//     }
// }while(xyz)

//bt9
// let Contact = [];
// let abc = true;
// while(abc){
//     let a = prompt("Nhap vao C/R/F/D").toLowerCase();
//     switch(a){
//         case "c": create(Contact);
//                 break;
//         case "r": readContact(Contact);
//                 break;
//         case "f": findContact(Contact);
//                 break;
//         case "d": delContact(Contact);
//                 break;
//         case "e": abc = false;
//                 break;
//         default: console.log("K hop le");
//     }
// }
// function create(arr){
//     let ten = prompt("Nhap vao ten");
//     let sdt = +prompt("Nhap so dien thoai");
//     let email =prompt("Nhap vao email");
//     let contacts = {
//         ten,
//         sdt,
//         email
//     }
//     arr.push(contacts);
// }
// function readContact(arr){
//     for(let i in arr){
//         console.log(arr[i]);
//     }
// }
// function findContact(arr){
//     let ten1 = prompt("Nhap ten ban muon tim");
//     let nameFind = arr.findIndex(function(el,i){
//             return el.ten === ten1;
//     });
//     console.log(arr[nameFind]);
// }
// function delContact(arr){
//     let ten1 = prompt("Nhap ten ban muon tim");
//     let nameFind = arr.findIndex(function(el,i){
//             return el.ten === ten1;
//     });
//     delete arr[nameFind];
// }


