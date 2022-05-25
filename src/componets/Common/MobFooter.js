import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope,faPhone,faLocationDot,faCompass, faHouse, faBriefcase, faCircleInfo, faUser} from '@fortawesome/free-solid-svg-icons'


export const MobFooter = () => {


return (<div className='container-fluid footer-mob'>

<div className='d-flex justify-content-evenly '>
<div className="p-2">
    <span className="indicator">
    <FontAwesomeIcon icon={faHouse} style={{textAlign:"center"}}/>
    </span>
    <p>Home</p>
</div>
<div className="p-2">
<span className="indicator">
    <FontAwesomeIcon icon={faCompass} style={{textAlign:"center"}}/>
    </span>
    <p>Explore</p>
</div>

<div className="p-2">
<span className="indicator">
    <FontAwesomeIcon icon={faCircleInfo} style={{textAlign:"center"}}/>
    </span><br/>
    <p>About</p>
</div>
<div className="p-2">
<span className="indicator">
    <FontAwesomeIcon icon={faBriefcase} style={{textAlign:"center"}}/>
    </span><br/>
    <p>Bookings</p>
</div>
<div className="p-2">
<span className="indicator">
    <FontAwesomeIcon icon={faUser} style={{textAlign:"center"}}/>
    </span><br/>
    <p>Profile</p>
</div>  
</div>

</div>   
) 

}