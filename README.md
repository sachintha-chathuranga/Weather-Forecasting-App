# Weather Forcasting React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
with open-weather-map Rest API and Open-Meteo Rest API. if you want to run this app on your local envirement, follow the following
instruction.

## Instruction for the run the application

1.clone the repository into your local computer.

2.create .env file in root directory and add the following variable in to it. 

    REACT_APP_API_URL=https://api.openweathermap.org/
    REACT_APP_FORECAST_API_URL=https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max&timeformat=unixtime&timezone=auto&
    REACT_APP_API_KEY="Replace this with your own open-weather-map API key"
    
you can get API key after sign in to [open weather map](https://home.openweathermap.org/users/sign_in) website.

3.run the command `npm install`. this will install all the dependency.

4.run the command `npm start`.
