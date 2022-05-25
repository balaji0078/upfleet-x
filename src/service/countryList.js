import {countryApi} from '../service/apiVariable'
import { api } from "./api";
import { config } from "../config";


// export const getAllCountries = {
//     method: 'get',
//     provider: 'driver',
//     auth: false,
//     get api() {
//         return `telematics/country_list`;
//     }
// };


export const updateCountries = (requestBody) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      api({ ...countryApi.getCountryApi }, {headers: {"Content-type": "application/json"}})
        .then((res) => {        
          const { status, data } = res;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  