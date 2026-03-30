const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;
const API_KEY = "7780d8ef5966136c4f8ece86b4e49754"; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// Helper to format API responses
const processWeatherData = (current, forecast) => {
    return {
        city: current.name,
        country: current.sys.country,
        temp: Math.round(current.main.temp),
        feels_like: Math.round(current.main.feels_like),
        humidity: current.main.humidity,
        description: current.weather[0].description,
        main: current.weather[0].main.toLowerCase(),
        wind: current.wind.speed,
        pressure: current.main.pressure,
        icon: current.weather[0].icon,
        // Get one forecast per day (midday)
        daily: forecast.list.filter(item => item.dt_txt.includes("12:00:00"))
    };
};

app.get("/", (req, res) => {
    res.render("index", { weatherInfo: null, error: null });
});

// Search by City Name
app.post("/weather", async (req, res) => {
    const city = req.body.city?.trim();
    if (!city) return res.render("index", { weatherInfo: null, error: "Please enter a city." });

    try {
        const [curr, fore] = await Promise.all([
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`),
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        ]);
        res.render("index", { weatherInfo: processWeatherData(curr.data, fore.data), error: null });
    } catch (err) {
        res.render("index", { weatherInfo: null, error: "City not found." });
    }
});

// Auto-Detect by Coordinates
app.post("/weather/coords", async (req, res) => {
    const { lat, lon } = req.body;
    try {
        const [curr, fore] = await Promise.all([
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`),
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        ]);
        res.json({ weatherInfo: processWeatherData(curr.data, fore.data) });
    } catch (err) {
        res.status(500).json({ error: "Location error" });
    }
});

app.listen(port, () => console.log(`Server live at http://localhost:${port}`));