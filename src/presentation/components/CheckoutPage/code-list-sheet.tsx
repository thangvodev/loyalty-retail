import { CloseOutlined, StarFilled } from "@ant-design/icons";
import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { Divider, Input } from "antd";
import SaleImg from "../../static/images/sale.jpg";
import { useNavigate } from "react-router-dom";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import ClockFilledIcon from "../icons/ClockFilledIcon";
import AddCircleNoBorderIcon from "../icons/AddCircleNoBorderIcon";
import clsx from "clsx";

const CodeListSheet: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [addCodeForm] = Form.useForm();
  const [codeListform] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const initivalValues = {
    sortBy: "",
    rating: 0,
    priceRange: {},
  };

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative pb-[12px] pt-[16px] font-manrope">
                <div className="text-xl font-medium leading-none">
                  Mã giảm giá
                </div>
                <div
                  className="absolute right-[16px] top-[16px] flex size-[16px] items-center justify-end"
                  onClick={() => setVisible(false)}
                >
                  <CloseOutlined className="size-[20px] text-gray7" />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          unmountOnClose
          height={"85vh"}
          style={{
            background: "#FFFFFF",
            overflow: "visible",
          }}
        >
          <Form
            name="addCodeForm"
            form={addCodeForm}
            className="w-full px-[16px] pt-[12px] font-manrope"
          >
            <Form.Item name="keyword" noStyle>
              <Input
                placeholder="Nhập mã giảm giá ở đây"
                suffix={
                  <Button
                    text={
                      <div className="text-sm font-semibold text-green6">
                        Thêm
                      </div>
                    }
                  />
                }
                className="h-[49px]"
              />
            </Form.Item>
          </Form>
          <Form
            name="codeListform"
            form={codeListform}
            className="flex flex-1 flex-col gap-[16px] overflow-auto p-[16px] font-manrope"
            initialValues={initivalValues}
          >
            <CodeList />
          </Form>
          <div
            className="px-[16px] pb-[20px] pt-[12px]"
            style={{ boxShadow: "0px -4px 24px 0px #00000014" }}
          >
            <Button
              text={
                <div className="text-base font-normal text-white">Xác nhận</div>
              }
              className="h-[39px] w-full rounded-[24px] bg-green6 px-[12px]"
              onClick={codeListform.submit}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

const CodeList: FC<{
  value?: string;
  onChange?: (e: any) => void;
}> = (props) => {
  const [currentActive, setCurrentActive] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-[12px]">
      {codes.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center gap-[12px]">
            <img
              src={item.img}
              alt=""
              className="size-[56px] rounded-[4px] object-cover"
            />
            <Divider type="vertical" dashed className="m-0 h-[57px]" />
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between gap-[12px]">
                <div className="text-base font-normal">{item.title}</div>
                {currentActive.includes(item.value) ? (
                  <CheckMarkIcon className="size-[26px] text-green6" />
                ) : (
                  <Button.Icon
                    icon={
                      <AddCircleNoBorderIcon
                        className={clsx("size-[20px] rounded-full bg-gray1", {
                          "!text-gray3": item.status === "disabled",
                        })}
                      />
                    }
                    disabled={item.status === "disabled"}
                    className="size-fit"
                    onClick={() =>
                      setCurrentActive((prev) => [...prev, item.value])
                    }
                  />
                )}
              </div>
              <div className="flex items-center justify-between">
                <Button
                  text={
                    <div className="text-xs font-medium text-gray7">
                      Xem chi tiết
                    </div>
                  }
                  className="flex-none"
                />
                <div
                  className={clsx("invisible flex items-center gap-[4px]", {
                    "!visible": currentActive.includes(item.value),
                  })}
                >
                  <ClockFilledIcon className="size-[12px] text-orange5" />
                  <div className="text-[11px] font-normal text-red5">
                    Hết hạn sau 2 ngày
                  </div>
                </div>
              </div>
            </div>
          </div>
          {index < codes.length - 1 && <Divider className="m-0" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export { CodeListSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const codes = [
  {
    img: SaleImg,
    title: "Ưu đãi thành viên 15% cho hoá đơn 500.0000",
    expire: 2,
    status: "active",
    value: "1",
  },
  {
    img: SaleImg,
    title: "Ưu đãi thành viên 15% cho hoá đơn 500.0000",
    expire: 2,
    status: "active",
    value: "2",
  },
  {
    img: SaleImg,
    title: "Ưu đãi thành viên 15% cho hoá đơn 500.0000",
    expire: 2,
    status: "disabled",
    value: "3",
  },
];
