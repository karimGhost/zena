import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import { useEffect, useState, useMemo } from "react"
import '../styles/index.css'
import requests from "../requests";
import axio from '../axios';
import axios from 'axios';
import $, { data, event, getJSON } from "jquery"
import Navbar from "../components/Navbar"
import imgs from "../images/sunrise.jpg"
import img from "../images/sunset.png"
import { cheerio } from "cheerio"
import Data from "./Data"
import { useStaticQuery, graphql } from 'gatsby';
import MyComponent from "./Data"
import PagesData from "../components/PagesData"

//import {LocalStorage} from 'node-localstorage' 





export default  function IndexPage()  {

  
  const [datas, setdata] = useState({})

  const [location, setLocation] = useState('')

  const ur = `http://api.openweathermap.org/data/2.5/weather/?q=${location}&units=imperial&limit=1&appid=536e0c73b73421c0bd19b557f230e2e2`;


 


  // jquery code

  const [isOpen, setIsOpen] = useState(true);




   


 
 
  const [news, setNews] = useState(null);




  const fetchUrl = requests.fetchTrending;

  
  useEffect(() => {
  
    async function fetchData(){

      const request = await axio.get(fetchUrl);
      setNews(request.data.articles)
  

  


 
    }
    fetchData()

}, [fetchUrl]);

 
  // array of news items
 //const [greet, setgreet] = useState('')

const currentHour = new Date().getHours();
const good = '';





  const styled = {
    background: currentHour <= 16 ?  `url(${imgs})` :  `url(${img})`,
backgroundRepeat: 'norepeat',
backgroundPosition: 'center',
backgroundSize: 'cover' 
  }



/*

const [articleContent, setArticleContent] = useState('');

useEffect(() => {
  fetch('')

  .then(response => response.text())
    .then(articleHtml => {
      const cheerio = require('cheerio');
      const $ = cheerio.load(articleHtml);

      // Extract the article content from the HTML
      const content = $('.article-content').html();

      setArticleContent(content);
    });
  
    console.log(articleContent)
}, []);

*/

/*

const [newses, setnewses] = useState(null)
/*
useEffect(() => { 
/* https://newsdata.io/api/1/news?apikey=pub_1478607c45e650670aa315388b84f50b62fba&q=trending */
/* fetch('')
  .then(response => response.json())
  .then(data => {
    // Do something with the data here
  
    setnewses(data.results)
  });

re

}, [newses])

console.log(newses)
*/



const [itemsPerPage] = useState(10); // number of items to display per page
const [currentPage, setCurrentPage] = useState(1); // current page number
const totalPages = Math.ceil(news ?  news.length / itemsPerPage : null); // total number of pages

// Method for handling page changes
const handlePageChange = (page) => {
  setCurrentPage(page);
}

// Get the news items for the current page
const currentNews = news ?  news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : null;



const [local,setlocal] = useState(false)
const [da, setda] = useState("jjkkkkfjf");
const [off, setoff] =  useState(false);

function locale(ne){

setda(ne)
 /* localStorage.setItem('data', JSON.stringify(ne)) */
setoff(true)
//localStorage.setItem('data', JSON.stringify(ne))
setlocal(pre => !pre)
}




const [mydata, setmydata] = useState()



useEffect(() => {

  

  const data = JSON.parse(localStorage.getItem('data'))
 if(data){
  setmydata(data)

 }
}, [local])




const [sport, setSport] = useState()
const [ent,Setent] = useState()


 


  //const compo = <MyComponent  dats ={da} />

const regex = '/^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?$/';



if (mydata && mydata.news){
  console.log(mydata.news.url)
  
  }
  
  if (!news) {
    return <div style={{color: "black", fontSize: "3rem", justifySelf:"center", textAlign: "center", fontWeight: "bold"}}>Loading... Please wait!</div>;
  }
  
  
  const searchLocation = (event) => {
  
    if(event.key === 'Enter' ) {
      axio.get(ur).then((response) => {
        setdata(response.data)
        console.log(response.data)
      })
      setLocation('')
  
    }
  }
  
  
  console.log(datas)

  const isBrowser = typeof window !== "undefined";

  if(isBrowser){

    window.setInterval(rollback, 10000);
    
    function rollback(){
      
      let first =  $("#caro").find("div:first");
      
      let width = first.width();
      
      first.animate({marginLeft: -width}, 6000, function(){
       
        let last = $("#caro").find("div:last");
       
        last.after(first);
       
        first.css({marginLeft: 0})
      })
      
    }
    
  }

  const g = [];
  switch (currentHour) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:

   
    g.push(3)
    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  

 
    break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
 


    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:

    break;
}


if(!news){
  return(
    <div>...Getting ready,Please Be Patient</div>
  )
}






  return (
    <Layout >
      <div className="contents"> <PagesData  off={off} setoff={setoff} da = {da} setda= {setda} /> </div> 
<div></div>
   <main >

 <aside style={styled} className="app">
 <h2>Weather</h2>
  <div className="search">




<input 
value={location}
onChange={event => setLocation(event.target.value)} 
placeholder ='Enter Location'
type="text"
onKeyPress={searchLocation}   />

  </div>

  <div className="weatherContainer">
  <div className="aside">

<div className="location">
  <p className="P">{datas.name}</p>
</div>

<div className="temp">
  {datas.main ? <h1 className="H1">{datas.main.temp.toFixed()}°F </h1> : null}
</div>

<div className="description">
{datas.weather ?  <p className="P">{datas.weather[0].description} </p> : null}
</div>
{datas.name != undefined &&
<div className="bottom">
<div className="feels"> 
{datas.main ? <p className="P bold">{datas.main.feels_like}</p> : null}
<p className="p">Feels like </p>
</div>

<div className="humidity">
{datas.main ? <p className="P bold">{datas.main.humidity}</p> : null}
<p className='P'>Humidity</p>
</div>

<div className="wind">
 {datas.wind ? <p className="P bold">{datas.wind.speed.toFixed()} </p> : null}
  <p className="P wind">wind speed</p>
</div>
</div>
}
  </div>
  </div>
 </aside>

 <Link  to="/">
 <h2 className="H2">Trending </h2>
  <div className="carousel1" id="caro">
 
 {news.map(news => (

<figure>
<div  onClick={() => locale(news.url)} key={news.title} className="bgImage" style={ {  widht: "300px",heigh: "300px",  backgroundImage:  `url(${news.urlToImage})`  }}>
 
 {!news ? "Loading content" : ""}
 <p style={{color:'white', textShadow:'1px 1px black'}}> {news.publishedAt.length > 13 ? news.publishedAt.slice(0, 10) : news.publishedAt }</p>
 <figcaption><p className="bgpic">{  news.title ? news.title.length > 100 ? news.title.slice(0, 150) + '...'  : news.title  : news.title  }...
 Read More</p> </figcaption>



  </div>
  
 </figure>

 ))}

 </div>
 <div className="stock"> Stock </div>
 </Link>




 
     
<div className="more_news">

<h2 className="H23">more_news</h2>
 <div className="pagination">
     {/* Previous button */}
     {currentPage > 1 && <button className="btn1" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>}

{/* Page buttons */}
{[...Array(totalPages).keys()].map(page => (
  <button    className={page + 1 === currentPage ? 'current' : 'btnum'} key={page + 1 }  onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
))}

{/* Next button */}
{currentPage < totalPages && <button className="btn2" onClick={() => handlePageChange(currentPage + 1)}>Next</button>}
</div>




<div className="news_grid">



<div>
      {/* News items */}  
      {currentNews.map(news => (
        <div key={news.urlToImage} className="more_news_tab">
          <img  className="img" src={news.urlToImage} alt={news.publishedAt} />
          <p className="descript">
            <b className="B" style={{ fontSize: '1.8rem' }}>{news.title}</b>
            <br />
            {  news.description.replace(/https|sssp?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}(\/[^\s]*)?/g, '')}
  <Link   to="/"> <button  className="readmore"  onClick={() => locale(news.url) }>...Read More</button></Link>


             
          
           
      
 

          </p>
        </div>
      ))}
    </div>

</div>

<div className="pagination">
     {/* Previous button */}
     {currentPage > 1 && <button className="btn1" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>}

{/* Page buttons */}
{[...Array(totalPages).keys()].map(page => (
  <button    className={page + 1 === currentPage ? 'current' : 'btnum'} key={page + 1 }  onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
))}

{/* Next button */}
{currentPage < totalPages && <button className="btn2" onClick={() => handlePageChange(currentPage + 1)}>Next</button>}
</div>
     
</div>

   </main>
   </Layout>


  )
}


export const Head = () => <title>Home Page</title>


/*

background-size:cover;
    background-repeat: no-repeat;
    background-position: center;


*/