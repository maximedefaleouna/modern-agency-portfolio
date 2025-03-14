import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react";
import {portfolio} from "../../data"
import { Autoplay } from "swiper/modules";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Portfolio() {

    const container = useRef(null)
    useGSAP(()=>{
        gsap.timeline({
            delay:0.5,
            scrollTrigger:{
                trigger:container.current,
                start:"20% bottom",
                end:"bottom top",
              
            }
        })
        .fromTo(["#portfolio .section-header h3" , " #portfolio .section-header h2"],{y:50, opacity:0},{y:0 , opacity:1 , stagger:0.5})
        .fromTo("#portfolio .portfolio",{y:50, opacity:0},{y:0 , opacity:1 , stagger:0.5})
        



    },{scope:container});
    return (  
        <section id="portfolio" ref={container}>
            <div className="container">
                <div className="section-header">
                    <h3>Our portofolio</h3>
                    <div className="h2">Showcasing Innovative IT Solutions that Drive Real Results</div>

                </div>
                <Swiper className="portfolio-wrapper"
                    slidesPerView={1}
                    modules={[Autoplay]} 
                    autoplay={true}
                    loop={true}
                    speed={1000}
                    grabCursor={true}
                    spaceBetween={30}
                    breakpoints={{
                    600:{slidesPerView: 2},
                    900:{slidesPerView: 3},
                }}>
                    {
                        portfolio.map((list , index)=>(
                            <SwiperSlide className="portfolio" key={index}>
                                    <div className="image-wrapper">
                                        <img src={list.image} alt="" />
                                    </div>
                                    <div className="content-wrapper">
                                        <h3 className="title">
                                            {list.title}
                                        </h3>
                                        <p className="description">{list.description}</p>
                                    </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
     );
}

export default Portfolio;