import React from "react";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        text="order details"
        onClick={() => {
          navigate("/orders/1");
        }}
      />
    </div>
  );
};

export default Content;
