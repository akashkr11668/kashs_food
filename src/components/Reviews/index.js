import { Container, Section } from 'components/common/CommonStyle'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {
  CustomerName,
  CustomerReview,
  ReviewCard,
  ReviewContainer,
  ReviewData,
  SectionTitle
} from './ReviewStyle'
import UserOne from 'assets/images/user-1.jpg'
import UserTwo from 'assets/images/user-2.jpg'

export default function Review () {
  return (
    <Section id='Reviews'>
      <Container>
        <SectionTitle>What Our Customer Says ?</SectionTitle>
        <ReviewData>
          <Carousel
            autoPlay={true}
            showArrows={false}
            showIndicatoes={false}
            showThumbs={false}
            infiniteLoop={true}
          >
            <ReviewContainer>
              <ReviewCard>
                <CustomerReview>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </CustomerReview>
                <img src={UserOne} alt='user' />
                <CustomerName>Maria Scott</CustomerName>
              </ReviewCard>
              <ReviewCard>
                <CustomerReview>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </CustomerReview>
                <img src={UserTwo} alt='user' />
                <CustomerName>Maria Scott</CustomerName>
              </ReviewCard>
            </ReviewContainer>
            <ReviewContainer>
              <ReviewCard>
                <CustomerReview>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </CustomerReview>
                <img src={UserOne} alt='user' />
                <CustomerName>Maria Scott</CustomerName>
              </ReviewCard>
              <ReviewCard>
                <CustomerReview>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </CustomerReview>
                <img src={UserTwo} alt='user' />
                <CustomerName>Maria Scott</CustomerName>
              </ReviewCard>
            </ReviewContainer>
          </Carousel>
        </ReviewData>
      </Container>
    </Section>
  )
}
