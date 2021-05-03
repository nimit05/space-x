import React from 'react';
import './Container.css'
function Container({info}) {
    return (
        <div className = "Container">
            <div className = "cont_an">
                <img src = {info.links.mission_patch} alt = "" />

                <div className = "name">{info.mission_name} #{info.flight_number} </div>
                <div className = "mission_id dark">Mission Id :</div>
                    {info.mission_id?.map(e => (
                        <li>{e}</li>
                    ))}
                    
                
                <div className = "launch_yr">
                    <span className = "dark">Launch Year : </span>
                    {info.launch_year}
                </div>
                <div className = "succ_launch">
                    <span className = "dark">Succesfull Launch : </span>
                    {info.launch_success ? 'true' : 'false'}
                </div>
                <div className = "succ_launch">
                    <span className = "dark">Succesfull Landing : </span>
                    {info.rocket.first_stage.cores[0].land_success ? 'true' : 'false'}
                </div>
            </div>
            
        </div>
    );
}

export default Container;