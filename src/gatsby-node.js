const cheerio = require('cheerio');
const axios = require('axios');

 //const { domainToASCII } = require('url');
const {localStorage} = require("node-localstorage")
async function getContent(url) {
  // Send a GET request to the website
  const response = await axios.get(url);

  // Load the HTML content into cheerio
  const $ = cheerio.load(response.data);

  // Select the elements you want to extract data from
  const title = $('title').text();
  const paragraphs = $('p').map((i, element) => $(element).text()).get();

  // Return the data you extracted
  return {
    title,
    paragraphs
  };
}



const link ='https://www.theguardian.com/world/2022/dec/20/russia-ukraine-war-at-a-glance-what-we-know-on-day-300-of-the-invasion';


getContent(link).then(data => {
  console.log(data);
});
