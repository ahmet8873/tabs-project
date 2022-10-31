import { useEffect, useState } from "react";
import "./App.css";



function App() {
  const[jobs, setJobs] = useState([]);
  const[loading,setLoading]=useState(true)
  const[indexValue,setIndexValue]=useState(0)


  const fetchJobs=async()=>{
    
    const response=await fetch('http://localhost:3001/jobs')
    const allJobs=await response.json()
    setJobs(allJobs)
    setLoading(false)
  }

  useEffect(()=>{
    fetchJobs()
    },[])
 

  if(loading){
    return(
      <h1 className="loading">Loading...</h1>
    )
  }
  
const {duties,title,dates,company}=jobs[indexValue]

  return (
    <section className="container">
      <div className="title-section">
        <h1 className="anabaslik">Experience</h1>
        <div className="underline"></div>
      </div>
      
      <div className="job-center">
         <div className="btn-container">
          {jobs.map((job,index)=>(
            <button className="btns" key={index} onClick={()=>setIndexValue(index)} >{job.company}</button>
          ))}
          
         </div>
       
         <div className="job-info">
          <h3 className="title">{title}</h3>
          <h4 className="company">{company}</h4>
          <p className="date">{dates}</p>
          {duties.map((duty,index)=>(
            <p key={index}>{duty}</p>
          ))}
         </div>
      </div>
    
    </section>
  );
}

export default App;
