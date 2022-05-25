import { config } from "../config";
import _ from "lodash";


export const countryApi = {
    getCountryApi: {
      provider:  _.get(config, 'environment.baseUrlNode', '/'),
      api: 'country_list',
      method: 'get',
    }
}
  