/* Global Variables */
let baseURL = "api.openweathermap.org/data/2.5/weather?zip="
let appId="&appid=62db48c28406207c7acb8653397b5994"
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click', onGenerateBtnClick);

function onGenerateBtnClick(e){
  let zipCode = document.getElementById('zip').value;
  if(!zipCode){
    console.log("value= "+zipCode); //empty
    document.getElementById('zipLabel').innerText = "Please Enter a zip code here ↓";
    document.getElementById('zipLabel').style.color = "red";
    document.getElementById('zipLabel').style.backgroundColor ="white";
  }else {
    getWeatherData(baseURL,zipCode,appId)
    .then(data=>postData('/', {
      temp: data.main.temp,
      date: newDate,
      feelings: feelings.value,

    })
  ).then(()=>updateViews());
}
}


const getWeatherData = async(url, zip_code, api_key)=>{
  // const res = await fetch(url + zip_code + api_key);
  // const res = await fetch('/fakeWeatherData')
  try {
    const data = await res.json();
    console.log(data)
    // 1. We can do something with our returned data here-- like chain promises!
  } catch(error) {
    console.log("error: ", error);
  }
}


const updateViews = async()=>{
  const res = await fetch('/all');
  try {
    //TODO: set the style back to default
    res.json();
  } catch (error) {
    console.log("error: ", error);
  }
}
