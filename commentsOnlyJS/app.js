// Personal API Key for OpenWeatherMap API

// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */
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
    const newData = await response.json();
    console.console.log(newDate);
    return newDate;
  }catch(error) {
    console.log("error", error);
  }
};

// postData('/postTest', {movie:' the matrix', score: 5})

/* Function to GET Project Data */
