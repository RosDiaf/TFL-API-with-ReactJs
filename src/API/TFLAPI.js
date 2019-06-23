const APP_ID = 'a0e43da7';
const APP_KEY = '237aa67a35d205346c515ace5c5578b1';

export const getBikePointData = async () => {
    const results = await fetch('https://api.tfl.gov.uk/BikePoint?app_id=' + APP_ID + '&app_key=' + APP_KEY)
    let response = await results.json();
    let myJson = await response;
    return myJson;
};

/*
https://api.tfl.gov.uk/BikePoint?app_id=a0e43da7&app_key=237aa67a35d205346c515ace5c5578b1

https://api.exchangeratesapi.io/latest

*/