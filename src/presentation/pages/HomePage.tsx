import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import { HomePageContent } from "../components/HomePage";
import { Footer } from "../components/common/footer";
import Logo from "../static/images/logo.png";
import SearchNormalIcon from "../components/icons/SearchNormalIcon";
import NotificationIcon from "../components/icons/NotificationBingFilledIcon";
import ShoppingBagIcon from "../components/icons/ShoppingBagFilledIcon";
import { Badge } from "../components/common/badge";
import { useNavigate } from "react-router-dom";

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Page className="page-content relative flex flex-1 flex-col bg-green6">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-80px)] items-center justify-between pr-[12px]">
              <img src={Logo} alt="" className="h-[10px] w-[124px]" />
              <div className="flex items-center gap-[12px]">
                <div className="flex size-[24px] items-center justify-center rounded-full bg-white">
                  <SearchNormalIcon className="size-[17.14px] text-green6" />
                </div>
                <div
                  className="flex size-[24px] items-center justify-center rounded-full bg-white"
                  onClick={() => navigate("/notification")}
                >
                  <Badge dot color="#F64C4C" dotSize={5}>
                    <NotificationIcon className="size-[17.14px] text-green6" />
                  </Badge>
                </div>
                <div className="flex size-[24px] items-center justify-center rounded-full bg-white">
                  <ShoppingBagIcon className="size-[17.14px] text-green6" />
                </div>
              </div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-green6 !pb-[18px] !pl-4 !pt-[10px]"
        showBackIcon={false}
        textColor="white"
      />
      <div className="flex-1 overflow-auto bg-gradient-to-b from-green6 from-50% to-surface2 to-50%">
        <HomePageContent />
      </div>
      <Footer />
    </Page>
  );
};

export default HomePage;
