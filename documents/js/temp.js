let apiKey = "2ad864b8c66fbf1e48caa02088e78306";
let cityBackgrounds = {
          "Select a city":"url('')",
"Chennai":"url('https://cdn.pixabay.com/photo/2017/03/27/21/38/sunset-2180346_1280.jpg')",
    "Coimbatore": "url('https://cdn.pixabay.com/photo/2022/07/16/07/20/sunset-7324598_1280.jpg')",
    "Bangalore": "url('https://cdn.pixabay.com/photo/2023/11/02/16/47/dawn-8361032_1280.jpg')"
};

if(selectedCity){
document.body.style.backgroundImage = "none";
}
// Function to fetch and display the temperature
function fetchTemperature() {
    let dropdown = document.getElementById("cityDropdown");
    let selectedCity = dropdown.value;
    let display = document.getElementById("temperatureDisplay");

    if (selectedCity) {
        document.body.style.backgroundImage = cityBackgrounds[selectedCity] || "none";
        // Fetch weather data
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}`)
            .then((response) => {
            //     if (!response.ok) {
            //         throw new Error("City not found");
            //     }
                return response.json();
            })
            .then((data) => {
                // Convert temperature from Kelvin to Celsius
                let temperature = Math.round(Number(data.main.temp - 273.15));
                display.textContent = `The temperature in ${selectedCity} is ${temperature}°C`;
                display.classList.remove("error");
            })
            .catch(() => {
                display.textContent = "Unable to fetch temperature. Please check the city name.";
                display.classList.add("error");
            });
    } else {
        display.textContent = ""; // Clear if no city is selected
    }
}
