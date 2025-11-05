import React, { useState, useRef, useEffect } from "react";
import NotificationIcon from "../../static/icons/notification.png";
import BoxIcon from "../../static/icons/box.png";
import TicketDiscount from "../../static/icons/ticket-discount.png";
import RewardIcon from "../../static/icons/reward.png";
import SettingIcon from "../../static/icons/setting-2.png";
import Smart from "../../static/icons/smart-phone.png";
import Moon from "../../static/icons/moon.png";

interface Segment {
  id: number;
  label: string;
  backgroundColor: string;
  textColor: string;
}

const Content: React.FC = () => {
  const [settings, setSettings] = useState({
    orderInfo: true,
    promoInfo: false,
    rewardInfo: true,
    pushNotification: true,
    doNotDisturb: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col gap-[20px] p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-9 min-w-9 items-center justify-center rounded-[12px] bg-purple6">
            <img src={NotificationIcon} className="size-5" />
          </div>
          <div className="flex-1 text-sm">
            <div className="text-base font-medium text-[#212324]">
              Loại thông báo
            </div>

            <div className="text-xs text-gray7">
              Chọn loại thông báo bạn muốn nhận
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Item
            icon={
              <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-green6">
                <img src={BoxIcon} className="size-[15.56px]" />
              </div>
            }
            title="Thông tin đơn hàng"
            desc="Nhận thông báo khi đơn hàng được xác nhận, bắt đầu vận chuyển và đã đến nơi giao hàng"
            isOn={settings.orderInfo}
            onToggle={() => toggleSetting("orderInfo")}
          />

          <Item
            icon={
              <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-red5">
                <img src={TicketDiscount} className="size-[15.56px]" />
              </div>
            }
            title="Thông tin ưu đãi"
            desc="Cập nhật các ưu đãi và khuyến mãi mới nhất"
            isOn={settings.promoInfo}
            onToggle={() => toggleSetting("promoInfo")}
          />

          <Item
            icon={
              <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-purple6">
                <img src={RewardIcon} className="size-[15.56px]" />
              </div>
            }
            title="Phần thưởng & Tích luỹ"
            desc="Nhận thông tin về điểm thưởng, tích luỹ hạng thành viên và ưu đãi"
            isOn={settings.rewardInfo}
            onToggle={() => toggleSetting("rewardInfo")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="flex size-9 min-w-9 items-center justify-center rounded-[12px] bg-gray7">
            <img src={SettingIcon} className="size-5" />
          </div>
          <div className="flex-1 text-sm">
            <div className="text-base font-medium text-[#212324]">
              Thiết lập thông báo
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Item
            icon={
              <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-green6">
                <img src={Smart} className="size-[15.56px]" />
              </div>
            }
            title="Thông báo đẩy"
            desc="Nhận thông báo trên thiết bị"
            isOn={settings.pushNotification}
            onToggle={() => toggleSetting("pushNotification")}
          />

          <Item
            icon={
              <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-purple7">
                <img src={Moon} className="size-[15.56px]" />
              </div>
            }
            title="Chế độ không làm phiền"
            desc="Tắt thông báo từ 22:00 - 07:00"
            isOn={settings.doNotDisturb}
            onToggle={() => toggleSetting("doNotDisturb")}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

interface ItemProps {
  icon?: React.ReactNode;
  title: string;
  desc: string;
  isOn: boolean;
  onToggle: () => void;
}

const Item: React.FC<ItemProps> = ({ icon, title, desc, isOn, onToggle }) => (
  <div
    className="flex items-center justify-between bg-white p-3"
    style={{
      boxShadow: "0px 4px 12px 0px #DAE9EC87",
    }}
  >
    <div className="flex gap-2">
      {icon && <div className="pt-1">{icon}</div>}
      <div className="space-y-1">
        <div className="text-sm font-medium text-[#212324]">{title}</div>
        <div className="text-[10px] text-gray8">{desc}</div>
      </div>
    </div>
    <div className="ml-10 flex items-center">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={isOn}
          onChange={onToggle}
          className="peer sr-only"
        />
        <div className="bg-neutral400 h-5 w-9 rounded-full after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-green6 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
      </label>
    </div>
  </div>
);
