import './index.css'

import empty from '@/src/assets/svg/empty.svg'
const Empty = ({ description = '暂无数据' }: { description?: string }) => (
    <div id="empty">
        <img src={empty} alt={description} />
        <span>{description}</span>
    </div>
)

export default Empty
