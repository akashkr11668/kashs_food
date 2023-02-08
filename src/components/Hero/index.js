import { Container, Section, StyledButton } from 'components/common/CommonStyle'
import { HeroContainer, HeroDescription, HeroTitle } from './HeroStyle'
import HomeLogo from 'assets/images/Home.jpg'

export default function Hero () {
  return (
    <Section>
      <Container>
        <HeroContainer>
          <img src={HomeLogo} alt='/' />
          <div>
            <HeroTitle>We Serve The Taste You Love</HeroTitle>
            <HeroDescription>
              This is a type of restaurant which typically serves food and
              drinks,in addition to light refreshments such as baked goods or
              snacks.The term comes from the rench word meaning food
            </HeroDescription>
            <StyledButton>Explore Food</StyledButton>
          </div>
        </HeroContainer>
      </Container>
    </Section>
  )
}
