console.log(`Video for-loop`);

let arr = [`MU`, `Liver`, `Chelsea`, `MC`];

for(let i = 0; i < arr.length; i++) {
    console.log(`Output: ${arr[i]}`);
}
//i = 1, j = ++i(i = 2,j = 2) // combine before
//i = 1, j = i++ (i = 2, j = 1) //Assign before

console.log(`---------- While-Loops ---------`);
let arrTop4 = [`MU`, `Liver`, `Chelsea`, `MC`];
let j = 0;
while(j < arrTop4.length) {
    console.log(`Top: `, j + 1, arrTop4[j]);
    j++;
}

let i = 0;
let flag = false;
while(i < arrTop4.length) {
    if(arrTop4[i].length === 2) {
        console.log(`index of top 3: `,i + 1, arrTop4[i]);
    }
    i++;
}

console.log(`----------- Return -------------`);
function supSec(x,y) {
    return x + y;
}
console.log(`check sum: `, supSec(5,6));