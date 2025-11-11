import { CloseOutlined, StarFilled } from "@ant-design/icons";
import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { Radio } from "../common/radio";
import EditIcon from "../icons/EditIcon";
import { Divider } from "antd";
import AddCircleIcon from "../icons/AddCircleIcon";
import { useNavigate } from "react-router-dom";

const RecieverInfoSheet: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
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
                  Thông tin nhận hàng
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
            form={form}
            className="flex flex-1 flex-col gap-[8px] overflow-auto px-[16px] pt-[8px] font-manrope"
            initialValues={initivalValues}
          >
            <Divider className="m-0" />
            <Form.Item name="reciever" noStyle>
              <RecieverList />
            </Form.Item>
            <Divider className="m-0" />
            {/* Add address */}
            <div
              className="flex items-center justify-center gap-[8px]"
              onClick={() => {
                navigate("/add-address");
              }}
            >
              <div className="text-base font-medium text-green6">
                Thêm địa chỉ mới
              </div>
              <AddCircleIcon className="size-[16px] text-green6" />
            </div>
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
              onClick={form.submit}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

const RecieverList: FC<{
  value?: string;
  onChange?: (e: any) => void;
}> = (props) => {
  return (
    <Radio.Group
      items={recievers}
      render={(item) => (
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="text-sm font-medium">
              {item?.name} <span className="text-gray6">({item?.phone})</span>
            </div>
            <div className="text-xs font-normal text-gray7">
              {item?.address}
            </div>
          </div>
          <EditIcon className="size-[20px] text-green6" />
        </div>
      )}
      className="w-full"
      divider={<Divider className="m-[12px]" />}
      {...props}
    />
  );
};

export { RecieverInfoSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const recievers = [
  {
    name: "Mỹ Linh",
    phone: "03849356",
    address: "Quận 4, Thành phố Hồ Chí Minh",
    value: "1",
  },
  {
    name: "Hà Linh",
    phone: "03849356",
    address: "Quận 4, Thành phố Hồ Chí Minh",
    value: "2",
  },
  {
    name: "Cao Như",
    phone: "03849356",
    address: "Quận 4, Thành phố Hồ Chí Minh",
    value: "3",
  },
];
