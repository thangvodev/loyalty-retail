import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import PhoneFilledIcon from "../components/icons/PhoneFilledIcon";
import { AccountPageContent } from "../components/AccountPage";
import { Footer } from "../components/common/footer";

const AccountPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-90px)] justify-between">
              <div>Tài khoản</div>
              <PhoneFilledIcon className="size-[24px] text-purple5" />
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
        <AccountPageContent />
      </div>
      <Footer />
    </Page>
  );
};

export default AccountPage;
