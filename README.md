# 🌦️ WeatherView

A modern weather forecasting dashboard built with **Node.js**, **Express.js**, and **EJS** that provides real-time weather information and 5-day forecasts for cities worldwide.

WeatherView integrates with the OpenWeatherMap API to deliver accurate weather data through a clean, responsive, and user-friendly interface.

---

## 🚀 Features

- 🌤️ Real-time weather information
- 📅 5-day weather forecast
- 📍 Auto-location weather detection
- 🔍 Search weather by city name
- 🕘 Search history tracking
- 🌙 Dark mode support
- 🎨 Modern Glassmorphism UI
- 📱 Fully responsive design
- 🔒 Secure API key management using environment variables

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Frontend
- EJS
- HTML5
- CSS3
- JavaScript

### API
- OpenWeatherMap API

### Packages
- Axios
- Dotenv

---

## 📂 Project Structure

```text
Project_Learning-11--Weather-App/
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/
│   └── index.ejs
│
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/SamniHasnath/Project_Learning-11--Weather-App.git
```

### Navigate to the Project Folder

```bash
cd Project_Learning-11--Weather-App
```

### Install Dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root directory:

```env
API_KEY=your_openweathermap_api_key
```

Get your free API key from:

https://openweathermap.org/api

---

## ▶️ Run the Application

Start the server:

```bash
node index.js
```

Or use:

```bash
npm start
```

(if a start script exists in package.json)

---

## 🌐 Open in Browser

Visit:

```text
http://localhost:3000
```

Check the terminal output for the exact port if different.

---

## 🎮 How It Works

1. Enter a city name.
2. WeatherView sends a request to OpenWeatherMap API.
3. Current weather data is retrieved.
4. A 5-day forecast is generated.
5. Results are displayed in a modern dashboard.
6. Previous searches are stored locally for quick access.

---

## 📚 Learning Outcomes

This project helped me learn:

- API integration using Axios
- REST API consumption
- Environment variable management
- Server-side rendering with EJS
- Express.js routing
- Asynchronous programming with Async/Await
- Error handling with Try-Catch
- Responsive UI design
- Local Storage usage
- Full-stack application development

---

## 🌍 API Concepts Used

### Endpoint Consumption

```http
GET /weather
GET /forecast
```

### Query Parameters

```text
?q=London
&appid=API_KEY
&units=metric
```

### JSON Data Processing

```javascript
response.data.main.temp
response.data.weather[0].description
```

### Async/Await

```javascript
const response = await axios.get(url);
```

### Error Handling

```javascript
try {
  // API request
} catch (error) {
  // Handle failure
}
```

---

## 🎯 Project Goal

The goal of this project is to practice API integration, backend development, asynchronous programming, and dynamic UI rendering while building a real-world weather application.

---

## 👩‍💻 Author

**N. F. Samni Hasnath**

Developed as a learning project to strengthen full-stack web development skills using Node.js, Express.js, EJS, and external REST APIs.

---

## ⭐ License

This project is open-source and available for learning, modification, and personal use.
