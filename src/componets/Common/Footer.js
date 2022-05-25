import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope,faPhone,faLocationDot,faGreaterThan} from '@fortawesome/free-solid-svg-icons'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

// library.add(faUser);

export const Footer = () => {
return (
  <>
    <div className="row">
      <div className="col-lg-4" style={{ paddingLeft: "8rem" }}>
        <h6 className="text-light">REACH US</h6>
        <ul class="list-unstyled">
          <li>
            <a
              class="hover:text-gray-300 hover:underline font-medium flex items-center pb-2 text-sm text-light"
              style={{ textDecoration: "none" }}
            >
              <span>
              <FontAwesomeIcon icon={faPhone} />
              </span>
              <span class="ml-3">+918667675065</span>
            </a>
          </li>
          <li>
            <a
              class="hover:text-gray-300 hover:underline font-medium flex pb-2 text-sm  text-light"
              style={{ textDecoration: "none" }}
            >
              <span>
              <FontAwesomeIcon icon={faEnvelope} />

              </span>
              <span class="ml-3">rsekar035@gmail.com</span>
            </a>
          </li>
          <li>
            <a className="text-light" style={{ textDecoration: "none" }}>
              <div class=" hover:text-gray-300 hover:underline font-medium flex pb-2 text-sm text-light">
                <span>
                <FontAwesomeIcon icon={faLocationDot} />

                </span>
                <span class="ml-3 text-light">
                  <span class="comma">
                    CMRC+393, Melamoongiladi Rd, Melamoongiladi, Tamil Nadu
                    608602, India
                  </span>
                  <span class="comma">Melamoongiladi</span>
                  <span class="comma">Tamil Nadu</span>
                </span>
              </div>
            </a>
          </li>
        </ul>

        {/* <p className="text-light">
              Mon – Fri
        </p>
        <p className="text-light">
              Mon – Fri
        </p>  */}
      </div>
      <div className="col-lg-4" style={{paddingLeft:'3rem'}}>
        <h6 className="text-light">ABOUT</h6>
        <ul class="list-unstyled">
          <li>
            <a
              class="hover:text-gray-300 hover:underline font-medium flex items-center pb-2 text-sm text-light"
              href="/about-us"
              style={{ textDecoration: "none" }}
            >
              <span>
              <FontAwesomeIcon icon={faGreaterThan} style={{height:'1vh',marginBottom:3}} />
            </span>
              <span class="ml-3">About Us</span>
            </a>
          </li>
          <li>
            <a
              class="hover:text-gray-300 hover:underline font-medium flex items-center pb-2 text-sm text-light"
              href="/privacy"
              style={{ textDecoration: "none" }}
            >
              <span>
              <FontAwesomeIcon icon={faGreaterThan} style={{height:'1vh',marginBottom:3}} />
                </span>
              <span class="ml-3">Privacy Policy</span>
            </a>
          </li>
          <li>
            <a
              class="hover:text-gray-300 hover:underline font-medium flex items-center pb-2 text-sm text-light"
              href="/terms"
              style={{ textDecoration: "none" }}
            >
              <span className='text-light'>
              <FontAwesomeIcon icon={faGreaterThan} style={{height:'1vh',marginBottom:3}} />
              </span>
              <span class="ml-3">Terms &amp; Conditions</span>
            </a>
          </li>
        </ul>
        {/* <div class="text-sm font-medium py-1 text-center ">Copyright © 2022 Demo</div> */}
      </div>
    </div>
    <b>
    <hr class="mb-4 text-light line-tag" style={{marginLeft:'5rem',width:'76rem'}}></hr></b>
    <div class="flex flex-wrap items-center md:justify-between justify-center"><div class="w-full"><div class="text-sm font-medium  text-light text-center">Copyright © 2022 Demo</div></div></div>

  </>
);
};
export default Footer;
