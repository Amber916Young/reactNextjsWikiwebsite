export const NavLinks = [
    { href:'/', key:"Home",text:"home"},
    { href:'/view', key:"Article",text:"article"}
]

export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    CateHomeSection = "category",
    ContactUs = "contactus",
}


export interface ArticleType {
    id: number;
    title: string;
    tagIds: string[];
    description: string;
    categoryId: number;
    viewCount: number;
    diggCount: number;
    commentCount: number;
    collectCount: number;
    articleType: string;
    coverImage: string;
    status: string;
    version: number;
    userId: number;
    createdBy: string;
    createTime: string;
    modifyTime: string;
}
export interface ClassType {
    name: string;
    description?: string;
    image: string;
}
export interface meta {
    title?: string
    auth?: boolean
    keepAlive?: boolean
}

export namespace Menu {
    export interface MenuOptions {
        path: string
        title: string
        icon?: string
        element?: string
        isLink?: string
        close?: boolean
        meta?: meta
        children?: MenuOptions[]
    }
}

export interface MenuProps {
    type: string
    menuList: Menu.MenuOptions[]
}

export namespace LoginApiForm {
    export interface ReqForm {
        username: string
        password: string
    }
    export interface ResLogin {
        token: string
    }
}


export interface ArticleDataItem {
    id: number;
    title: string;
    tagIds: string[];
    description: string;
    categoryId: number;
    viewCount: number;
    diggCount: number;
    commentCount: number;
    collectCount: number;
    articleType: string;
    coverImage: string;
    status: string;
    version: number;
    userId: number;
    createdBy: string;
    createTime: string;
    modifyTime: string;
  }


export interface WikiOperationItem {
    userId: number;
    id: number;
    wikiId: number;
    username: string;
    operationType: string;
    createTime: Date;
}

export interface TagsItem {
    id: number;
    name: string;
    icon: string; // fa 格式
    cateId: number; // further dev
    createTime: Date;
}

export interface CategoryItem {
    id: number;
    name: string;
    pid: number;
    icon: string | null;
    description: string | null;
    children: CategoryItem[];
}



export const menuList = [

    {
        key: 'group0',
        title: {
            icon: 'dashboard',
            text: '数据分析'
        },
        children: [
            {
                key: '1',
                text: '数据监控',
                path: '/dashboard/monitor'
            },
            {
                key: '2',
                text: '数据分析',
                path: '/dashboard/analyze'
            }
        ]
    },

    {
        key: 'group1',
        title: {
            icon: 'dashboard',
            text: '文章管理'
        },
        children: [
            {
                key: '3',
                text: '文章列表',
                path: '/articles/list/index'
            },
            {
                key: '4',
                text: '数据分析',
                path: '/articles/history/index'
            },
            {
                key: '5',
                text: '分类管理',
                path: '/articles/category/index'
            },
            {
                key: '6',
                text: '标签管理',
                path: '/articles/tags/index'
            }
        ]
    },

    {
        key: 'group6',
        title: {
            icon: 'schedule',
            text: '关于信息',
            path: "about/index"
        },
        
    },

]