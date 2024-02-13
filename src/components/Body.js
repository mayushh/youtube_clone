import Sidebar from './Sidebar';
import { useSelector } from 'react-redux'
import MiniSideBur from './MiniSideBur';
import VideoContainer from './VideoContainer';
import { Outlet } from 'react-router-dom';

const Body = ()=>{
    const toggler = useSelector(store=>store.app.isMenuOpen)
    return(
        <>
            <div className='flex pt-20'>
           {(toggler)?<Sidebar/>:<MiniSideBur/>} 
           <Outlet/>
            </div>
        </>
    )
}
export default Body;