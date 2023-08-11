import './home.css';

import NaU from '../../components/home/nau/NaU';
import Help from '../../components/home/help/Help';
import Gst from '../../components/home/taxgst/Gst';
import Video from '../../components/home/video/Video';
import Upcomingeve from '../../components/home/upcomingeve/Upcomingeve';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homeImage">
          <img src="https://static.gst.gov.in/uiassets/css/../images/banner/banner_image.jpg" alt="imag" />
        </div>
        <div className="hometop">
        <div className="news">
            <NaU />
        </div>
        <div className="help">
            <Help />
            <Video />
        </div>
        </div>
        <div className="homedown">
            <div className="taxngst">
                <Gst />
            </div>
            <div className="upeve">
              <Upcomingeve />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
