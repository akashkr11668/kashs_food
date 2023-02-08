import { Container, Section } from 'components/common/CommonStyle'
import {
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterLinks,
  FooterNavLink,
  FooterTitle
} from './FooterStyle'

export default function Footer () {
  return (
    <Section id='Footer'>
      <Container>
        <FooterContainer>
          <FooterContent>
            <FooterTitle>Services</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <FooterNavLink to='/'>Online Order</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>Reservation</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>24/7 Services</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>Foodie Place</FooterNavLink>
              </FooterLink>
              <FooterLink>
                {' '}
                <FooterNavLink to='/'>Super Chefs</FooterNavLink>
              </FooterLink>
            </FooterLinks>
          </FooterContent>
          <FooterContent>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <FooterNavLink to='/'>Menu</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>Reviews</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>Blogs</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>Reserve Table</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>Order Foods</FooterNavLink>
              </FooterLink>
            </FooterLinks>
          </FooterContent>
          <FooterContent>
            <FooterTitle>About</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <FooterNavLink to='/'>Our Story</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>Benefits</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>Career</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>Our Chefs</FooterNavLink>
              </FooterLink>
            </FooterLinks>
          </FooterContent>
          <FooterContent>
            <FooterTitle>Help</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <FooterNavLink to='/'>Contact</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>Support</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>FAQ</FooterNavLink>
              </FooterLink>
              <FooterLink>
                <FooterNavLink to='/'>Foodie Place</FooterNavLink>
              </FooterLink>
            </FooterLinks>
          </FooterContent>
        </FooterContainer>
      </Container>
    </Section>
  )
}
