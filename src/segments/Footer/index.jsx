import { Link } from "react-scroll";
import DataWaveLogo from "../../components/DataWaveLogo";
import Socials from "../../components/Socials";
import { contactInfo, footer } from "../../data";
import "./Footer.css"
function Footer() {
    return ( 
        <footer>
            <div className="container">
                <section className="newsletter">
                    <h2>NEWLETTER</h2>
                    <p> Keep up with our latest news and events. Subscribe to our newsletter
                    Footer Description: Innovating IT solutions for business transformation.</p>
                    <div className="subscribe">
                        <input type="email" placeholder="Enter your email address" />
                        <button type="button">Join</button>
                    </div>
                </section>
                <section className="box-wrapper">
                    <div className="box">
                        <DataWaveLogo/>
                    <p>Innovation IT solutions for business transformation</p>
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