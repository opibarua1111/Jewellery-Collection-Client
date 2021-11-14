import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item className="banner_item w-full" >
                <img
                    className="d-block w-screen h-100"
                    style={{ width: '100%' }}
                    src="https://i.ibb.co/YLjDzkf/bg-Jewellery1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-black">Make them fun! Alliteration</h2>
                    <h5 className="text-black">design without being too literal. Think about it: If all titles were literal</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-100"
                    style={{ width: '100%' }}
                    src="https://i.ibb.co/ySMbJhn/bg-Jewellery2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-black">Best Jewellery</h2>
                    <h5 className=" text-black">Relate it to your design without being too literal</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-100"
                    style={{ width: '100%' }}
                    src="https://i.ibb.co/kqz0Q6b/bg-Jewellery3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="banner_description align-middle">
                    <h2 className="text-5xl text-black">Rings are the kinds of jewelry</h2>
                    <h5 className=" text-black">Bracelets are fashion accessories worn as ornaments around the wrist</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;