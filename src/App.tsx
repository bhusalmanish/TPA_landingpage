
import './App.css'
import logo from './assets/react.svg'
import loader from './assets/loder.svg'
import insta from './assets/insta.svg'
import facebook from './assets/facebook.svg'
import location from './assets/location.png'





function App() {

  return (
    <>
      <div className="conatiner">
        <img src={logo} height={300} alt="" />
        <img src={loader} alt="" height={80} width={1000} />
        <div className='socialicon'>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100063662704284"> <img src={facebook} height={50} alt="Facebook" /> </a>
          <a target="_blank" href="https://www.instagram.com/thepreciousarts/"> <img src={insta} height={50} alt="Instagram" /></a>
          <a target="_blank" href="https://www.google.com/maps/place/The+Precious+Arts/@27.6783458,85.3111914,15z/data=!4m20!1m13!4m12!1m4!2m2!1d85.303271!2d27.6916658!4e1!1m6!1m2!1s0x39eb19c4e2da4b17:0x745ffb3838beabbb!2sgoogle+map+the+precious+arts!2m2!1d85.3266042!2d27.6726296!3m5!1s0x39eb19c4e2da4b17:0x745ffb3838beabbb!8m2!3d27.6726296!4d85.3266042!16s%2Fg%2F11f8mhbydr?entry=ttu"> <img src={location} height={40} alt="Google Location" /></a>

        </div>
      </div>
    </>
  )
}

export default App
