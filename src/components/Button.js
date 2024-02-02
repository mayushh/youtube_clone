const Button = ({name})=>{
    
    return(
        <>
            <button className='p-2 rounded-md m-3  bg-gray-100 h-9 font-semibold hover:bg-gray-200 text-sm w-auto'>{name}</button>
        </>
    )
}
export default Button;