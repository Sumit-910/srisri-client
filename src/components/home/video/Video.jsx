import './video.css';

const Video = () => {
    return (
        <>
            <div className="video">
                <div className="yt">
                    <img src="//static.gst.gov.in/uiassets/images/icons/youtube_icon.png" alt="Youtube" />
                    &nbsp;GST on&nbsp;
                    <a data-popup="true" data-ng-href="https://www.youtube.com/channel/UCFYpOk92qurlO5t-Z_y-bOQ" href="https://www.youtube.com/channel/UCFYpOk92qurlO5t-Z_y-bOQ">Youtube&nbsp;
                        <i className="fa fa-external-link-square"
                            style={{ fontSize: "14px" }} ></i>
                    </a>
                </div>
                <div className="hdn">
                    Help Desk Number: <br />
                    1800-103-4786
                </div>
                <div className="hdp">
                    Lodge your Grievance using
                    self-service Help Desk Portal
                </div>
            </div>
        </>
    )
}

export default Video
