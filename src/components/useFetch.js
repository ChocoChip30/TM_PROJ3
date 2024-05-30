import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (item) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(item);

  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises${item}`,
    params: { limit: "10" },
    headers: {
      "X-RapidAPI-Key": "badba3bf6amsh8f869daf346eb9cp104845jsn67031e0b3887",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    // const response = await axios.request(options);
    // setData(response.data);
    // setIsLoading(false);
    // console.log(data)
    // setIsLoading(false);

    try {
      const response = await axios.request(options);
      setData(response.data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // try{
    //
    // }catch(error){
    //     setError(error);
    //     alert('There is an error')
    //     console.log(error)
    // }finally{
    //     setIsLoading(false);
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
  //return data
};

export default useFetch;
