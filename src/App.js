import { useEffect, useState } from 'react';
import './App.css';
import Covidstate from './components/Covidstate';
function App() {
  const [covidata, setcoviddata] = useState([])
  const [covidataAll, setcoviddataall] = useState([])
  const [search, setsearch] = useState([])
  const fetchApiData = () => {
    const url = 'https://api.rootnet.in/covid19-in/stats/latest'
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      setcoviddata(data.data.regional)
      setcoviddataall(data.data.summary)
    })
  }

  let filteredData = covidata.filter(data => {
    return data.loc.toLowerCase().includes(search)
  })
  console.log(filteredData)

  useEffect(() => {
    fetchApiData()
  }, [])
  
  return (
    <div className="d-flex flex-column pd-3">
      <div className="bg-dark text-secondary px-4 py-5 text-center w-100 ">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">INDIA'S Covid-19 Dashboard</h1>
        </div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <div className="card card-header top-disp orange" style={{ "width": "18rem;" }}>
                <div className="card-body card-body-headers">
                  <h2 className="card-title card-head "> Total Confirmed Cases</h2>
                  <h3>{covidataAll.total}</h3>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <div className="card card-header top-disp green" style={{ "width": "18rem;" }}>

                <div className="card-body card-body-headers">
                  <h2 className="card-title card-head">Total Discharged</h2>
                  <h3>{covidataAll.discharged}</h3>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
              <div className="card card-header top-disp red" style={{ "width": "18rem;" }}>

                <div className="card-body card-body-headers ">
                  <h2 className="card-title card-head">Total Deaths</h2>
                  <h3>{covidataAll.deaths}</h3>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='search-sec'>
        <input className="form-control search-sec-in me-2" onChange={(e)=>{setsearch(e.target.value.toLowerCase())}} type="search" placeholder="Search State" aria-label="Search"/>
        </div>
      </div >
      <div className='main-data pt-5'>
        <div className="  d-flex flex-row mb-3 justify-content-center flex-wrap justify-content-lg-around">
          {
           
            filteredData.map((covid) => {
              return (
                // <h2>{covid.loc}</h2>
                <Covidstate
                  title={covid.loc}
                  total={covid.deaths}
                  discharge={covid.discharged}
                  totalconfirmed={covid.totalConfirmed}
                />
              )
            })

          }
        </div>
      </div >
    </div>
  );
}

export default App;
