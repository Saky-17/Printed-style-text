const msgStr = "yourstring" //only in small with no space
const msgArr = Array.from(msgStr);

let alpha=[]
for(let i = 97;i<=122;i++){
  alpha.push(String.fromCharCode(i));
}

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
