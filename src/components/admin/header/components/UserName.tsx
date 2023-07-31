import { store } from '@/src/redux'
const UserName = () => {
    const name = store.getState().user.name || ''
    return <div className="mx-[8px]">{name}</div>
}
export default UserName
