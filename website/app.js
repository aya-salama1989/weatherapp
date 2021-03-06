/* Global Variables */
const appId = '&appid=62db48c28406207c7acb8653397b5994&units=metric'
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='

// Create a new date instance dynamically with JS
let d = new Date();
let newDate =  d.getDate()+'-'+ (d.getMonth()+1)+'-'+d.getFullYear();


document.getElementById('generate').addEventListener('click', onGenerateBtnClick);

function onGenerateBtnClick(e){
  let zipCode = document.getElementById('zip').value;
  if(!zipCode){
    handleEmptyView();
  }else {
    getWeatherData(baseURL, zipCode, appId)
    .then (function(data){
      console.log('from postData: ', data);
      postData('http://localhost:8000/addData', {
            temp: data.main.temp,
            date: newDate,
            feelings: feelings.value,
          });
    })
    .then(() => updateViews());
}
}


const getWeatherData = async(url, zip_code, api_key)=>{
  const res = await fetch(url + zip_code + api_key);
  console.log(url + zip_code + api_key);
  try {
    const data = await res.json();
    console.log('from getWeatherData: ', data);
    return data;
  } catch(error) {
    console.log("error: ", error);
  }
}


const updateViews = async() => {
  const res = await fetch('http://localhost:8000/all');
  try {
    const allData = await res.json();
    console.log("from all/: ", allData);
    document.getElementById('temp').innerHTML = 'Temperature: ' + allData.temp; +'&deg; C'
    document.getElementById('date').innerHTML = 'Date: ' + allData.date;
    document.getElementById('content').innerHTML = 'Fleelings: ' + allData.userResponse;
  } catch (error) {
    console.log("error: ", error);
  }
}

const postData = async (url = '', data = {}) => {
  console.log(data);
  const response = await fetch (url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Access-Controll-Allow-Methods': 'POST, GET',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json()
    console.log(newData)
    return newData
  }catch(error) {
    console.log("error", error);
  }
};


function handleEmptyView(){
    document.getElementById('zipLabel').innerText = "Please Enter a zip code here ???";
    document.getElementById('zipLabel').style.color = "red";
    document.getElementById('zipLabel').style.backgroundColor ="white";
}
