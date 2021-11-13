import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-screen"
                    style={{ width: '100%' }}
                    src="https://i.ibb.co/Qd5RTcr/jewellerybg1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-white">Make them fun! Alliteration</h2>
                    <p className="text-white">design without being too literal. Think about it: If all titles were literal</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-screen"
                    style={{ width: '100%' }}
                    src="https://i.ibb.co/w0L9yzD/jewellerybg2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-white">Best Jewellery</h2>
                    <p className=" text-white">Relate it to your design without being too literal</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full ">
                <img
                    className="d-block w-screen h-screen"
                    style={{ width: '100%' }}
                    src="https://i.ibb.co/hXkQWwJ/jewellerybg3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="banner_description align-middle">
                    <h2 className="text-5xl text-white">Rings are the kinds of jewelry</h2>
                    <p className=" text-white">Bracelets are fashion accessories worn as ornaments around the wrist</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;