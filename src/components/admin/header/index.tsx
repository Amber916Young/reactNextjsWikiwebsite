import { Layout } from "antd";

import Bread from "../bread";

import AvatarIcon from "./components/AvatarIcon";
import {CollapseIcon} from "./components/CollapseIcon";
import FullScreenIcon from "./components/FullScreenIcon";
import GitHub from "./components/GitHub";
import NotifyIcon from "./components/NotifyIcon";
import ThemeIcon from "./components/ThemeIcon";
import UserName from "./components/UserName";

import "./index.css";
import Image from 'next/image';
import logo from '@/src/assets/images/logo.png'


export const LayoutHeader = () => {
  const { Header } = Layout;

  return (
    <Header>
      <div className="header-lf flex items-center">
        <div className="logo flex items-center">
            <Image src={logo} alt="logo" className="logo-img" />
            <h2 className="logo-text">Witch Talk</h2>
        </div>
        <CollapseIcon />
        {/* <Bread /> */}
      </div>
      <div className="header-ri flex items-center">
        {/* <NotifyIcon /> */}
        {/* <ThemeIcon /> */}
        <FullScreenIcon />
        <GitHub />
        <UserName />
        <AvatarIcon />
      </div>
    </Header>
  );
};

