import { Outlet } from "react-router-dom";
import { Header } from '../componets'

import {updateCountries} from '../service/countryList'


import React, { useEffect,useState  } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Footer from '../componets/Common/Footer';


export const CommonLayout = (props) => {

    const[isLoading,setLoading] = useState(false)
    const [dynamicThemeSelection, setDynamicThemeSelection] = useState({})
    const [countryList, setCountryList] = useState([])



    useEffect(() => {
        console.log(props,"props")
        fetchCountries();
         console.log(dynamicThemeSelection,"selection")
     }, []);





    const dynamicSelection = () =>{

        let obj = [{
            website_name : 'bizoo',
            logo : '',
            theme: '#01B5EA',
            phone_number : '+918556478565',
            email:  'demo@email.com',
            address : '',
            titleLogo : 'https://s.yimg.com/rz/p/yahoo_login_en-US_s_f_w_bestfit_login.png'
            },{
                website_name : 'upfleet',
                logo : '',
                theme: 'red',
                phone_number : '+918556781920',
                email:  'demo2@email.com',
                address : '',
                titleLogo : 'https://www.google.com/favicon.ico'
                }, {
                    website_name : 'trio',
                    logo : '',
                    theme: 'brown',
                    phone_number : '+918949922182',
                    email:  'demo3@email.com',
                    address : '',
                    titleLogo : 'https://www.google.com/favicon.ico'
                    }];

        const random = Math.floor(Math.random() * obj.length);
        var setRandom = obj[random]
        console.log('set random', setRandom)
        setDynamicThemeSelection(setRandom)
        document.title = setRandom.website_name
        setFavIcon(setRandom.titleLogo)
        console.log("🚀 ~ file: CommonLayout.js ~ line 51 ~ dynamicSelection ~ random", obj[random],"~~~~",dynamicThemeSelection)


    } 
    function setColor (newColor){
    }         
    function setFavIcon(href="https://www.google.com/favicon.ico") {
        let favicon = document.getElementById("favicon");
        favicon.href = href
    }
    const fetchCountries = ()=>{
        setLoading(true)
        props.updateCountries('').then((res) => {
             console.log(res,"resss")
             setLoading(false)
             dynamicSelection();
             setCountryList(res)

           }).catch((e) => {
               console.log(e,"eeeeeeeeee")
           });
}

    return (
    
        <div className="page-wraper">
            { isLoading ? <>
                <div className="d-flex vh-100 w-100 justify-content-center align-items-center">
                    <div className="spinner-border m-5" role="status">
                </div>           
            </div></>:<>
            <Header data={dynamicThemeSelection}/>
            <div className="container-fluid">
                <Outlet />
            </div>
            <div className='container-fluid footer'>
            <Footer/>
            </div>
     
            </>}        
        </div>
    )
} 

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        updateCountries

      },dispatch);
    }  


export default connect(null,mapDispatchToProps)(CommonLayout);   
