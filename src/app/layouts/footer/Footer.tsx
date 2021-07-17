import styled from 'styled-components'
import tw from 'twin.macro'
import Logo from '../../components/logo/Logo'

const FooterContainer = styled.div`
  min-height: 20em;
  background-color: #001219;
  ${tw`
    flex
    justify-center
    min-w-full
    pt-9
    md:pt-12
    pb-1
  
  `}
`
const InnerContainer = styled.div`
  ${tw`
    flex
    flex-col
    h-full
    w-full
    max-w-screen-2xl
    flex-wrap
    ml-16
  `}
`
const AboutContainer = styled.div`
  ${tw`
  flex
  flex-col
 
`}
`

const AboutText = styled.p`
  ${tw`
  text-white
  text-xs
  font-normal
  max-w-xs
  mt-3
  leading-5
`}
`

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color='white' />
          <AboutText>
            JBH is India's tempo traveller service provider and one of the best
            rental services u can get
          </AboutText>
        </AboutContainer>
      </InnerContainer>
    </FooterContainer>
  )
}
export default Footer
