import { Container, CtaBtn, Section } from 'components/common/CommonStyle'
import React from 'react'
import {
  MenuCard,
  MenuContainer,
  MenuCta,
  MenuDescription,
  MenuName,
  MenuPrice,
  MenuTitle
} from './MenuStyle'
import { AiTwotoneStar } from 'react-icons/ai'
import { MenuData } from './MenuData'

export default function Menu () {
  return (
    <Section id='Menu'>
      <Container>
        <MenuTitle>Popular Dishes</MenuTitle>
        <MenuContainer>
          {MenuData.map(data => {
            return (
              <MenuCard key={data.id}>
                <img src={data.image} alt='dish' />
                <MenuName>{data.title}</MenuName>
                <div>
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <MenuDescription>{data.desc}</MenuDescription>
                <MenuCta>
                  <MenuPrice>{data.price}</MenuPrice>
                  <CtaBtn>Add to Cart</CtaBtn>
                </MenuCta>
              </MenuCard>
            )
          })}
        </MenuContainer>
      </Container>
    </Section>
  )
}
