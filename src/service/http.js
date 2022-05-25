import axios from "axios";
import { getApiHost } from "../helpers/urlHelper";
// import { Toast } from "../service/Toast";
// import { AuthToken, tokenValidation, logoutCommon,getRefreshToken } from "./helperFunctions";
// import { getTextByLanguageKey } from "helpers/language";
// import { config } from "config";
// import { MessageModalType } from "service/actionType"
// import { store } from "../helpers";
//
export const axiosInstance = (auth = true, provider,user,ignoreErrorCode = -1) => {
  // create axios instance
  let instance = axios.create({
    baseURL:  `https://officeride-qa.fsmppapps.com/api/Officeride/users/v1/telematics/`,
    timeout: 1200000,
  });


  let skipTokenValidation = ['/API_IBMCI_login', '/logout', '/refreshToken', '/API_IBMCI_resetPassword', '/API_IBMCI_triggerOTP', '/officeride_sso']
  // Add a response interceptor
  instance.interceptors.request.use(async(request) => {

    // request.headers["content-type"] = "text/plain;charset=UTF-8";
    // if (auth) {
    //   // Modify request here
    //   request.headers["Authorization"] = generateToken(body);

    //   if(!skipTokenValidation.includes(request.url)) {
    //      //token validation
    //       let tokenStatus = await tokenValidation()
    //       if(tokenStatus?.expiry) {
    //         logoutCommon()
    //         store.dispatch({ type: MessageModalType.SHOW_INVALID_LOGIN_MODAL});
    //         throw new axios.Cancel('Token expired.');
    //       }
    //       if( tokenStatus?.refresh) { 
    //         setTimeout(() =>{
    //           getRefreshToken()}, 5000)        
    //       }   
    //   }       
    // }
    return request;
  });
  
  // Add a response interceptor
  instance.interceptors.response.use(
   (response) => {
      let data;
      if (
        response.headers["content-type"] === "application/json; charset=utf-8"
      )
        data = response.data.data;
      else data = response.data;

      return {
        data: data ? data : response,
        fullResponse: response,
        status: response.status,
        message: response.data.message,
      };
    },
    (error, test) => {
      // handle 401 response
      let status = error.response ? error.response.status : null;
      let message = error.response ? error.response.data.message : error;
      let errorArray = [];

    //   if (error.response && error.response.data.error) {
    //     let e = error.response.data.error;
    //     errorArray = Object.keys(e).map((key) => e[key]);
    //   }

    //   let toastMessage = "";

    //   if(status==config.invalidTokenHttpCode) {
    //     if(sessionStorage.getItem("role")=='sso'){
    //       var base_url = window.location.origin;
    //       const loginUrl = base_url
    //         logoutCommon()
    //         window.location.href = loginUrl
    //     }
    //     else{ 
    //     store.dispatch({ type: MessageModalType.SHOW_INVALID_LOGIN_MODAL});
    //     return;
    //     }
    //   }

    //   if (error.response === undefined) {
    //     toastMessage = getTextByLanguageKey("errorCode.noResponse");
    //   } else {
    //     let messageOfStatus = getTextByLanguageKey(`errorCode.${status}`);
    //     let commonApiErrorMessage = getTextByLanguageKey("errorCode.unknown");
    //     if(messageOfStatus) {
    //       toastMessage = messageOfStatus;
    //     } else {
    //       toastMessage = commonApiErrorMessage;
    //     }
    //   }

    //   if(message) {
    //       console.log("API Error: ", message);
    //     if(sessionStorage.getItem("role")=='sso' && message=="error in fething data from officeride" || sessionStorage.getItem("role")=='sso' && message=="Something wrong happened"){
    //       var base_url = window.location.origin;
    //       const loginUrl = base_url
    //         logoutCommon()
    //         window.location.href = loginUrl
    //     } 
    //   }

    //   if(toastMessage && status!=config.loginFailureHttpCode && status!=ignoreErrorCode) {
    //     Toast({
    //       type: "error",
    //       message: toastMessage,
    //     });
    //   }

      return Promise.reject({
        status,
        message,
        errorMessage: errorArray.join(". "),
      });
    }
  );

  return instance;
};

