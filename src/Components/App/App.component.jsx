import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";

const MainContainer = () => {
    
    const { email } = useSelector(state => state.users.user)

    return (
        <div className="app">
          {/* <Outlet /> */}
        </div>
    )
}

export default MainContainer