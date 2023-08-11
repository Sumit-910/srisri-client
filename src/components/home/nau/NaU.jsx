import './nau.css';
import { Link } from 'react-router-dom'

const NaU = () => {
  const newsCards = [
    {
    date: "12/07/2023",
    desc: "Webinar on ‘DRC-01B online functionality for liability mismatch’"
    },
    {
    date: "07/07/2023",
    desc: "Important Update: Geocoding Functionality Now Live for All States and Union Territories"
    },
    {
    date: "29/06/2023",
    desc: "Advisory: Online Compliance Pertaining to Liability / Difference Appearing in R1 – R3B (DRC-01B)"
    },
]
  return (
    <>
      <div className="nau">
        <h5 style={{paddingLeft: "1rem"}} >News | Updates</h5>
        <div className="newsbox">
          {
            newsCards?.map((item,index)=>(
              <div className="newseach" key={index} >
                <div className="newsDate">{item.date}</div>
                <div className="newsdesc">
                  <Link to="/" style={{textDecoration: "none"}} >{item.desc}</Link>
                </div>
              </div>
            ))
          }
        <div className="seeAllNews"><Link>View all</Link></div>
        </div>
      </div>
    </>
  )
}

export default NaU
