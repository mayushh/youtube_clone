import react from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link } from 'react-router-dom'
const Head = () => {
    const Dispatch = useDispatch()
    const toggleHandler = () => {
        Dispatch(toggleMenu());
    }
    return (
        <div className='  grid grid-flow-col  p-3  z-50 bg-white '>
            <div className='flex head col-span-2'>

                <div  onClick={() => toggleHandler()}><img className=' logo cursor-pointer ' src="https://t3.ftcdn.net/jpg/01/09/45/80/240_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg" alt="menu" /></div>

                <a href={"/"}> <img className=' logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="menu" /></a>
            </div>
            <div className='m-auto p-auto col-span-7  ml-[50px]'>
                <input className=' search-box p-2 pl-5 shadow-sm shadow-gray-600 outline-none rounded-l-full border  border-gray-200   ' type="text" placeholder='Search' />
                <button className=' p-2 shadow-sm shadow-gray-600  rounded-r-full borderborder-gray-400 border border-gray-200 bg-gray-100 w-24' >Search</button>
            </div>

            <div className='col-span-1 w-14'>
                <img className='logo' src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="" />
            </div>
        </div>
    )
}
export default Head;