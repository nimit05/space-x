import { useState , useEffect } from 'react';
import './App.css';
import Container from './Container'
import Filters from './Filters'

function App() {
  const [data, setdata] = useState([])
  const [land, setland] = useState(null)
  const [year, setyear] = useState(null)
  const [launch, setlaunch] = useState(null)
  const [load, setload] = useState(true)

  const han_launch = (x) => {
    setlaunch(x)
  }

  const hanY = (x) => {
    setyear(x)
  }

  const han_land = (x) => {
    setland(x)
  }

  const year_fil = () => {
    setload(true)
    let str = `https://api.spacexdata.com/v3/launches?limit=100`
    if(year){
      str = str + `&launch_year=${year}`
    }
    if(launch){
      str = str + `&launch_success=${launch}`
    }
    if(land){
      str = str + `&land_success=${land}`
    }
    
    fetch(str)
    .then(res => res.json())
    .then(data => setdata(data))
    setload(false)
    }
    

  useEffect(() => {
    year_fil()
  }, [year,launch,land])
  return (
    <div className="App">
        <div className = "heading">
          SpaceX Launch Programs
        </div>
        <div className = "lower_body">
          <div className = "filter">
            <Filters 
            hanY = {hanY}
            han_launch = {han_launch}
            han_land = {han_land}
             />
          </div>
          <div className = "container">
            {data?.map(e => (
              <Container info = {e} />
            ))} 
          </div>
        </div>
        <div className = "developed_by">
          <span className = "dark">Developed by: </span>
              Nimit
        </div>
    </div>
  );
}

export default App;
