const counterDisplay = document.getElementById("counter");

const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");

// fetch counter from database
async function fetchCounter(getUrl){
    try {
     
      //fetch response
      const response = await fetch(getUrl);

      if (!response.ok) {
        throw new Error("Response status: ", response.status);
      }

      //get json
      const json = await response.json();
      return json.count;

    } catch(error){
        console.error(error);
    }
}

// fetch counter from api and display in counter display
async function updateCounter(){
    // define url
    const getUrl = "https://api.counterapi.dev/v1/halloween/CTL";

    const counter = await fetchCounter(getUrl);
    counterDisplay.innerHTML = counter;
}


async function minusButtonClick(){
    // define url
    const getUrl = "https://api.counterapi.dev/v1/halloween/CTL/up";

    const counter = await fetchCounter(getUrl);
    counterDisplay.innerHTML = counter;
}

async function plusButtonClick(){
    // define url
    const getUrl = "https://api.counterapi.dev/v1/halloween/CTL/down";

    const counter = await fetchCounter(getUrl);
    counterDisplay.innerHTML = counter;
}

minusButton.onClick = minusButtonClick;
plusButton.onClick = plusButtonClick;

// update counter every second
setInterval(updateCounter, 1000);