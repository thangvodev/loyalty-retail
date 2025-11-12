import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import { ProfilePageInformationContent } from "../components/ProfilePage";

const ProfilePage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-90px)] justify-between">
              <div className="text-base">Thông tin cá nhân</div>
            </div>
          ) as unknown as string
        }
        className="topbar h-auto flex-none"
        backIcon={
          <div className="absolute left-1/2 top-1/2 flex size-[16px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
            <ArrowLeftIcon className="size-full object-cover text-black" />
          </div>
        }
      />
      <div className="flex-1 overflow-auto bg-white hide-scrollbar">
        <ProfilePageInformationContent />
      </div>
    </Page>
  );
};

export default ProfilePage;
