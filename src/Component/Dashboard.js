import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {FaInstagram,FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Dashboard = () => {
    const [option, setoption] = useState([]);
    const [to, setto] = useState("en");
    const [from, setfrom] = useState("en");
    const [input, setinput] = useState("");
    const [output, setoutput] = useState("");

    const translate = () =>{
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post('https://libretranslate.de/translate',params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res=>{
      console.log(res.data)
      setoutput(res.data.translatedText)
    })
  };

    useEffect(() => {
        axios
          .get('https://libretranslate.de/languages', {
            headers: { accept: 'application/json' },
          })
          .then((res) => {
            console.log(res.data);
            setoption(res.data);
          });
      }, [])

    return (
    <div>
        <div className="container">
        <div className="head" style={{textAlign:"center", margin:"-8% 0 8% 0", fontSize:"3rem"}}>Translate Your Text Here</div>
            <div className="row g-5">
                <div className="col-md-6">
                        <div className="row " >
                                <div className="col" style={{textAlign:"center"}} >From {from + " "} 
                                    <select name="" style={{borderRadius:"8px", textAlign:"center"}} id="" onChange={e=> setfrom(e.target.value) }> 
                                       {option.map(e=> <option key={e.code} value={e.code}>{e.name}</option> )}
                                    </select>
                                </div>
                    <textarea name="from" onInput={(e)=>setinput(e.target.value)} id="" cols={"40"} rows={"5"} style={{width:"100%", borderRadius:"8px"}} ></textarea>
                        </div>
                </div>
                <div className="col-md-6">
                        <div className="row">
                                <div className="col" style={{textAlign:"center"}}> To {to + " "}
                                <select name="" id="" onChange={e=> setto(e.target.value)}> 
                                       {option.map(e=> <option key={e.code} value={e.code}>{e.name}</option> )}
                                    </select>
                                </div>
                    <textarea name="from" value={output} readOnly cols={"40"} rows={"5"} id=""  ></textarea>
                        </div>
                </div>
               
            </div>
            <div className="row">
                <div className="col" style={{textAlign:"center"}}>
                    {/* <button type="submit" onClick={translate()} >Translate</button> */}
                    <input type="button" value="" onClick={translate()} style={{display:"none"}}/>
                </div>
            </div>
            <div className="row">

            <div className="col social-icon" style={{textAlign:"center", margin:"5% 0 0 0%"}}> 
            <a target={'_blank'} href="https://www.linkedin.com/in/amitaggarwal8" style={{textDecoration:"none", color:"white"}}> <FaLinkedin/> </a> &nbsp;
                <a target={'_blank'} href="https://www.instagram.com/theguyinfitch/" style={{textDecoration:"none", color:"white"}}> <FaInstagram/> </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard