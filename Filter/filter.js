console.log(`Display hẹ hẹ`)

// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
//Filter, find
//mutate: sửa đổi, thay đổi

let arr = [
    {        name: "Soupsix", age: 25},
    {        name: "Hieu",  age: 22},
    {        name: "Hanh",  age: 21},
    {        name: "Khanh", age: 23},
    {        name: "Hanh",  age: 25},                  
];

//Filter: lọc ra các phần tử thỏa mãn điều kiện nếu không có thì trả về mảng rỗng
//Find: tìm ra phần tử đầu tiên thỏa mãn điều kiện, nếu không có thì trả về undefined
let filter = arr.find((item, index) => {
    return item && item.age === 35;
});

console.log(`Filter: `, filter);