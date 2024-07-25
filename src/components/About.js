import React from 'react'

function About() {
  return (
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="100">
        <img src="https://wallpapercave.com/wp/wp4299470.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="https://wallpaperaccess.com/full/2245147.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://wallpaperaccess.com/full/1379437.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <h1>Empowering Future Leaders Providing quality education to shape young minds for a brighter tomorrow.</h1>
  </div>
  )
}

export default About
