
import {updateCountries} from '../../service/countryList'


import React, { useEffect  } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


export const Home = (props) => {
    useEffect((prevProps, prevState) => {
       // fetchCountries();
     }, []);
 
 
     const fetchCountries = ()=>{
 
 
         props.updateCountries('').then((res) => {
             console.log(res,"resss")
           }).catch((e) => {
               console.log(e,"eeeeeeeeee")
           });
}
    return (
        <div>
            Home Pagess
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        updateCountries

      },dispatch);
    }  


export default connect(null,mapDispatchToProps)(Home);   
