import React, { useContext, useEffect } from "react";
import NewsCard from "./NewsCard";
import NewsContext from "../context/NewsContext";
import { getNews } from "../context/NewsAction";

const CardContainer = () => {
  
  const {allNews , dispatch} = useContext(NewsContext)
  
  const getData = async() => {
    const data = await getNews("Indore")
    dispatch({
      type : "GET_NEWS",
      payload : data
    })
  }


  useEffect(()=>{
    getData()
  },[])


  if(!allNews || allNews.length === 0){
    return(
      <h1>No News Found</h1>
    )
  }  

  return (
    <div className="row g-5 py-5">
        {
          allNews.map((news , index) => <NewsCard key={index} news={news}/>)
        }
    </div>
  );
};

export default CardContainer;
