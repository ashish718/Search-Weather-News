import React, {useState, useEffect} from "react";
import style from "./News.module.css"


function News(){

  const[news, setNews] = useState([]);
  useEffect(()=>{
    fetchNews();
  }, []);

  const fetchNews = async ()=>{
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=3964320510f24894be1755073ca29ecd`);
    const news = await data.json();
    console.log(news);
    setNews(news.articles);
  }

  return(
    <div>
      <h1 className={style.blinking}>Top Headlines</h1>
      {news.map(newsPublished=>(

        <div className={style.newsContent} key={newsPublished.title}>

          <h1> {newsPublished.title}</h1>
          <time>Published By:{newsPublished.source.name} [ {newsPublished.publishedAt} ]</time>
          <img className={style.image} src={newsPublished.urlToImage} alt=""/>
          <summary>{newsPublished.description}</summary>
          <p >{newsPublished.content} Source Url: <a href={newsPublished.url}>Click</a></p>

        </div>
      ))}

    </div>

  )
}




export default News;
