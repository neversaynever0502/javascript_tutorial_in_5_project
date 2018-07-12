//常數為const，變數為let，用來替換會一直重複使用的
const topic = '我的背包'
console.log('這次的練習主題是：',topic)

//練習let
let apple = 7
let answer = (apple+3)*8
console.log(answer)

//command是兩個斜線，程式碼不會讀取

//我的背包內容物
//矩陣 叫做array 長的是左右中括弧 裡面就是放一堆集合的東西
let bag = ['蘋果','香蕉','西瓜']
console.log('這是我的書包',bag)

//我的背包內容數量
//array的長度為length，.為執行甚麼function
let bagVol = bag.length
console.log('數量為',bagVol)

//拿出我的書包的特定物品
//讀取方式為後面中括弧+第幾個(第一個為0，第二個為1)
let take = bag[0]
console.log('拿出第一個：',take)

//全部輪流拿出來
//forEach，矩陣的函數，前面的()的第一個代表了變數，第二個代表索引，都可自己命名
//後面的{}代表執行的內容
bag.forEach((thing,index)=>{
  console.log('這是第幾個迴圈：',index)
  console.log('我買了',thing)
})

//加上時間
bag.forEach((thing)=>{
  var d = new Date();
  console.log('我拿出'+thing+'，在'+d)
})

//放進新的
bag.push('葡萄')
console.log(bag)

//拿走不要的
//第一個參數為起始位置，第二個參數為結束位置
bag.splice(0,1);
console.log(bag)

//限定書包大小後，計算還剩多少空間
const bagVolMax = 10
console.log('還剩下多少空間：',(bagVolMax-bagVol))

//牛刀小試
//今天台北市長參選人為柯文哲，丁守中，姚文智
//1.請加入一個新的參選人
//2.列出現在有幾位參選人
//3.每個候選人分別說出：「你好，我是ＸＸＸ，請投給我！」


//從let candidate = ["柯文哲"，"丁守中","姚文智"]開始
//在終端機中顯示

//現在參選人有4位，請他們發言：）
//你好，我是柯文哲，請投給我！
//你好，我是丁守中，請投給我！
//你好，我是姚文智，請投給我！
//你好，我是KAI，請投給我！

let candidate = ["柯文哲","丁守中","姚文智"]
// candidate.push("KAI")
// console.log('現在參選人有'+candidate.length+'位，請他們發言：）')
// candidate.forEach((person)=>{
//   console.log('你好，我是'+person+'，請投給我！')
// })


//Object，也稱物件，外圍是大括弧，跟array不同是它會放key和value（也就是欄位和值）
let thingDetail = {
  name:'蘋果',
  number:2,
  address:'花蓮'
}
console.log(thingDetail)

//Object可以直接讀取某個欄位
const thingAddress = thingDetail.address
const thingName = thingDetail['name']
console.log(thingAddress,'的',thingName)

//array裡也可以放Object（這就是JSON格式的組成！）
// let bag = ['蘋果','水梨','西瓜']
let newBag = [
  {
    name:'蘋果',
    number:2,
    address:'花蓮'
  },
  {
    name:'水梨',
    number:1,
    address:'高雄'
  },
  {
    name:'西瓜',
    number:2,
    address:'屏東'
  }
]

//複習：取array中的第一個，加上新觀念：抓取其中的address
const firstAddress = newBag[0].address
console.log(firstAddress)

//複習：forEach的用法，加上object用法
newBag.forEach((thingNew)=>{
  console.log('小明的'+thingNew.name+'來自'+thingNew.address+'!!!')
})


//計算剩餘多少空間數量
let bagRemain = 10
console.log('剩下多少真實空間：',bagRemain-newBag[0].number-newBag[1].number-newBag[2].number)

//用forEach來解決
newBag.forEach((thing)=>{
  bagRemain=bagRemain-thing.number
  //前面是新的bagRemain，需要塞給他一個值，後面是原本上面的let bagRemain的值
  console.log(bagRemain)
})
console.log('剩下多少真實空間(forEach)：',bagRemain)


//牛刀小試
//請寫出一個自創的JSON的格式，並讀取某欄位


