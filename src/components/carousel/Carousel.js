import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import banner from '../../assets/img/banner.jpg';

const CarouselHeader = () => {
    return (
        <React.Fragment>
            <div className="banner-full">
                <Carousel fade>
                    <Carousel.Item className="banner-item" interval={3000}>
                        <Image src={banner} fluid className="banner-image" />
                        <Carousel.Caption>
                            <h3>CÉSAR A. AGUILAR RODRÍGUEZ</h3>
                            <h5>Desarrollador Full-Stack</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="banner-item" interval={3000}>
                        <Image src={banner} fluid className="banner-image" />
                        <Carousel.Caption>
                            <h3>CÉSAR A. AGUILAR RODRÍGUEZ</h3>
                            <h5>Ingeniero en Sistemas Computacionales</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="banner-item" interval={3000}>
                        <Image src={banner} fluid className="banner-image" />
                        <Carousel.Caption>
                            <h3>CÉSAR A. AGUILAR RODRÍGUEZ</h3>
                            <h5>Master en Ciencias de la computación</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </React.Fragment>
    );
}

export default CarouselHeader;