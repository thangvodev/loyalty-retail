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
    <div className="flex">
      <div className="flex flex-1 flex-col">
        {table.leftCol.map((label, index) => (
          <div
            key={index}
            className="border-[0.63px] border-gray2 bg-gray1 px-[8.15px] py-[6.27px]"
            style={{ border: "0.63px solid #E6E6E6" }}
          >
            <div className="text-2xs font-normal">{label}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col">
        {table.rightCol.map((label, index) => (
          <div
            key={index}
            className="border-[0.63px] border-gray2 bg-white px-[8.15px] py-[6.27px]"
            style={{ border: "0.63px solid #E6E6E6" }}
          >
            <div className="text-2xs font-normal">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProductDetails };

const table = {
  leftCol: [
    "Hệ Điều Hành",
    "Chipset",
    "Bộ Nhớ",
    "Màn hình chính",
    "Màn hình phụ",
    "Kết nối không dây",
    "Cổng Kết Nối",
    "Nguồn Cấp",
    "MDM/TMS",
    "Khác",
    "Điều kiện môi trường",
  ],
  rightCol: [
    "Android 13 | MDM",
    "Rk3568 - Quad-core 2.0GHz, Cortex A55",
    "4GB DDR, 64GB eMMC",
    "15.6” IPS | Full HD | IK06",
    "10.1” HD (1280*800)",
    "WiFi/Bluetooth/Ethernet",
    "4 USB Type A, 1 micro USB, 1 RJ11, 1 RJ45, 1 Audio Jack",
    "12V/3A",
    "Hệ thống quản trị thiết bị (Free)",
    "1 Power Key",
    "Nhiệt độ hoạt động: -5℃ ~ 45℃",
  ],
};
