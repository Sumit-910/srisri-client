import { Link } from 'react-router-dom';
import './topbar.css';

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="goods">
          <div className="goodsleft">
            <img src="//static.gst.gov.in/uiassets/images/Emblem_of_India-white.svg" alt="images" />
            <h2>Goods and Services Tax</h2>
          </div>
          <div className="goodsright">
            <Link to='/services/login' className='goodsright' >
            <i style={{ margin: "auto", fontSize: "14px", color: "#fff" }} className="fa fa-sign-in"></i>
            <p style={{ margin: "auto", color: "#fff" }} >&nbsp;Login</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
