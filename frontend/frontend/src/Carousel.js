export function Carousel() {
  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src="" className="d-block w-100" alt="kép1"/>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="" decoding="async" className="d-block w-100" alt="kép2"/>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="" decoding="async" className="d-block w-100" alt="kép3"/>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src="" decoding="async" className="d-block w-100" alt="kép4"/>
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
  );
}

export default Carousel;
