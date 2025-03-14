import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react";
import {portfolio} from "../../data"
import { Autoplay } from "swiper/modules";

function Portfolio() {
    return (  
        <section id="portfolio">
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