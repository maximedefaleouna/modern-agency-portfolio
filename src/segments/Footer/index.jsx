import { Link } from "react-scroll";
import DataWaveLogo from "../../components/DataWaveLogo";
import Socials from "../../components/Socials";
import { contactInfo, footer } from "../../data";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
import "./Footer.css"
function Footer() {

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
        .fromTo(["footer .newsletter h2","footer .newsletter p","footer .newsletter .subscribe","footer .box-wrapper .box"],{y:50, opacity:0},{y:0 , opacity:1 , stagger:0.5})

    },{scope:container});
    return ( 
        <footer ref={container}>
            <div className="container">
                <section className="newsletter">
                    <h2>NEWSLETTER</h2>
                    <p>Restez informé(e) de nos dernières actualités et événements. Abonnez-vous à notre newsletter.</p>

                    <div className="subscribe">
                        <input type="email" disabled placeholder="Newsletter bloquer pour le moment" />
                        <button type="button">Join</button>
                    </div>
                </section>
                <section className="box-wrapper">
                    <div className="box">
                        <DataWaveLogo/>
                    <p>Solutions informatiques innovantes pour la transformation des entreprises et vos activités</p>
                    <Socials/>
                    </div>
                    {
                        footer.map((list,index)=>(
                            <div className="box" key={index}>
                                <h3 className="title">{list.title}</h3>
                                <div className="routes">
                                    {
                                        list.subRoutes.map((route,index)=>(
                                            <Link to={route.id} key={index}>{route.title}</Link>
                                        ))
                                    }
                                </div>

                            </div>
                        ))
                    }
                    <div className="box">
                        <h3 className="title">Contact Details</h3>
                        {contactInfo.map((info,index)=>(
                            <div className="route" key={index}>
                                <div className="icon">
                                    <info.icon/>
                                </div>
                                <p>{info.value}</p>
                            </div>
                        ))}
                    </div>
                </section>


            </div>
        </footer>
     );
}

export default Footer;