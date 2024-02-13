import { useDispatch, useSelector } from 'react-redux'
import { searchSuggestionApi } from '../Constants/Constant'
import { useState, useEffect } from 'react'
import { cacheResult } from './searchSlice'
const useGetSearchSuggest = (value) => {
  const [data, setData] = useState([])
  const searchResult = useSelector(store=>store.search)

  const dispatch = useDispatch();
  const fetching = async () => {
    if (searchResult[value]) {
      setData(searchResult[value]);
    }
    else {
      try {
        const res = await fetch(searchSuggestionApi + value);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const jsonData = await res.json();
        setData(jsonData[1]);
        console.log(jsonData[0])
        dispatch(cacheResult({
          [value]:jsonData[1],
        }))
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };


  useEffect(() => {

    const timer = setTimeout(() => fetching(), 100);
    // this is called debouncing
    return () => {
      clearTimeout(timer)
    }
  }, [value])
  return data
}

export default useGetSearchSuggest