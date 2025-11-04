import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "../../static/icons/close-icon.png";
import CoinIcon from "../../static/icons/coin-gold.png";
import HappyIcon from "../../static/icons/happy-icon.png";

const WinPrizeModal = ({ popupVisible, setPopupVisible, winner, count }) => {
  if (!popupVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <AnimatePresence mode="wait">
        <motion.div
          key="step2"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 flex w-[72.5%] min-w-[270px] flex-col items-center justify-center gap-10 rounded-2xl p-8 text-white"
          style={{
            background:
              "radial-gradient(66.88% 66.88% at 50% 33.12%, #57D995 0%, #CBFFD6 100%)",
          }}
        >
          <div
            className="absolute right-0 top-0 w-[205px]"
            style={{
              transform: "translateY(-140px)",
            }}
          >
            <img src={HappyIcon} className="w-full" />
          </div>

          <div className="absolute right-[-12px] top-[-16px] w-8">
            <img
              src={CloseIcon}
              alt="Close"
              className="absolute right-[-20px] top-[-20px] cursor-pointer"
              onClick={() => setPopupVisible(false)}
            />
          </div>

          <div className="space-y-1 text-center">
            <div className="text-[24px] font-extrabold">CHÚC MỪNG</div>

            <div className="text-[16px] font-medium">Bạn nhận được </div>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3 text-[40px] font-bold text-green5">
            {500}
            <img src={CoinIcon} className="size-[137x] min-w-[37px]" />
          </div>

          <button
            onClick={() => setPopupVisible(false)}
            className="rounded-full bg-green6 p-[12px] text-[16px] text-white"
          >
            {count <= 0 ? "NHẬN QUÀ" : "QUAY TIẾP"}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WinPrizeModal;
