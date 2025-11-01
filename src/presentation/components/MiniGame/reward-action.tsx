import React from "react";
import GameIcon from "../../static/icons/game-icon.png";
import { Divider } from "antd";

interface ActionItem {
  icon: string;
  title: string;
  desc: string;
  buttonText: string;
  onClick: () => void;
}

interface RewardActionsProps {
  actions: ActionItem[];
}

const RewardActions: React.FC<RewardActionsProps> = ({ actions }) => {
  return (
    <div
      className="rounded-[12px] bg-white p-3"
      style={{
        boxShadow: "0px 4px 12px 0px #DAE9EC87",
      }}
    >
      <div className="mb-4 flex items-center gap-1">
        <img src={GameIcon} alt="Minigame" className="h-6 w-6" />
        <p className="text-[16px] font-medium text-[#212324]">
          Minigame - săn thêm điểm
        </p>
      </div>

      <div className="flex flex-col">
        {actions.map((item, idx) => (
          <React.Fragment>
            <div
              key={idx}
              className="flex items-center justify-between"
              style={{
                paddingTop: idx !== 0 ? "16px" : "0",
              }}
            >
              <div className="flex flex-1 items-center gap-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="size-[56px] min-w-[56px] rounded-[10.5px] object-cover"
                />
                <div>
                  <p className="text-[15px] font-semibold text-[#212324]">
                    {item.title}
                  </p>
                  <p className="text-[12px] text-gray5">
                    {item.desc.includes("120 điểm") ? (
                      <>
                        2/3 lượt còn lại, mỗi lần chia sẻ nhận được{" "}
                        <span className="font-semibold text-orange6">
                          120 điểm
                        </span>
                      </>
                    ) : (
                      item.desc
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={item.onClick}
                className="whitespcae-nowrap mr-2 min-w-[67px] rounded-full bg-green6 p-[6px] text-[12px] text-white"
              >
                {item.buttonText}
              </button>
            </div>
            {idx < actions.length - 1 && (
              <Divider className="m-0 mt-4 h-[0.5px] bg-gray1" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RewardActions;
