console.log(`Display hẹ hẹ`)

function cak(x,y) {
    return x + y;
}

//function arrow
let sum = (a,b) => {
    return a + b;
}

console.log(`Check sum: `, sum(5,10));

console.log(`-----------Call back --------`)
let sum1  = (n,m, callback) => {
    let  tong  = n + m;
    setTimeout(() => {
         callback(tong);
    },2000); //TimerHandle: hàm để xử lý
    
    let i = 0;
    console.log(`>>>>>>>`)
    let timer = setInterval(() => {
        callback(tong);
        i++;
        if(i === 5) {
        clearInterval(timer);
    }
    },3000)
    
    
} 

let printSum = (message) => {
    console.log(`>> Check sum:  5 + 10 = `, message);
}

sum1(5,10, printSum);
