function textUpLow(string) {
  // Loại bỏ khoảng trắng ở đầu và cuối câu
  string = string.trim();

  // Tách các từ theo khoảng trắng và chuyển đổi chữ cái đầu của từ sang chữ hoa
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      // loại bỏ các từ rỗng 
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }
  // trả về kết quả
  return words.join(" ");
}

//Nhập đoạn văn
let string = prompt("Nhập đoạn văn : ");
// Thông báo kết quả
let result = textUpLow(string);
console.log(result);
