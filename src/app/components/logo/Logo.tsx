import styled from 'styled-components'
import tw from 'twin.macro'
import CarLogoImage from '../../../assets/logo/jbh.jpeg'

interface ILogoProps {
  color?: 'white' | 'dark'
}
const LogoContainer = styled.div`
  ${tw`
flex
items-center
`}
`

const LogoText = styled.div`
  ${tw`
  text-xl
  md:text-2xl
  font-bold
  text-black
  m-1
  `}
  ${({ color }: any) => (color === 'white' ? tw`text-white` : tw`text-black`)}
` as any

const Image = styled.div`
  width: auto;
  border-radius: 50%;
  ${tw`
  `}
  height: 4.5rem;
  img {
    width: auto;
    height: 100%;
    border-radius: 50%;
  }
`

const Logo = ({ color }: ILogoProps) => {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImage} alt='jbh' />
      </Image>
      <LogoText color={color || 'dark'}>JBH Global</LogoText>
    </LogoContainer>
  )
}

export default Logo
