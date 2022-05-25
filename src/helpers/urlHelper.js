import { config } from "../config";

import _ from "lodash";

export const getApiHost = (host) => {
  const rootUrl = _.get(config, 'environment.rootUrl', '/');
  if (host) {
    return rootUrl + host;
  }
  if (host===false) {
    return "/";
  }
  return rootUrl + _.get(config, 'environment.baseUrlNode', '/');
};

export const getTimezoneOffset = () => {
  return new Date().getTimezoneOffset();
;
};

export const addTimezoneOffset = (query) => {
  query.timezoneOffset = getTimezoneOffset()
};

export const addTimeZoneOffset = (query) => {
  query.timeZoneOffset = getTimezoneOffset()
};

