import VRIMage from "../../assets/vr.png"
import PersonnelImage from "../../assets/cool.png"
import {whyChooseUs, ourApproaches} from  "../../data"
import {convertHexToRgba, cssPerfectShape} from '../../util/index'
import { Link } from "react-scroll";
import './About.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function About() {
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
        .fromTo(["#about .vision-item" , " #about .vision-item .image-container"],{y:50, opacity:0},{y:0 , opacity:1 , stagger:0.5})
        .fromTo(["#about h2"," #about .approach ", "#about .contact-us"],{y:50, opacity:0},{y:0 , opacity:1 , stagger:0.5})
        .fromTo(["#about .spotlight"],{x:50, opacity:0},{x:0 , opacity:1 , stagger:0.5})
        .fromTo(["#about .why-choose-us-container .why-choose-us"],{x:50, opacity:0},{x:0 , opacity:1 , stagger:0.5});




    },{scope:container});


    return (
        <section id="about" ref={container}>
            <div className="container">
                <div className="left-column">
                    <div className="spotlight"></div>

                    <div className="vision-container">

                        <div className="vision-item">
                            <div className="vision-content">
                                <h2>Notre Vision</h2>
                                <h4 className="title">Transformer la technologie pour façonner un avenir meilleur</h4>
                                <p className="description">
                                Notre vision est de permettre aux entreprises d'accéder à des solutions informatiques
                                innovantes et concrètes, favorisant la croissance, l'optimisation des processus et
                                renforçant leur compétitivité
                                </p>
                            </div>
                            <div className="image-container">
                                <img src={VRIMage} alt="" />
                            </div>
                        </div>


                        <div className="vision-item">
                            <div className="spotlight"/>
                            <div className="vision-content">
                                <h2>Qui Nous Sommes</h2>
                                <h4 className="title">Votre Partenaire Technologique de Confiance</h4>
                                <p className="description">
                                    Nous sommes des professionnels de l'informatique expérimentés, offrant des solutions technologiques sur mesure pour répondre aux objectifs uniques de chaque client.
                                </p>

                            </div>
                            <div className="image-container">
                                <img src={PersonnelImage} alt="" />
                            </div>
                        </div>


                    </div>
                    
                   <div className="why-choose-us-container">
                    {whyChooseUs.map((list , index)=>(

                        <div key={index}
                        className="blur why-choose-us"
                        style={{background:convertHexToRgba('--bg-secondary',0.3)}}
                        >
                            <div className="icon">
                                <img src={list.imageIcon} alt="" />
                            </div>
                            <h3 className="title">{list.title}</h3>
                            <p className="description">{list.description}</p>
                        </div>
                    ))}

                   </div>

                </div>
                <div className="right-column">
                    <h2 className="title">Notre Approche</h2>
                    <div className="boxes-wrapper">
                        {
                            ourApproaches.map((approach , index)=>(
                            <div className="approach" key={index}>
                                <div className="icon" style={{...cssPerfectShape(50,50),background :convertHexToRgba("--primary",0.1)}}>
                                    <approach.icon/>
                                </div>
                                <div>
                                    <h3 className="title">{approach.title}</h3>
                                    <p className="description">{approach.description}</p>

                                </div>
                            </div>
                            ))
                        }
                        <div className="contact-us">
                            <h2 className="title">
                                Reach out to see how our IT solutions can boost your success
                            </h2>
                            <Link to="contact" smooth={true} className="btn primary">Nous contacter</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default About;