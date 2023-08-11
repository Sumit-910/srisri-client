import { Link } from 'react-router-dom';
import './help.css';

const Help = () => {
  const helpt = [
    {data: "How can I Opt for Composition? "},
    {data: "How do I file intimation about voluntary payment?"},
    {data: "How can I use the Returns Offline tool?"},
    {data: "How to file an appeal?"},
    {data: "How do I apply for refund?"},
    {data: "How do I register with GST?"},
  ]
  return (
    <>
      <div className="helptopics">
        <h5>Help Topics</h5>
        <ul className='helpul'>
        {
          helpt?.map((item, index)=>(
              
                <li className="eachhelp" key={index} >
                  
                <Link to='/' style={{color: "#c4e86", textDecoration: "none", display:"flex", flexWrap: "wrap"}} >
                <span>{item.data}</span></Link>
                </li>
          ))
        }
        </ul>
      </div>
    </>
  )
}

export default Help
