import { searchSuggestionApi } from '../Constants/Constant'
import { useState, useEffect } from 'react'
const useGetSearchSuggest = (value) => {
    const [data, setData] = useState([])
    const fetching = async () => {
        try {
          const res = await fetch(searchSuggestionApi + value);
            if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
            const jsonData = await res.json();
            console.log(jsonData[0]);
            setData(jsonData);
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
      
  
  useEffect(() => {
const timer = setTimeout(() =>fetching(), 200);
// this is called debouncing
return ()=>{
    clearTimeout(timer)
}
  }, [value])
  return data
}

export default useGetSearchSuggest