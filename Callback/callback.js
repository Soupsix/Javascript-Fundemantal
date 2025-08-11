//JS là một ngôn ngữ bất đồng bộ, vì vậy khi gọi hàm thì nó sẽ không đợi hàm chạy xong mới chạy tiếp
// mà nó sẽ chạy tiếp các câu lệnh khác, khi nào hàm chạy xong thì nó sẽ gọi hàm đó


console.log(`Display hẹ hẹ`)

let sum = (a, b, callback) => {
    let tong = a + b;

    //Gọi callback sau 5s
    // setTimeout(() => {
    //      callback(tong);
    // }, 5000) //TimerHandle: hàm để xử lý

    //Gọi callback Infinite times
    let i = 0;
    let timer = setInterval(() => {
        callback(tong);
        i++;
        if (i === 5) {
            clearInterval(timer);
        }
    }, 3000); //Gọi hàm callback mỗi 3 giây

}

let printSum = (message) => {
    console.log(`>>>Check sum 6 + 9: `, message);
}

sum(6, 9, printSum);