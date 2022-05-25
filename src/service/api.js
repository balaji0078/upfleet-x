/**
 * Handles all the API calls with the created axios instance
 */

import { axiosInstance } from "./http";
import _ from "lodash";

class RestAPIService {
  queue = [];
  refreshToken = false; // indicates progress

  api = async (apiRequest, config = {}, axiosConfig = {}, ignoreErrorCode = -1) => {
    return await new Promise(async (resolve, reject) => {
      try {
        const { method = "get", api, body, provider, auth = true } = apiRequest;

        const axios = axiosInstance(auth, provider, ignoreErrorCode);

        let params = [];

        if (body) params.push(body);

        const contentType = _.get(axiosConfig, "headers.Content-type");
        if(!axiosConfig.headers) {
          axiosConfig.headers = {};
        }
        if(contentType) {
          axiosConfig.headers["Content-type"] = contentType;
        } else {
          axiosConfig.headers["Content-type"] = "text/plain;charset=UTF-8";
        }

        params.push(config);

        let axiosArguments = [api, ...params, axiosConfig];

        if(method=="delete") {
          const paramObject = _.assign({}, ...params);
          axiosConfig.data = paramObject;
          axiosArguments = [api, axiosConfig];
        }

        return axios[method](...axiosArguments)
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      } catch (error) {
        reject(error);
      }
    });
  };
}

let service = new RestAPIService();
const api = service.api;

export { api };
