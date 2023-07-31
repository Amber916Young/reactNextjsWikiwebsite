import { Dispatch } from 'react'

import { getMenuList } from '@/src/api/menu/index'
import { Menu, MenuProps } from '@/src/interface'
import * as types from '@/src/redux/constant'

export const updateCollapse = (isCollapse: boolean) => ({
    type: types.UPDATE_COLLAPSE,
    isCollapse
})

export const getMenuListAction = () => async (dispatch: Dispatch<MenuProps>) => {
    const data = await getMenuList()
    dispatch({
        type: types.SET_MENU_LIST,
        menuList: (data as Menu.MenuOptions[]) ?? []
    })
}
