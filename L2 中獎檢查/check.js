const myName = '小黑'

// if else 判斷式
if(myName=='小黑'){
  console.log('沒錯！')
}else if(myName=='帥哥'){
  console.log('太見外了吧')
}else{
  console.log('不是我！')
}

//for迴圈
//第一個初始值，第二個結束條件，第三個中間流程
for(i=0;i<10;i++){
  console.log(i)
}


let myBox= ['蘋果','水梨','西瓜']

//for迴圈搭配之前的array
for(i=0;i<myBox.length;i++){
  console.log(myBox[i])
}

//random
let randomNumber = Math.random();
console.log(randomNumber)

// //結合random和if else
if(randomNumber<0.5){
  console.log('今天運氣有點爛')
}else{
  console.log('今天運氣不錯')
}


//實務：發票兌獎檢查
const prize = 36822639
const myReceipt = [12343221,56234123,21245212,36822639]
for(i=0;i<myReceipt.length;i++){
  if(myReceipt[i]==prize){
    console.log('中獎一張囉！！！')
  }
}


//function
function myFunction(name){
  console.log('hello',name)
}

myFunction('kevin')

// setTimeOut setinterval
setTimeout(function(){console.log("3秒過後")},3000);

let startTime=new Date();
setInterval(function(){
  console.log('每一秒顯示一次',new Date()-startTime)
},1000)



//牛刀小試
//1.利用random隨機產生一組數字
//2.利用if else來判斷<0.2就顯示中獎，其餘顯示沒中獎(中獎機率20%)。
//3-1.利用setInterval，每5秒開一次獎。
//3-2.利用for迴圈連續開三次。


// setInterval(function(){
//   let random = Math.random();
//   if(random<0.2){
//     console.log('中獎')
//   }else{
//     console.log('沒中獎')
//   }
// },5000)

// for(i=0;i<3;i++){
//   let random = Math.random();
//   if(random<1/3){
//     console.log('中獎')
//   }else{
//     console.log('沒中獎')
//   }
// }

