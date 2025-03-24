import "./Services.css"
import {services} from "../../data";
import {cssPerfectShape,convertHexToRgba} from "../../util/index"
import { Link } from "react-scroll";
import { FaArrowRightLong } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


function Services() {

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
        .fromTo(["#services .section-header h3" , " #services .section-header h2","#services .spotlight"],{y:50, opacity:0},{y:0 , opacity:1 , stagger:0.5})
        .fromTo("#services .services  .service",{y:50, opacity:0},{y:0 , opacity:1 , stagger:0.5})
        



    },{scope:container});

    return ( 
        <section id="services" ref={container}>
        <div className="spotlight"></div>
        <div className="container">
            <div className="section-header">
                <h3>Nos services</h3>
                <h2>Accompagner votre entreprise avec des solutions informatiques </h2>

            </div>
            <div className="services">
                {
                    services.map((service,index)=>{
                        return <div className="blur service" key={index} style={{background : convertHexToRgba('--bg-secondary',0.8) }}>
                            <div className="icon" style={{...cssPerfectShape(70,70),background : convertHexToRgba('--primary',0.1) }}>
                                <service.icon/>
                            </div>
                            <div className="middle">
                                <h4>{service.title}</h4>
                                <p className="line-clamp-3 description">
                                    {service.description}
                                </p>
                            </div>
                            <div className="bottom">
                                <Link to="contact" className="btn primary">Explore <FaArrowRightLong/></Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        </section>
     );
}

export default Services;