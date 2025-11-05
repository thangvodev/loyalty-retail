import React from "react";
import { Form } from "../common/form";
import { Radio } from "../common/radio";
import { FilterTab, notificationFilter } from "./filters";
import { NotificationList } from "./notification-list";

const Content = () => {
  const [form] = Form.useForm();

  return (
    <div className="flex flex-1 flex-col gap-[16px] px-[16px]">
      <Form
        form={form}
        initialValues={{ status: notificationFilter.all.value }}
        className="sticky top-0 bg-surface2 pt-[14px]"
      >
        <Form.Item name="status" noStyle>
          <Radio.ButtonGroup
            items={[
              notificationFilter["all"],
              notificationFilter["order"],
              notificationFilter["redeemPoint"],
              notificationFilter["collectPoint"],
            ]}
            render={(item) => (
              <FilterTab
                active={false}
                label={item?.label}
                noread={item?.noread}
              />
            )}
            activeRender={(item) => (
              <FilterTab
                active={true}
                label={item?.label}
                noread={item?.noread}
              />
            )}
            className="relative flex gap-[12px] overflow-auto hide-scrollbar"
            direction="row"
            itemFlex={false}
          />
        </Form.Item>
      </Form>
      <NotificationList />
    </div>
  );
};

export default Content;
