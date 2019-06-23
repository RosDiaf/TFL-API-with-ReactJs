import { constants } from './constants';

export const getBikePointData = async () => {
    const results = await fetch(
        'https://api.tfl.gov.uk/BikePoint?app_id=' + 
        constants.APP_ID + 
        '&app_key=' 
        + constants.APP_KEY)
    let response = await results.json();
    let myJson = await response;
    return myJson;
};