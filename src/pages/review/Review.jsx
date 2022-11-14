import React, { Component } from "react";
import "./Review.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import man1 from "../../assets/man1.png";

export default class Review extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <section id="review">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-12 text-center header-text">
                <h2> Tausende von glücklichen Kunden</h2>
                <p>
                  Und sie mögen 99 Probleme haben, aber der Darm ist keines
                  davon.
                </p>
              </div>
            </div>
            <Slider {...settings}>
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                  <div className="name-box">
                  <h4 className="name">Bernarr D.</h4>
                  <p className="designation">Verifizierter Kunde</p>
                  </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    erstopfung ist wegBin ueber Instagram drauf gestossen und
                    nehme es jetzt seit 2 Monaten und muss sagen, dass es bei
                    mir besser funktioniert als zum Beispiel Dulocolax.
                  </p>
                </div>
              </div> 
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                  <div className="name-box">
                  <h4 className="name">Bernarr D.</h4>
                  <p className="designation">Verifizierter Kunde</p>
                  </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    erstopfung ist wegBin ueber Instagram drauf gestossen und
                    nehme es jetzt seit 2 Monaten und muss sagen, dass es bei
                    mir besser funktioniert als zum Beispiel Dulocolax.
                  </p>
                </div>
              </div> 
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                  <div className="name-box">
                  <h4 className="name">Bernarr D.</h4>
                  <p className="designation">Verifizierter Kunde</p>
                  </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    erstopfung ist wegBin ueber Instagram drauf gestossen und
                    nehme es jetzt seit 2 Monaten und muss sagen, dass es bei
                    mir besser funktioniert als zum Beispiel Dulocolax.
                  </p>
                </div>
              </div> 
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                  <div className="name-box">
                  <h4 className="name">Bernarr D.</h4>
                  <p className="designation">Verifizierter Kunde</p>
                  </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    erstopfung ist wegBin ueber Instagram drauf gestossen und
                    nehme es jetzt seit 2 Monaten und muss sagen, dass es bei
                    mir besser funktioniert als zum Beispiel Dulocolax.
                  </p>
                </div>
              </div> 
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                  <div className="name-box">
                  <h4 className="name">Bernarr D.</h4>
                  <p className="designation">Verifizierter Kunde</p>
                  </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    erstopfung ist wegBin ueber Instagram drauf gestossen und
                    nehme es jetzt seit 2 Monaten und muss sagen, dass es bei
                    mir besser funktioniert als zum Beispiel Dulocolax.
                  </p>
                </div>
              </div> 
              <div className="box">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="img-box">
                      <img src={man1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8">
                  <div className="name-box">
                  <h4 className="name">Bernarr D.</h4>
                  <p className="designation">Verifizierter Kunde</p>
                  </div>
                  </div>
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="text">
                  <p>
                    erstopfung ist wegBin ueber Instagram drauf gestossen und
                    nehme es jetzt seit 2 Monaten und muss sagen, dass es bei
                    mir besser funktioniert als zum Beispiel Dulocolax.
                  </p>
                </div>
              </div> 
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

// const Review = () => {
//   return (
//    <section id="review">
//     <div className="container">

//     </div>
//    </section>
//   )
// };

// export default Review;
