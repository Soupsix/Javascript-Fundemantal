console.log(`Display hẹ hẹ`);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//     console.log(`Element at index ${i} is ${arr[i]}`);
//     arr[i] = arr[i] * arr[i]; // Doubling each element
// }


//Map không thay đổi mảng gốc mà tạo ra một mảng mới còn array thì ngược lại
let mapArr = arr.map((item, index) => {
    item = item * item; // Squaring each element
    return item;
})

console.log(`Original array: ${arr}`);
console.log(`Mapped array: ${mapArr}`);