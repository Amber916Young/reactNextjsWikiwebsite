import { useDispatch,useSelector } from 'react-redux'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { changeCollapse } from '@/src/redux/modules/menu/collapseSlice'
import { useEffect } from 'react';
import { RootState } from '@/src/redux/store';

export const CollapseIcon = () => {
    const isCollapse = useSelector((state:RootState) => state.collapseReducer.isCollapse);

    const dispatch = useDispatch();
    return (
        <div
            className="collapsed flex items-center"
            onClick={() => {
                dispatch(changeCollapse())
            }}
        >
            {isCollapse ? (
                <MenuUnfoldOutlined id="isCollapse" />
            ) : (
                <MenuFoldOutlined id="isCollapse" />
            )}
        </div>
    )
}
// const mapStateToProps = (state: any) => state.menu
// export default connect(mapStateToProps, { updateCollapse })(CollapseIcon)
