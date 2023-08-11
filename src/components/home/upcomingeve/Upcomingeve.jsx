import './eve.css';

const Upcomingeve = () => {
  const events = [
    {
      event: "GSTR-3B (Jun, 2023)",
      date: "Jul 20th, 2023"
    },
    {
      event: "GSTR-3B (Apr-Jun, 2023)",
      date: "Jul 22nd, 24th, 2023"
    },
    {
      event: "GSTR-1 (Jun, 2023)",
      date: "Jul 11th, 2023"
    },
    {
      event: "GSTR-1 (Apr-Jun, 2023)",
      date: "Jul 13th, 2023"
    },
    {
      event: "IFF (Optional) (Jun,2023",
      date: "NA"
    },
    {
      event: "CMP-08 (Apr-Jun, 2023)",
      date: "Jul 18th, 2023"
    },
  ]
  return (
    <>
      <div className="upevent">
        <h5>Upcoming Due Dates</h5>
        <div className="evetable">
          {
            events?.map((event, index)=>(
              <div className="eacheve" key={index} >
                <div className="evedesc">{event.event}</div>
                <div className="evedate">{event.date}</div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Upcomingeve
