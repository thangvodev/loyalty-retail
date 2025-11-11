import React from "react";
import { Map } from "../common/map";
import { Button } from "../common/button";
import { SearchBarNoPopup } from "../common/search-bar";
import SearchNormalIcon from "../icons/SearchNormalIcon";

const MapContainer = () => {
  return (
    <div className="h-[calc(100vh-125px)] w-full">
      <div className="px-[16px] py-[8px]">
        <SearchBarNoPopup
          className="rounded-[24px]"
          placeholder="Tìm vị trí"
          prefix={<SearchNormalIcon className="size-[15px] text-neutral500" />}
          suffix={false}
        />
      </div>
      <Map lat={51.505} long={-0.09} centerButton={true} />
      <div
        className="absolute inset-x-0 bottom-0 z-[9999] px-[16px] pb-[20px] pt-[10px]"
        style={{ boxShadow: "0px -4px 24px 0px #E7EFF3" }}
      >
        <Button
          text={
            <div className="text-[15px] font-medium text-white">
              Chọn vị trí này
            </div>
          }
          className="h-[39px] w-full rounded-[40px] bg-green6"
        />
      </div>
    </div>
  );
};

export default MapContainer;
