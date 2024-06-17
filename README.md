# Weather App

This project was originally developed as part of my coursework and has been cloned to this personal repository for further development and showcasing. The objective of this project is to create a weather application that provides real-time weather conditions for any searched city, with additional features for logged-in users.

## About the Website

**Weather App** allows users to search for a city and get real-time weather information including temperature, feels like temperature, wind speed, humidity, and an icon representing the current weather condition. Users have the ability toggle between Celsius and Kelvin for the temperature display. Additionally, Registered users can log in to access a personalized "My Clocks" menu where they can save their favorite cities. However, please note that the login and registration functionalities currently use a mock API and are not connected to a personal database yet.

## Features

- Real-time weather search by city name
- Displays temperature, feels like temperature, wind speed, humidity, and weather icon
- Toggle between Celsius and Kelvin for temperature
- User registration and login (mock API)
- Save favorite cities in "My Clocks" (for logged-in users)
- Local storage for saving guest preferences (login status, temperature unit, current searched city)

## Technologies Used

- React with Vite
- Tailwind CSS
- TypeScript
- HTML
- CSS
- JavaScript

## Update History

| Date          | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| 09 Jan 2024   | Project initiation                                                          |
| 11 Jan 2024   | Initial design and implementation of weather search functionality, user login, and registration (mock API) |
| 12 Jan 2024   | Added "My Clocks" feature for logged-in users and updated styling           |
| 13 Jan 2024   | Added temperature toggle between Celsius and Kelvin                         |
| 17 Jun 2024   | Project copied to personal repository                                       |

## Future Enhancements

- [ ] Connect login and registration to a personal database
- [ ] Fix "My Clocks" menu
- [ ] Improve UI/UX design
- [ ] Implement error handling for API requests
- [ ] Add more detailed weather information

## How to Run

1. Clone the repository:
    ```bash
    git clone https://github.com/arisarae/weather_app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather_app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and go to `http://localhost:3000`

## Contributing

Feel free to fork this repository and make pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Contact

Created by [Arisa Rae](https://www.linkedin.com/in/arisa-raezzura/) - feel free to contact me!
