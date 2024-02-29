import React from "react";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import reduxStore from "../../redux";

const Wrapper = ({ children }) => {
  return (
    <ConfigProvider>
      <Provider store={reduxStore}>{children}</Provider>
    </ConfigProvider>
  );
};

export default Wrapper;
