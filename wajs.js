function getWeather() {
	// body...
	const apiKey = 'dc90f0ded9d705e7e4bfc363ef6f547f';
	const location = document.getElementById('locationInput').value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

	fetch(url)
	.then(response => response.json())
	.then(data =>{
		const weatherDisplay = document.getElementById('weatherDisplay');
		weatherDisplay.innerHTML = `

		<h2>${data.name},${data.sys.country}</h2>
		<p>Temperature: ${data.main.temp}</p>
		<p>Humidity: ${data.main.humidity}°C</p>
		<p>Id: ${data.weather[0].id}</p>
		<p>main: ${data.weather[0].main}</p>
		<p>description: ${data.weather[0].description}</p>
		`;
	})

	.catch(error => consloe.log('Error:',error));
}function getWeather() {
    const apiKey = 'dc90f0ded9d705e7e4bfc363ef6f547f';
    const location = document.getElementById('locationInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weatherDisplay = document.getElementById('weatherDisplay');
        weatherDisplay.innerHTML = `
        <h2>${data.name},${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}</p>
        <p>Humidity: ${data.main.humidity}°C</p>
        <p>Id: ${data.weather[0].id}</p>
        <p>main: ${data.weather[0].main}</p>
        <p>description: ${data.weather[0].description}</p>
        `;

        // Update the message content with weather details
        document.getElementById('message').value = `
        Weather Forecast for ${data.name}, ${data.sys.country}:
        Temperature: ${data.main.temp}°C
        Humidity: ${data.main.humidity}%
        Condition: ${data.weather[0].description}
        `;
    })
    .catch(error => console.log('Error:', error));
}
