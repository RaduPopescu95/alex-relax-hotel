import { Link } from 'react-router-dom'
import React from 'react'
import BGImg from "../../../assets/img/slider/bg_sections_2.png";
import Hotel1 from "../../../assets/img/icon/fe-icon01.png"
import Hotel2 from "../../../assets/img/icon/fe-icon04.png"
import Hotel3 from "../../../assets/img/icon/fe-icon05.png"
import Hotel4 from "../../../assets/img/icon/fe-icon06.png"
import Hotel5 from "../../../assets/img/icon/fe-icon07.png"
import Hotel6 from "../../../assets/img/icon/fe-icon08.png"
import Hotel from "../../../assets/img/bg/an-img-01.png"

import BGTest from "../../../assets/img/bg/testimonial-bg.png";

import Slider from "react-slick"

import avatar1 from "../../../assets/img/testimonial/testi_avatar.png"
import avatar2 from "../../../assets/img/testimonial/testi_avatar_02.png" 
import avatar3 from "../../../assets/img/testimonial/testi_avatar_03.png"
import Aicon from "../../../assets/img/testimonial/qt-icon.png"
import Aicon1 from "../../../assets/img/testimonial/review-icon.png"


const Main = () => {

    const testimonial = {
        initialIndex: 2,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
  return (
    <>
        <main>
            <section className="breadcrumb-area d-flex align-items-center" style={{ background : `url(${BGImg})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>Servicii</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Acasa</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Servicii</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service-details2" className="pt-120 pb-90 p-relative" style={{background: "#f7f5f1"}}>
                <div className="animations-01"><img src={Hotel} alt="an-img-01"/></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center">
                                {/* <h5>Explorează</h5> */}
                                <h2>
                                Explorează
                                </h2>
                                <p className="justify-text">Hotelul nostru oferă servicii de lux cu un nivel extraordinar de atenție la detalii și rafinament. Cu o echipă dedicată și ospitalitate remarcabilă, ne asigurăm că fiecare oaspete se simte tratat cu cea mai mare grijă și respect. De la momentul sosirii, veți fi întâmpinați cu un serviciu impecabil și personalizat, într-o atmosferă elegantă și sofisticată.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                       <img src={Hotel1} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel1} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        {/* <h3 className="justify-text"><Link to="/service-details">Camere de calitate</Link></h3> */}
                                        <h3 className="justify-text">Camere de calitate</h3>
                                        <p className="justify-text">Camerele noastre de calitate superioară în hotelul nostru sunt concepute cu grijă pentru a vă oferi o experiență deosebită de confort și relaxare. Fiecare cameră este amenajată cu atenție la detalii și dotată cu facilități moderne, pentru a vă asigura că vă simțiți ca acasă și că aveți tot ceea ce aveți nevoie pentru a vă bucura de ședere.</p>
                                        {/* <p className="justify-text">Camerele noastre de calitate superioară în hotelul nostru sunt concepute cu grijă pentru a vă oferi o experiență deosebită de confort și relaxare.</p> */}
                                        {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6">                                  
                                <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src={Hotel2} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                   <img src={Hotel2} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3 className="justify-text">Acces la pârtii de schi</h3>
                                       <p className="justify-text">Situat într-o locație privilegiată în apropierea stațiunii de schi, suntem locația ideală pentru iubitorii de sporturi de iarnă. Imediat ce părăsiți hotelul nostru, veți avea posibilitatea de a vă bucura de aventurile pe pârtii. Nu va trebui să parcurgeți distanțe lungi sau să faceți deplasări complicate pentru a ajunge la pârtii.</p>
                                         {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src={Hotel3} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel3} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3 className="justify-text">Cea mai bună cazare</h3>
                                        <p className="justify-text">Bine ați venit la hotelul nostru, una dintre cele mai bune opțiuni de cazare disponibile. Situat într-un cadru pitoresc, hotelul nostru oferă o experiență remarcabilă de ospitalitate și confort. Indiferent dacă sunteți în călătorie de afaceri sau în vacanță, vă veți bucura de facilități de primă clasă și de servicii personalizate.</p>
                                         {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                         <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src={Hotel4} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel4} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3 className="justify-text"> Wellness & Spa</h3>
                                        <p className="justify-text">Cu facilități moderne și tratamente specializate, vă oferim o gamă variată de servicii concepute pentru a vă ajuta să vă relaxați, să vă reîncărcați și să vă răsfățați. Indiferent dacă doriți să vă eliberați de stres, să vă revigorați sau să vă îngrijiți corpul, echipa noastră de experți vă va ghida și vă va oferi cele mai bune soluții adaptate nevoilor dumneavoastră.</p>
                                        {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                   <div className="services-icon2">
                                       <img src={Hotel5} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                   <img src={Hotel5} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3 className="justify-text">Restaurant & Bar</h3>
                                       <p className="justify-text">Restaurantul nostru și barul sunt facilități de lux oferite în cadrul hotelului nostru, concepute pentru a satisface cele mai exigente gusturi culinare și pentru a crea o atmosferă relaxantă și elegantă. Restaurantul nostru deosebit oferă o experiență gastronomică rafinată, unde bucătari talentați pregătesc preparate delicioase din bucătăria internațională și locală. </p>
                                         {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                       <img src={Hotel6} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel6} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3 className="justify-text">Sală de conferințe și evenimente</h3>
                                        <p className="justify-text">Sala noastră de conferințe și evenimente este locația ideală pentru organizarea întâlnirilor de afaceri, conferințelor, seminariilor sau evenimentelor speciale. Cu dotări moderne și o atmosferă elegantă, sala noastră oferă un mediu profesional și confortabil pentru desfășurarea activităților dumneavoastră.</p>
                                         {/* <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            {/* <section className="feature-area2 p-relative fix" style={{background: "#f7f5f1"}}>
                <div className="animations-02"><img src="assets/img/bg/an-img-02.png" alt="contact-bg-an-05"/></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                         <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                           <div className="feature-img">                               
                                <img src="assets/img/features/feature.png" alt="img" className="img"/>              
                            </div>
                        </div>
					    <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="feature-content s-about-content">
                                <div className="feature-title pb-20">                               
                                    <h5>Luxury Hotel & Resort</h5>
                                <h2>
                                 Pearl Of The Adriatic.
                                </h2>                             
                                </div>
                                <p className="justify-text">Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.</p>
                                <p className="justify-text">Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.</p>
                                <div className="slider-btn mt-15">                                          
                                    <Link to="/about" className="btn ss-btn smoth-scroll">Discover More</Link>				
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="booking pt-120 pb-120 p-relative fix">
                <div className="animations-01"><img src="assets/img/bg/an-img-01.png" alt="an-img-01"/></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact-bg02">
                                <div className="section-title center-align">
                                    <h5>make appointment</h5>
                                    <h2>
                                       Book A Room
                                    </h2>
                                </div>                                
                                <form action="mail.php" method="post" className="contact-form mt-30">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="contact-field p-relative c-name mb-20">                                    
                                                <label><i className="fal fa-badge-check"></i> Check In Date</label>
                                                <input type="date" id="chackin" name="date"/>
                                            </div>                               
                                        </div>
                                        <div className="col-lg-6 col-md-6">                               
                                            <div className="contact-field p-relative c-subject mb-20">                                   
                                            <label><i className="fal fa-times-octagon"></i> Check Out Date</label>
                                                <input type="date" id="chackout" name="date"/>
                                            </div>
                                        </div>		
                                        <div className="col-lg-6 col-md-6">                               
                                            <div className="contact-field p-relative c-subject mb-20">                                   
                                                <label><i className="fal fa-users"></i> Adults</label>
                                                <select name="adults" id="adu">
                                                    <option value="sports-massage">Adults</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                        </div>	
                                        <div className="col-lg-6 col-md-6">                               
                                            <div className="contact-field p-relative c-option mb-20">                                   
                                                <label><i className="fal fa-concierge-bell"></i> Room</label>
                                                <select name="room" id="rm">
                                                    <option value="sports-massage">Room</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="slider-btn mt-15">                                          
                                                <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s"><span>Book Table Now</span></button>				
                                            </div>                             
                                        </div>
                                    </div>
                                </form>                            
                            </div>           
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="booking-img">
                                 <img src="assets/img/bg/booking-img.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
              
        </main>
    </>
  )
}

export default Main