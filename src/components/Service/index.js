import { Container, Section, StyledButton } from 'components/common/CommonStyle'
import React from 'react'
import {
  ServiceContainer,
  ServiceDescription,
  ServiceDetails,
  ServiceDetailTitle,
  ServiceTitle
} from './ServiceStyle'
import ServiceChef from 'assets/images/service-chef.png'

export default function Service () {
  return (
    <Section id='Services'>
      <Container>
        <ServiceContainer>
          <img src={ServiceChef} alt='serviceChef' />
          <div>
            <ServiceTitle>We Are More Than Multiple Service</ServiceTitle>
            <ServiceDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </ServiceDescription>
            <ServiceDetails>
              <ServiceDetailTitle>Online Order</ServiceDetailTitle>
              <ServiceDetailTitle>Reservation</ServiceDetailTitle>
              <ServiceDetailTitle>24/7 Service</ServiceDetailTitle>
              <ServiceDetailTitle>Oragnised Foodie Place</ServiceDetailTitle>
              <ServiceDetailTitle>Clean kitchen</ServiceDetailTitle>
              <ServiceDetailTitle>Super Chefs</ServiceDetailTitle>
            </ServiceDetails>
            <StyledButton>About Us</StyledButton>
          </div>
        </ServiceContainer>
      </Container>
    </Section>
  )
}
