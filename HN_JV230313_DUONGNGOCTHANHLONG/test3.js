function numberOfDay(month, year) {
    // Kiểm tra tháng và năm nhập vào
    if (month < 1 || month > 12) {
      return "Tháng không hợp lệ";
    }
    if (year < 0) {
      return "Năm không hợp lệ";
    }
  
    // Tính số ngày của tháng đó
    let daysInMonth;
    switch (month) {
      // Tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        daysInMonth = 31;
        break;
  
      // Tháng 4, 6, 9, 11 có 30 ngày
      case 4:
      case 6:
      case 9:
      case 11:
        daysInMonth = 30;
        break;
  
      // Tháng 2 có 28 ngày nếu không phải năm nhuận
      // và có 29 ngày nếu là năm nhuận
      case 2:
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
          daysInMonth = 29;
        } else {
          daysInMonth = 28;
        }
        break;
    }
  
    // Trả về kết quả
    return daysInMonth;
  }
  
  // Nhập năm tháng
  let month = Number(prompt("Nhập tháng:"));
  let year = Number(prompt("Nhập năm:"));
  
  // Gọi hàm thông báo kết quả
  const daysInMonth = numberOfDay(month, year);
  alert(`Tháng ${month} năm ${year} có ${daysInMonth} ngày.`);
  