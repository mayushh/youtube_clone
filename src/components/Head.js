import { useState } from 'react'
import { useDispatch, } from 'react-redux'
import { toggleMenu, updateSearchVal } from '../utils/appSlice'
import useGetSearchSuggest from '../utils/useGetSearchSuggest'
import img from './img.jpg'
const Head = () => {
    const [focus, setFocus] = useState(false)
    const [searchText, setSearchText] = useState("")
    const Dispatch = useDispatch()
    const toggleHandler = () => {
        Dispatch(toggleMenu());
    }
    const handleOnChange = async (e) => {

        setSearchText(e.target.value)
        Dispatch(updateSearchVal(e.target.value))
    }
    const data = useGetSearchSuggest(searchText)
    const data2 = ["hello","bye ", "kia ", "hi"]
    return (
        <>
            <div className='fixed w-[100vw]  grid grid-flow-col  p-3  z-50 bg-white '>
                <div className='flex head col-span-2'>

                    <div onClick={() => toggleHandler()}><img className=' logo cursor-pointer ' src="https://t3.ftcdn.net/jpg/01/09/45/80/240_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg" alt="menu" /></div>

                    <a href={"/"}> <img className=' logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="menu" /></a>
                </div>
                <div className='m-auto p-auto col-span-7  ml-[50px]' >
                <div className='flex flex-wrap'>
                    <input onChange={(e) => handleOnChange(e)} value={searchText} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} className=' search-box p-2 pl-5 shadow-sm shadow-gray-600 outline-none rounded-l-full border  border-gray-200   ' type="text" placeholder='Search' />
                    <div className=' p-2 shadow-sm shadow-gray-600  rounded-r-full borderborder-gray-400 border border-gray-200 bg-white w-20' ><img className='ml-4  h-7' src={img} /></div>
                </div>
                {(focus && (data.length)) ? <div className='bg-white searchSuggest  absolute py-4 mt-1 border border-gray-300 shadow-md rounded-xl shadow-gray-500'>
                            {data.map((item,i)=>{
                              return  <div className=' py-1 flex hover:bg-slate-100' key={i}> <img className='w-7 h-7 ml-4 mr-4' src={img} alt="img" /> <div className='font-semibold '>{item}</div></div>
                            })}
                </div> :<div></div>
                }
                </div>

                <div className='col-span-1 w-14'>
                    <img className='logo' src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="" />
                </div>
            </div>

        </>
    )
}
export default Head;