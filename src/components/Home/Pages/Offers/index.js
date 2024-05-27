// ScrollingCard.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../../../Assets/Offers/slide1.webp";
import card1 from "../../../../Assets/Offers/Card1.webp";
import image2 from "../../../../Assets/Offers/slide2.webp";
import card2 from "../../../../Assets/Offers/Card2.webp";
import image3 from "../../../../Assets/Offers/slide3.webp";
import card3 from "../../../../Assets/Offers/Card3.webp";
import vector from "../../../../Assets/Offers/vector.webp";

import {
  OffersContainer,
  CardContainer,
  HoverContainer,
  ImageContainer,
  ScrollImage,
  TextOverlay,
  CardImg,
  InnerCard,
  InnerCardHeading,
  InnerCardSubText,
  VectorImage,
} from "./OffersElements";

import { Title } from "../Dining/DiningElements";
import { SubText, TitleContainer } from "../Services/ServiceElements";

const Offers = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      // Add more breakpoints if necessary
    ],
  };

  return (
    <>
      <TitleContainer>
        <Title>Our Offers</Title>
        <SubText>
          Explore our exclusive offers designed to enhance the bond between you
          and your furry companions while providing valuable savings and
          memorable experiences.
        </SubText>
      </TitleContainer>
      <OffersContainer>
        <br />
        <br />
        <Slider {...settings}>
          <div>
            <CardContainer>
              <HoverContainer>
                <ImageContainer>
                  <ScrollImage src={image1} alt="Scrolling Image" />
                  <InnerCard>
                    <InnerCardHeading>Pet Products</InnerCardHeading>
                    <InnerCardSubText>20% INAUGURAL DISCOUNT</InnerCardSubText>
                    <VectorImage src={vector} alt="...loading" />
                  </InnerCard>
                </ImageContainer>
                <TextOverlay>
                  <CardImg src={card1} alt="..loading" />
                </TextOverlay>
              </HoverContainer>
            </CardContainer>
          </div>
          <div>
            <CardContainer>
              <HoverContainer>
                <ImageContainer>
                  <ScrollImage src={image3} alt="Scrolling Image" />
                  <InnerCard>
                    <InnerCardHeading>Pet Grooming</InnerCardHeading>
                    <InnerCardSubText>Starting at ₹849</InnerCardSubText>
                    <VectorImage src={vector} alt="...loading" />
                  </InnerCard>
                </ImageContainer>
                <TextOverlay>
                  <CardImg src={card3} alt="..loading" />
                </TextOverlay>
              </HoverContainer>
            </CardContainer>
          </div>
          <div>
            <CardContainer>
              <HoverContainer>
                <ImageContainer>
                  <ScrollImage src={image2} alt="Scrolling Image" />
                  <InnerCard>
                    <InnerCardHeading>Home Away From Home</InnerCardHeading>
                    <InnerCardSubText>Starting at ₹800</InnerCardSubText>
                    <VectorImage src={vector} alt="...loading" />
                  </InnerCard>
                </ImageContainer>
                <TextOverlay>
                  <CardImg src={card2} alt="..loading" />
                </TextOverlay>
              </HoverContainer>
            </CardContainer>
          </div>
          <div>
            <CardContainer>
              <HoverContainer>
                <ImageContainer>
                  <ScrollImage src={image1} alt="Scrolling Image" />
                  <InnerCard>
                    <InnerCardHeading>Pet Products</InnerCardHeading>
                    <InnerCardSubText>20% INAUGURAL DISCOUNT</InnerCardSubText>
                    <VectorImage src={vector} alt="...loading" />
                  </InnerCard>
                </ImageContainer>
                <TextOverlay>
                  <CardImg src={card1} alt="..loading" />
                </TextOverlay>
              </HoverContainer>
            </CardContainer>
          </div>
          <div>
            <CardContainer>
              <HoverContainer>
                <ImageContainer>
                  <ScrollImage src={image3} alt="Scrolling Image" />
                  <InnerCard>
                    <InnerCardHeading>Pet Grooming</InnerCardHeading>
                    <InnerCardSubText>Starting at ₹849</InnerCardSubText>
                    <VectorImage src={vector} alt="...loading" />
                  </InnerCard>
                </ImageContainer>
                <TextOverlay>
                  <CardImg src={card3} alt="..loading" />
                </TextOverlay>
              </HoverContainer>
            </CardContainer>
          </div>
          <div>
            <CardContainer>
              <HoverContainer>
                <ImageContainer>
                  <ScrollImage src={image2} alt="Scrolling Image" />
                  <InnerCard>
                    <InnerCardHeading>Home Away From Home</InnerCardHeading>
                    <InnerCardSubText>Starting at ₹800</InnerCardSubText>
                    <VectorImage src={vector} alt="...loading" />
                  </InnerCard>
                </ImageContainer>
                <TextOverlay>
                  <CardImg src={card2} alt="..loading" />
                </TextOverlay>
              </HoverContainer>
            </CardContainer>
          </div>
        </Slider>
      </OffersContainer>
    </>
  );
};

export default Offers;
