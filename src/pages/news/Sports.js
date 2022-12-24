import React from 'react'
import Layout from '../../components/Layout'
import {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import requests from "../../requests";
import axio from '../../axios';
import PagesData from '../../components/PagesData';

export default function Sports() {

  const request =  "https://financialmodelingprep.com/api/v3";

  const [news, setNews] = useState([]);

  const fetchUrl = requests.fetchSport;
    
  
  useEffect(() => {
  
    async function fetchData(){
  
      const request = await axio.get(fetchUrl);
   setNews(request.data.articles)
   console.log(request.data)   
   return request;
  
    }
    fetchData()
  
  }, [fetchUrl]);
  

  // array of news items
  const [itemsPerPage] = useState(10); // number of items to display per page
  const [currentPage, setCurrentPage] = useState(1); // current page number
  const totalPages = Math.ceil(news.length / itemsPerPage); // total number of pages

  // Method for handling page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  // Get the news items for the current page
  const currentNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const [da, setda] = useState('sport')
 
  const [off, setoff] =  useState(false);
  

  function local(ne){

    setda(ne)
     /* localStorage.setItem('data', JSON.stringify(ne)) */
    setoff(true)
    //localStorage.setItem('data', JSON.stringify(ne))
   
    }
    

  return (
    <Layout>
<PagesData off={off} setoff={setoff}  da={da} />

      <div>
      <div className='Buisinesscontent'>
    
    <div className="more_news">
    
    <h2 className="H23">Sports</h2>
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
            <div className="more_news_tab">
              <img className="img" src={news.urlToImage} alt={news.publishedAt} />
              <p className="descript">
                <b className="B" style={{ fontSize: '1.8rem' }}>{news.title}</b>
                <br />
                {news.description}
                <Link to="/news/Sports/"> <button className='readmore' onClick={() => local(news.url)}>...Read More</button></Link>
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
    
    
    </div>
    
    
         </div>
      
      
     
    </Layout>
  )
}
