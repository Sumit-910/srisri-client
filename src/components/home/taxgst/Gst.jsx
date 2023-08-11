import { Link } from 'react-router-dom';
import './gst.css';

const Gst = () => {
  return (
    <>
      <div className="gst">
        <div className="gsttop">
          <h5>Taxpayers (Normal/TDS/TCS)</h5>
          <div className="taxbox">
            <Link className="reg" to='/services/newRegister' style={{textDecoration: "none"}} ><i className="fa fa-lock icon" style={{fontSize:"14px"}}></i>&nbsp;&nbsp;Register Now</Link>
            <Link className="gstpract" style={{textDecoration: "none"}} ><i className="fa fa-user icon" style={{fontSize:"14px", color:"2c4e86"}}></i>&nbsp;&nbsp;Find a GST Practitioner</Link>
          </div>
        </div>
        <div className="gstdown">
          <h5>GST Practitioners</h5>
          <div className="gstbox">
          <Link className="gstr" to='/services/newRegister' style={{textDecoration: "none"}} ><i className="fa fa-lock icon" style={{fontSize:"14px"}}></i>&nbsp;&nbsp;Register Now</Link>
          <Link className="gstytax" style={{textDecoration: "none"}} ><i className="fa fa-user icon" style={{fontSize:"14px"}}></i>&nbsp;&nbsp;Find a Taxpayer</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gst
