import styled from "styled-components"
import tw from "twin.macro"
import Logo from "../../components/logo/Logo"
import NavItems from "./Navitems"

const NavbarContainer = styled.div`
  min-height: 68px;
  position: fixed;
  z-index: 1;
  ${tw`
  w-full
  max-w-screen-2xl
  flex
  flex-row
  items-center
  lg:pl-12
  lg:pr-12
  justify-between
`}
`

const LogoContainer = styled.div``

const Navbar : React.FC = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems/>
    </NavbarContainer>
  )
}

export default Navbar
