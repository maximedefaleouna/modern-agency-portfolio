import './Contact.css'
import { contactInfo } from '../../data';
import { cssPerfectShape } from '../../util';
import Socials from '../../components/Socials';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

function Contact() {
    


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
        .fromTo("#contact .contact-info-wrapper .contact-info",{x:-50,opacity:0},{x:0 , opacity:1, stagger:0.5})
        .fromTo("#contact .socials .icon",{x:50, opacity:0},{x:0 , opacity:1 , stagger:0.5})
        .fromTo(["#contact form h2" , "#contact form .description","#contact form .control","#contact form .btn"],{y:50, opacity:0},{y:0 , opacity:1 , stagger:0.5})

    },{scope:container});
    useEffect(()=>{
        console.log("monté")
    },[])

    return ( 
        
        <section id="contact" ref={container}>
            <div className="container">
                <div className='contact-info-wrapper'>
                    {
                        contactInfo.map((info,index)=>(
                            <div className="contact-info" key={index}>
                                <div className="icon" style={{...cssPerfectShape(70,70)}}>
                                    <info.icon/>
                                </div>
                                <div className="info">
                                    <h3>{info.title}</h3>
                                    <p className="description">{info.description}</p>
                                    <h4 className="value">{info.value}</h4>
                                </div>
                            </div>
                        ))
                    }
                    <Socials/>
                </div>
                <form action="https://formspree.io/f/mnnpvryq" method="POST" >
                    <div className="top">
                        <h2>Get In Touch</h2>
                        <p className="description">
                        Vous avez un projet en tête ou besoin de conseils  ? Nous sommes là pour vous accompagner ! Contactez notre
                        équipe pour des consultations personnalisées, des demandes d'informations ou pour démarrer votre prochain grand projet dès aujourd'hui
                        </p>
                    </div>
                    <div className="middle">
                        <input 
                        type="text"
                        name="fullName"
                        spellCheck="false"
                        id="id1" 
                        placeholder='Nom et prenoms'
                        className='control'
                        />
           
                         <input 
                        type="email"
                        name="email"
                        id="id2" 
                        placeholder='adresse mail'
                        className='control'
                        />
                       
                         <input 
                        type="tel"
                        name="phoneNumber"
                        id="id3" 
                        placeholder='Numero de téléphone'
                        className='control'
                        />
                           <textarea name="message"  spellCheck="false" id="" placeholder='votre message' className='control' ></textarea>
                      
                    </div>
                    <div className="bottom">
                        <button type="submit"  className='btn primary'> Envoyer</button>
                    </div>
                </form>
            </div>
        </section>
     );
}

export default Contact;

