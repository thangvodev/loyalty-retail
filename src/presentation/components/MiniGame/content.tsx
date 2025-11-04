import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameInfoCard from "../common/game-info-card";
import DailyCheckinCard from "./daicheckin-card";
import RewardActions from "./reward-action";
import { Achievement } from "./achievement";
import CoinIcon from "../../static/icons/coin-gold.png";
import Game1Icon from "../../static/icons/game1-icon.png";
import Game2Icon from "../../static/icons/game2-icon.png";
import Game3Icon from "../../static/icons/game3-icon.png";
import LeaderboardCard from "./leader-board-card";
import { SharePopup } from "./share-popup";

const Content = () => {
  const [days, setDays] = useState([
    { day: "Ngày 1", reward: "+100", checked: true },
    { day: "Hôm nay", reward: "+500", checked: false, isToday: true },
    { day: "Ngày 3", reward: "+100", checked: false },
    { day: "Ngày 4", reward: "+100", checked: false },
    { day: "Ngày 5", reward: "+100", checked: false },
    { day: "Ngày 6", reward: "+100", checked: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [showReward, setShowReward] = useState(false);

  const handleCheckin = () => {
    setDays((prev) =>
      prev.map((d, i) =>
        i === 1 ? { ...d, checked: true, isToday: false } : d,
      ),
    );

    setShowReward(true);
    setTimeout(() => setShowReward(false), 1800); // ẩn sau 1.8s
  };

  return (
    <div className="relative z-[10] flex w-full flex-col gap-[20px] pb-[20px]">
      {/* Overlay toàn màn hình khi nhận thưởng */}
      <AnimatePresence>
        {showReward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-1 text-[38px] font-bold text-white"
            >
              + 500 <img src={CoinIcon} className="size-[37px] min-w-[37px]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <SharePopup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div
        className="h-[130px] bg-green5"
        style={{
          borderBottomLeftRadius: "200% 100px",
          borderBottomRightRadius: "200% 100px",
        }}
      />
      <div
        className="flex flex-col gap-5 px-[16px] pt-[4px]"
        style={{
          transform: "translateY(-150px)", //130 + 20 gap
        }}
      >
        <GameInfoCard
          type="gold"
          name="Minh Vy"
          rank="5"
          coin={500}
          avatar={"https://i.pravatar.cc/150?img=8"}
        />

        <DailyCheckinCard days={days} onCheckin={handleCheckin} />
        <RewardActions actions={actions} setIsModalOpen={setIsModalOpen} />

        <LeaderboardCard currentRank={5} players={players} />

        <Achievement />
      </div>
    </div>
  );
};

export default Content;

const actions = [
  {
    icon: Game1Icon,
    title: "Vòng quay may mắn",
    desc: "Lorem ipsum",
    buttonText: "Chơi ngay",
    path: "/lucky-draw",
  },
  {
    icon: Game2Icon,
    title: "Chia sẻ nhận thưởng",
    desc: "2/3 lượt chia sẻ, nhận 120 điểm",
    buttonText: "Chia sẻ",
    path: "share",
  },
  {
    icon: Game3Icon,
    title: "Làm nhiệm vụ nhận thưởng",
    desc: "Thực hiện nhiệm vụ để cộng thêm điểm",
    buttonText: "Thực hiện",
    path: "",
  },
];

const players: any = [
  {
    id: 1,
    name: "Xuân Hoà",
    avatar: "https://i.pravatar.cc/60?img=5",
    points: 900,
  },
  {
    id: 2,
    name: "Thanh Mai",
    avatar: "https://i.pravatar.cc/60?img=6",
    points: 1200,
  },
  {
    id: 3,
    name: "Thanh Mai",
    avatar: "https://i.pravatar.cc/60?img=7",
    points: 1000,
  },
  {
    id: 4,
    name: "Wade Warren",
    avatar: "https://i.pravatar.cc/60?img=8",
    points: 600,
    rankChange: "up",
  },
  {
    id: 5,
    name: "Kristin Watson",
    avatar: "https://i.pravatar.cc/60?img=9",
    points: 500,
    rankChange: "up",
  },
  {
    id: 6,
    name: "Kathryn Murphy",
    avatar: "https://i.pravatar.cc/60?img=10",
    points: 450,
    rankChange: "up",
  },
  {
    id: 7,
    name: "Dianne Russell",
    avatar: "https://i.pravatar.cc/60?img=11",
    points: 400,
    rankChange: "down",
  },
  {
    id: 8,
    name: "Courtney Henry",
    avatar: "https://i.pravatar.cc/60?img=12",
    points: 320,
    rankChange: "down",
  },
  {
    id: 9,
    name: "Cameron Williamson",
    avatar: "https://i.pravatar.cc/60?img=13",
    points: 240,
    rankChange: "down",
  },
  {
    id: 10,
    name: "Annette Black",
    avatar: "https://i.pravatar.cc/60?img=14",
    points: 200,
    rankChange: "up",
  },
];
