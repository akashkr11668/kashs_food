import { Container, Section } from 'components/common/CommonStyle'
import { ChefData, ChefName, ChefsContainer, SectionTitle } from './ChefStyle'
import { ChefsData } from './ChefsData'

export default function Chefs () {
  return (
    <Section id='Chefs'>
      <Container>
        <SectionTitle>Meet Our Chefs</SectionTitle>
        <ChefsContainer>
          {ChefsData.map(data => {
            return (
              <ChefData key={data.id}>
                <img src={data.image} alt='chef' />
                <ChefName>{data.name}</ChefName>
              </ChefData>
            )
          })}
        </ChefsContainer>
      </Container>
    </Section>
  )
}
