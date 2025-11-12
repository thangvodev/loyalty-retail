import { Divider } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddCircleFilledIcon from "../icons/AddCircleFilledIcon";
import HomeFilledIcon from "../icons/HomeFilledIcon";
import EditIcon from "../icons/EditIcon";
import { Button } from "../common/button";

const AddressList = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[12px] bg-white px-[16px] py-[20px]">
      {data.map((location, index) => (
        <React.Fragment key={index}>
          <AddressListItem location={location} />
          {index <= data.length - 1 && <Divider className="m-0" />}
        </React.Fragment>
      ))}
      {/* Add more button */}
      <div
        className="flex items-center gap-[20px]"
        onClick={() => navigate("/user-location-form")}
      >
        {/* Icon */}
        <AddCircleFilledIcon className="size-[40px] rounded-full border-[5px] border-green1 bg-green1 text-green5" />
        {/* Location */}
        <div className="flex flex-col">
          <div className="text-base font-medium text-green5">Thêm mới</div>
          <div className="text-xs font-normal text-gray7">
            Lưu địa chỉ của bạn
          </div>
        </div>
      </div>
    </div>
  );
};

const AddressListItem = ({ location }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex gap-[20px]">
        {/* Icon */}
        <div className="flex size-[40px] items-center justify-center rounded-full bg-green1">
          <div className="size-[20px]">
            <HomeFilledIcon className="size-full object-cover text-green5" />
          </div>
        </div>
        {/* Location */}
        <div className="flex flex-col justify-between">
          <div className="text-[15px] font-medium">{location.name}</div>
          <div className="flex gap-[4px]">
            <div className="text-xs font-normal text-gray8">
              {location.distance}
            </div>
            <div className="text-xs font-normal text-gray7">
              {location.address}
            </div>
          </div>
        </div>
      </div>
      {/* Edit */}
      <Button.Icon
        icon={<EditIcon className="text-green5" />}
        className="size-fit flex-none"
        onClick={() => navigate("/user-location-form")}
      />
    </div>
  );
};

export { AddressList };

const data = [
  {
    name: "Nhà",
    distance: "0.9km",
    address: "Quận 4, Thành phố Hồ Chí Minh",
  },
  {
    name: "Công ty",
    distance: "0.9km",
    address: "Quận 4, Thành phố Hồ Chí Minh",
  },
];
