

let arr = prompt("Nhập vào dãy số cách nhau:").split(" ");



// // Sắp xếp mảng theo thứ tự giảm dần dùng hàm sort
// arr.sort(function(a, b) {
//   return b - a;
// });

// // In ra mảng đã sắp xếp
// console.log("Mảng đã sắp xếp theo thứ tự giảm dần: " + arr);


// Sắp xếp theo thứ tự giảm dần không dùng hàm sort
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let a = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = a;
      }
    }
  }
  
  // In ra mảng đã sắp xếp
  console.log("Mảng đã sắp xếp theo thứ tự giảm dần: " + arr);