import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {

     const{onSent,recentPrompt,showResult,loading,resultData,setInput,Input}=useContext(Context)


  return (
    <div className='main'>
          <div className="nav">
               <p>GemIQ</p>
               <img src={assets.user_icon2} alt="" />
          </div>

          <div className="main-container">

               {!showResult
               ?<>
                     <div className="greet">
                         <p><span>Hello, Probin</span></p>
                         <p>How can I help you today?</p>
                    </div>
                    <div className="cards">
                         
                         <div className="card">
                              <p>Suggest beautiful resorts for the upcoming Italy trip</p>
                              <img src={assets.compass_icon} alt="" />
                         </div>

                         <div className="card">
                              <p>Summarize the working laws of the Inertia</p>
                              <img src={assets.bulb_icon} alt="" />
                         </div>

                         <div className="card">
                              <p>Suggest latest patterns for the interiors</p>
                              <img src={assets.message_icon} alt="" />
                         </div>

                         <div className="card">
                              <p>Help design a database schema for a business</p>
                              <img src={assets.code_icon} alt="" />
                         </div>
                    </div>
               </>
               : <div className='result'>
                    <div className="result-title">
                         <img src={assets.user_icon2} alt="" />
                         <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                         <img src={assets.gemini_icon} alt="" />
                         {loading
                         ?<div className='loader'>
                              <hr />
                              <hr />
                              <hr />
                         </div>
                         :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                         }
                         
                    </div>
               </div>
          }

              

               <div className="main-bottom">
                    <div className="search-box">
                         <input onChange={(e)=>setInput(e.target.value)} value={Input} type="text" placeholder='Enter a prompt here'/>
                         <div>
                              <img src={assets.gallery_icon} alt="" />
                              <img src={assets.mic_icon} alt="" />
                              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                         </div>
                    </div>
                    <p className="bottom-info">
                         GemIQ may display inaccurate info,including about people , so double check its responses.Your privacy and GemIQ Apps
                    </p>
               </div>

          </div>
    </div>
  )
}

export default Main