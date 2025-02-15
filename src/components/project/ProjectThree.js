import React from 'react';
import {Link} from 'react-router-dom';

export default class ProjectThree extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".project-three__carousel").length) {
            $(".project-three__carousel").owlCarousel({
              loop: true,
              margin: 10,
              nav: false,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: false,
              autoplayTimeout: 6000,
              navText: [
                '<i className="fa fa-angle-double-left" aria-hidden="true"></i>',
                '<i className="fa fa-angle-double-right" aria-hidden="true"></i>',
              ],
              responsive: {
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                750: {
                  items: 2,
                },
                1100: {
                  items: 3,
                },
                1350: {
                  items: 4,
                },
              },
            });
          }

          if ($(".img-popup").length) {
            var groups = {};
            $(".img-popup").each(function () {
              var id = parseInt($(this).attr("data-group"), 10);
        
              if (!groups[id]) {
                groups[id] = [];
              }
        
              groups[id].push(this);
            });
        
            $.each(groups, function () {
              $(this).magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                  enabled: true,
                },
              });
            });
          }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="project-three">
                    <div className="container-fluid">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>ICONLİFT</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">ÜRÜNLERİMİZ<br /> </h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="project-three__carousel owl-carousel owl-theme">
                                    {/* Start Project Three Single */}
                                    <div className="project-three__single">
                                        <div className="project-three__single-img">
                                            <img src={publicUrl+"assets/images/iconLift/productsPicture/kapı.jpg"} alt="#" 
                                            style={{height:"617.656px"}}
                                            />
                                            <div className="icon-box">
                                                <a className="img-popup" href={publicUrl+"assets/images/iconLift/productsPicture/kapı.jpg"}><span
                                                        className="icon-plus-sign"></span></a>
                                            </div>
                                            <div className="content-box">
                                                {/* <p>KAPILAR</p> */}
                                                <h3><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>KAPILAR</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Project Three Single */}

                                    {/* Start Project Three Single */}
                                    <div className="project-three__single">
                                        <div className="project-three__single-img">
                                            <img src={publicUrl+"assets/images/iconLift/productsPicture/kabin.jpg"} alt="#" />
                                            <div className="icon-box">
                                                <a className="img-popup" href={publicUrl+"assets/images/iconLift/productsPicture/kabin.jpg"}><span
                                                        className="icon-plus-sign"></span></a>
                                            </div>
                                            <div className="content-box">
                                                {/* <p>KABİNLER</p> */}
                                                <h3><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>KABİNLER</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Project Three Single */}

                                    {/* Start Project Three Single */}
                                    <div className="project-three__single">
                                        <div className="project-three__single-img">
                                            <img src={publicUrl+"assets/images/iconLift/productsPicture/kaplama.jpg"} alt="#" />
                                            <div className="icon-box">
                                                <a className="img-popup" href={publicUrl+"assets/images/iconLift/productsPicture/kaplama.jpg"}><span
                                                        className="icon-plus-sign"></span></a>
                                            </div>
                                            <div className="content-box">
                                                {/* <p>Kabin Kaplama</p> */}
                                                <h3><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Kabin Kaplama</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Project Three Single */}

                                    {/* Start Project Three Single */}
                                    <div className="project-three__single">
                                        <div className="project-three__single-img">
                                            <img src={publicUrl+"assets/images/iconLift/productsPicture/halat.jpg"} alt="#"
                                            style={{height:"617.656px"}}
                                            />
                                            <div className="icon-box">
                                                <a className="img-popup" href={publicUrl+"assets/images/iconLift/productsPicture/halat.jpg"}
                                                
                                                >
                                                    <span className="icon-plus-sign"></span>
                                                </a>
                                            </div>
                                            <div className="content-box">
                                                {/* <h3>Halat</h3> */}
                                                <h3><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Halat</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Project Three Single */}
                                </div>
                            </div>

                            <div className="col-xl-12">
                                <div className="project-three-more-project-btn text-center">
                                    <div className="btn-box">
                                        <Link href="/portfolio" className="thm-btn" data-text="TÜM ÜRÜNLER +">TÜM ÜRÜNLER  +</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}