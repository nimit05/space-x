import React , {useState} from 'react';
import './Filters.css';
import Year from './Year'

function Filters({hanY , han_land , han_launch}) {
    const [launch, setlaunch] = useState(null)
    const [land, setland] = useState(null)

    const handleLaunch = (w) => {
        
        setlaunch(w)
        han_launch(w)
    }

    const handleLans = (w) => {
        setland(w)
        han_land(w)
    }

    return (
        <div className = "Filters">
            <div className = "filter_head">
                Filters
            </div>
            <div className = "launch_head">
                Launch Year
            </div>
            <hr />
            <div className = "launc_years">
                <Year hanY = {hanY} />
            </div>
           
           <div className = "succ_l_h">
               Succesfull Launch
           </div>
           <hr />
           <div className = "tr_fl">
               <div 
               className = {launch == "true" ? 'y_active' : 'year'} 
               onClick = {() => handleLaunch("true")}
               >
                   True
               </div>
               <div 
               className = {launch == "false" ? 'y_active' : 'year'} 
               onClick = {() => handleLaunch("false")}
               >
                   False
                </div>
           </div>

           <div className = "succ_l_h">
               Succesfull Landing
           </div>
           <hr />
           <div className = "tr_fl">
           <div 
               className = {land == "true" ? 'y_active' : 'year'} 
               onClick = {() => handleLans("true")}
               >
                   True
               </div>
               <div 
               className = {land == "false" ? 'y_active' : 'year'} 
               onClick = {() => handleLans("false")}
               >
                   False
               </div>
           </div>
        </div>
    );
}

export default Filters;