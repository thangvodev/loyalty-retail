import React from "react";

const ProductDetails = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-base font-medium">Thông tin sản phẩm</div>
      <div className="flex flex-col gap-[12px]">
        <div className="whitespace-pre-wrap text-xs font-normal text-gray8">
          {`Áo Khoác Dù Nữ Trượt Nước Signal Logo WOP 2087 được chế tạo từ chất liệu 100% polyester với trọng lượng nhẹ 135 GSM, kết cấu ba lớp hiện đại: lớp ngoài phủ công nghệ trượt nước theo phương pháp ngấm ép, lớp giữa là vải dù thời trang sợi kỵ nước theo cấu trúc dệt chặt và lớp trong là màng TPU với hàng ngàn lỗ siêu nhỏ thoáng khí, chống thấm tối ưu. Bảng màu đa dạng với các gam cá tính như đen, xám Belgian Block, xanh đậm Deep River cho nam và đen, xám Belgian Block, hồng khói Dusty Rose cho nữ, phù hợp cho cả phong cách năng động lẫn tối giản. Điểm nhấn đặc biệt đến từ chất vải co giãn, thoáng khí với lỗ thoát hơi sau lưng, dây kéo chống thấm, túi khóa kéo tiện lợi, túi trong an toàn và logo phản quang giúp tăng độ an toàn khi di chuyển ban đêm. Sẵn sàng đồng hành cùng bạn trong mọi điều kiện thời tiết — đừng bỏ lỡ chiếc áo khoác bền bỉ, thời trang và đa năng này!
 
Chất liệu: 100% Polyester
Form: Regular mix Relax
Hệ túi: 2 túi ngoài có dây kéo + 1 túi trong
Màu sắc: Đen, Xám Belgian Block, Hồng Khói Dusty Rose
Sản xuất: Việt Nam`}
        </div>
        <DetailsTable />
      </div>
    </div>
  );
};

const DetailsTable = () => {
  return (
    <div className="flex flex-1 flex-col">
      {table.rows.map((row, index) => (
        <div key={index} className="flex">
          <div
            className="flex-1 border-[0.63px] border-gray2 bg-gray1 px-[8.15px] py-[6.27px]"
            style={{ border: "0.63px solid #E6E6E6" }}
          >
            <div className="text-2xs font-normal">{row[0]}</div>
          </div>
          <div
            className="flex-1 border-[0.63px] border-gray2 bg-white px-[8.15px] py-[6.27px]"
            style={{ border: "0.63px solid #E6E6E6" }}
          >
            <div className="text-2xs font-normal">{row[1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ProductDetails };

const table = {
  rows: [
    ["Hệ Điều Hành", "Android 13 | MDM"],
    ["Chipset", "Rk3568 - Quad-core 2.0GHz, Cortex A55"],
    ["Bộ Nhớ", "4GB DDR, 64GB eMMC"],
    ["Màn hình chính", "15.6” IPS | Full HD | IK06"],
    ["Màn hình phụ", "10.1” HD (1280*800)"],
    ["Kết nối không dây", "WiFi/Bluetooth/Ethernet"],
    ["Cổng Kết Nối", "4 USB Type A, 1 micro USB, 1 RJ11, 1 RJ45, 1 Audio Jack"],
    ["Nguồn Cấp", "12V/3A"],
    ["MDM/TMS", "Hệ thống quản trị thiết bị (Free)"],
    ["Khác", "1 Power Key"],
    ["Điều kiện môi trường", "Nhiệt độ hoạt động: -5℃ ~ 45℃"],
  ],
};
