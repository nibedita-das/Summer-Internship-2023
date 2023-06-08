// function Sum(a, b){
//     return a + b;
// }
// function diff(a, b){
//     return a + b;
// }
// console.log(Sum(2, 3))
// console.log(diff(2, 3))

const c = [1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<c.length;i++){
    let count=0
    for(let j=2;j<c[i];j++){
        if(c[i]%j==0)
        count++;
    }
    if(count==0)
    console.log(c[i])
}