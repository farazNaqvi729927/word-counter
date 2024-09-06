import React from 'react'
import { useMediaQuery } from 'react-responsive';




export default function Navbar(props) {


  const isOteo = useMediaQuery({ query: '(max-width: 1280px)' });
  const isOffz = useMediaQuery({ query: '(max-width: 1440px)' });
  const isOntz = useMediaQuery({ query: '(min-width: 1920px)' });



  return (
    <>


      <nav className={isOteo ? `navbar navbar-expand-lg bg-${props.Mode} navbar-${props.Mode} m1280` : isOffz ? `navbar navbar-expand-lg bg-${props.Mode} navbar-${props.Mode} m1440` : isOntz ? `navbar navbar-expand-lg bg-${props.Mode} navbar-${props.Mode} m1920` : `navbar navbar-expand-lg bg-${props.Mode} navbar-${props.Mode}`}>





        <div className="container-fluid">

          

          <div className={isOteo ? 't1280' : isOffz ? 't1440' : isOntz ? 't1920' : '' } style={{ color: props.Mode === 'dark' ? 'white' : '#042743' }}>{props.title}</div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>



            <div className={`form-check form-switch mx-3 text-${props.Mode === 'light' ? 'dark' : 'light'}`}>

              <input className="form-check-input" onClick={props.togglemode1} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.Mode === 'light' ? 'Dark' : 'Light'} Mode</label>

            </div>

          </div>

        </div>

      </nav>
    </>
  )
}

