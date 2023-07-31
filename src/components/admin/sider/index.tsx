"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useRouter } from "next/router";
import { usePathname, useRouter } from "next/navigation";

import { Menu } from "antd";
import type { MenuProps } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  MenuOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu as MenuType, menuList } from "@/src/interface";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("数据分析", "group0", <MailOutlined />, [
    getItem("数据监控", "/admin/dashboard/monitor"),
    getItem("数据分析", "/admin/dashboard/analyze"),
  ]),

  getItem("文章管理", "group1", <AppstoreOutlined />, [
    getItem("文章列表", "/admin/article/list"),
    getItem("操作历史", "/admin/article/history"),
    getItem("分类管理", "/admin/article/category"),
    getItem("标签管理", "/admin/article/tags")
  ]),

  { type: "divider" },

  getItem("关于信息", "group6", <SettingOutlined />, [
    getItem("程序信息", "/admin/about"),
  ]),

];

/**
 * 查找当前选中的menu菜单的值
 * @param key
 * @returns
 */
const findOpenKeys = (key: string, menus: any) => {
  const result: string[] = [];
  const findInfo = (arr: any) => {
    arr.forEach((item: any) => {
      if (key.includes(item.key)) {
        result.push(item.key);
        if (item.children) {
          findInfo(item.children); // 使用递归的方式查找当前页面刷新之后的默认选中项
        }
      }
    });
  };
  findInfo(menus);
  return result;
};
const getOpenKeys = (keys: string | undefined): string[] => {
  if (!keys) {
      return []
  }
  const paths = keys.split('/')
  paths.shift()
  const openKeys = paths.map((item, index) => {
      let key = ''
      if (index == 0) {
          key = '/' + item
      } else {
          key = paths[index - 1] + '/' + item
      }
      paths[index] = key
      return key
  })
  return openKeys
}

const findDeepPath = (key: string, menus: any) => {
  const result: any = []; // 处理完所有的menu数据成为一个一维数组
  const findInfo = (arr: any) => {
    arr.forEach((item: any) => {
      const { children, ...info } = item;
      result.push(info);
      if (children) {
        findInfo(children); // 递归处理子节点
      }
    });
  };
  findInfo(menus);
  // 根据当前传递的key值过滤数据，获取到当前用来显示的menu item数据
  const tmpData = result.filter((item: any) => key.includes(item.key));
  if (tmpData.length > 0) {
    return [{ label: "首页", key: "/admin/dashboard" }, ...tmpData];
  }
  return [];
};

const LayoutSider: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const tmpOpenKeys = findOpenKeys(pathname, items);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(tmpOpenKeys);

  const [openKeys, setOpenKeys] = useState(getOpenKeys(pathname))
  const [defSelectKeys] = useState([pathname])


  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    const openkey: string[] = getOpenKeys(latestOpenKey)
    setOpenKeys(openkey)
  };

  const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
    router.push(key);
  };

  useEffect(() => {
    localStorage.setItem("selectedMenuItem", JSON.stringify(selectedKeys));
  }, [selectedKeys]);
  useEffect(() => {
    const storedSelectedKeys = localStorage.getItem("selectedMenuItem");
    if (storedSelectedKeys) {
      setSelectedKeys(JSON.parse(storedSelectedKeys));
    }
  }, []);

  
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={defSelectKeys}
      openKeys={openKeys}
      onClick={clickMenu}
      onOpenChange={onOpenChange}
      items={items}
    />
  );
};

export default LayoutSider;
