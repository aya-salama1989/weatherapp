/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let appId='&appid=62db48c28406207c7acb8653397b5994'
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
  //   .then(data => postData('/addData', {
  //     temp: data.main.temp,
  //     date: newDate,
  //     feelings: feelings.value,

  //   })
  // ).then(() => updateViews());
}
}


const getWeatherData = async(url, zip_code, api_key)=>{
  const res = await fetch(url + zip_code + api_key);
  console.log(url + zip_code + api_key);
  try {
    const data = await res.json();
    console.log(data)
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

const postData = async (url = '', data = {})=>{
  console.log(data);
  const response = await fetch (url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    console.log('data logged successfully');
    return;
  }catch(error) {
    console.log("error", error);
  }
};
