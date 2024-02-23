const msgStr = prompt()
const msgArr = Array.from(msgStr);

let alpha=[]
for(let i = 97;i<=122;i++){
  alpha.push(String.fromCharCode(i));
}

// let caps=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

let n = alpha.length;
Array.prototype.printer = function (){
  let result = '';
  for(let i=0;result !== msgStr;i++){
    let randAlpha ='';
  for(let k=0;randAlpha !== this[i];k++){
    let randNum = Math.random();
  
    for(let j=0;j<26;j++){
      if(randNum<(j+1)/n && randNum>(j)/n){
       randAlpha = alpha[j];
      }
    }

    console.log(result+randAlpha);
  }

    result+=this[i]
   console.log(result)
  }
}
  msgArr.printer();

// let randomizer = () =>{

//   let randNum = Math.random();

//   for(let j=0;j<26;j++){
//     if(randNum<(j+1)/26 && randNum>(j)/26){
//      randAlpha = alpha[j];
//     }
//   }

//   console.log(result+randAlpha);
//   if(randAlpha !== this[i]){
//   setTimeout(()=>{randomizer()},300);}
// }
//   randomizer()