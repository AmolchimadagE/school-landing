import React from 'react'

function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">SmartLearn School</a>
    
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Faculty
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">science</a></li>
            <li><a className="dropdown-item" href="/"> Math</a></li>
            <li><hr className="dropdown-divider" href="/"/>C++</li>
            <li><a className="dropdown-item" href="/">java</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Gallery</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div>
<div class="card" hight="300">
  <img src="https://www.richmont.edu/wp-content/uploads/2021/02/AdobeStock_267118750.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Academics</h5>
    <p class="card-text">Information about the curriculum offered (e.g., primary, secondary, senior secondary).
    Details of various subjects taught at different levels.
    Information about teaching methodologies and educational resources.
.</p>
    <a href="#" class="btn btn-primary">Go Academics </a>
  </div>
</div>
</div>
          
        

</>
  )
}

export default Navbar
