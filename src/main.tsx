/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import { App as AntdApp, ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import { App, Box, SnackbarProvider } from "zmp-ui";

import { getBasePath } from "./presentation/utils/zma";

import { validateMessages } from "./presentation/constants/validate-messages";

import "dayjs/locale/vi";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import localeData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
//change to vietnamese
dayjs.locale("vi");
//add plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localeData);
dayjs.extend(customParseFormat);

import { AppProvider } from "./presentation/context/AppContext";
import HomePage from "./presentation/pages/HomePage";
import AccountPage from "./presentation/pages/AccountPage";
import QRPage from "./presentation/pages/QRPage";
import ProfilePage from "./presentation/pages/ProfilePage";
import MemberCardsPage from "./presentation/pages/MemberCardsPage";
import FlashSalePage from "./presentation/pages/FlashSalePage";
import CategoryPage from "./presentation/pages/CategoryPage";
import ShopPage from "./presentation/pages/ShopPage";
import ProductDetailsPage from "./presentation/pages/ProductDetailsPage";

const Layout = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <Box className="flex flex-1 flex-col overflow-hidden">
        <Outlet />
        <ToastContainer style={{ marginTop: "48px" }} />
      </Box>
    </Box>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "flash-sale",
          element: <FlashSalePage />,
        },
        {
          path: "category",
          element: <CategoryPage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
        },
        {
          path: "account",
          element: <AccountPage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "qr",
          element: <QRPage />,
        },
        {
          path: "member-cards",
          element: <MemberCardsPage />,
        },
        {
          path: "products/:productId",
          element: <ProductDetailsPage />,
        },
      ],
    },
  ],
  { basename: getBasePath() },
);

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#4884FF",
              fontFamily:
                "Manrope, 'Inter',-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
            },
          }}
          form={{ validateMessages }}
          locale={viVN}
        >
          <AntdApp>
            <SnackbarProvider>
              <AppProvider>
                <RouterProvider router={router} />
              </AppProvider>
            </SnackbarProvider>
          </AntdApp>
        </ConfigProvider>
      </App>
    </RecoilRoot>
  );
};

export default MyApp;
