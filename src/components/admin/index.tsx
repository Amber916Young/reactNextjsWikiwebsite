"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./index.css";
import {LayoutHeader} from "./header";
import LayoutSider from "./sider";
import { RootState } from "@/src/redux/store";
import LayoutFooter from "./footer/index";
const { Content, Sider } = Layout;
interface LayoutsProps {
    children: ReactNode;
  }

export default function Layouts({ children}:LayoutsProps) {
  const isCollapse = useSelector((state:RootState) => state.collapseReducer.isCollapse);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    console.info(isCollapse)
    setCollapsed(isCollapse);
  }, [isCollapse]);

  return (
    <>
      <Layout>
        <LayoutHeader />
        <section className="flex ant-section">
          <Layout>
            <Sider collapsed={collapsed}>
                <LayoutSider />
            </Sider>
            <Content>
            {children}
              {/* <Outlet /> */}
              <LayoutFooter />
            </Content>
          </Layout>
        </section>
      </Layout>
    </>
  );
}

// export default connect((state: any) => state.menu)(Layouts)
