const axios=require("axios");
 
async function fetchData(url)
{
    try {
        const response=await axios.get(url)
        console.log("The response data is ",response.data);
    } catch (error) {
        console.error(error.message);
    }
}
const apiurl="https://www.example.com";
fetchData(apiurl)