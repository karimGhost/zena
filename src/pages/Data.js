import React, { useEffect, useState } from 'react';
import cheerio from 'cheerio';
import axios from 'axios';

function MyComponent(props) {
  const [data, setData] = useState(null);
  const {dats} = props;

  const val1 = 'http://localhost:8080/'
const val2 = 'https://cors-anywhere.herokuapp.com/'
  async function getContent(url) {
    // Send a GET request to the website
   
    try {
      // Use the local CORS proxy to make the request
      const corsProxyUrl =  val2;
      const response = await axios.get(corsProxyUrl + url);

      // Load the HTML content into cheerio
      const $ = cheerio.load(response.data);

      // Select the elements you want to extract data from
      const title = $('title').text();
      const paragraphs = $('p').map((i, element) => $(element).text()).get();
      const images = $('img').map((i, element) => $(element).attr('src')).get();
      // Return the data you extracted
      return {
        title,
        paragraphs,
        images
      };
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const link = dats;
    getContent(link).then(data => {
      setData(data);
    });
  }, [dats]);

  if (!data) {
    return <div style={{ fontSize:"3rem", color:"blue"}}>...Loading{dats}</div>;
  }

  console.log(`data ${data.images}`)
  return (
    <div style={{margin: "auto"}}>
      <h1>{data.title}</h1>
      <img className='bigImage'  src={data.images} alt={data.title}/>

      {data.paragraphs.map((paragraph, index) => (
        <p   key={index}>{paragraph}</p>
))}
    </div>
  );
}

export default MyComponent;
