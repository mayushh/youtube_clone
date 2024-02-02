import  { useState, useEffect }  from 'react'

const useViewsRead = (viewCount) => {
    const [views, setViews] = useState(viewCount)
    const viewSetting = ()=>{
        if (viewCount >= 1e9) {
            setViews((viewCount/1e9).toFixed(1) + 'B');
       }
       else if (viewCount >= 1e6) {
          setViews((viewCount/1000000).toFixed(1) + 'M');
       }
       else if (viewCount/1000) {
           setViews((viewCount/1000).toFixed(0) + 'k');
       }
       else{
           setViews(viewCount);
       }
    
    }
    useEffect(() => {
        viewSetting()
    }, [viewCount])
    return views
   
}

export default useViewsRead