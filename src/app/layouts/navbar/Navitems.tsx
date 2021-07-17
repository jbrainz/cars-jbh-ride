import styled, { css } from "styled-components"
import tw from "twin.macro"
import { slide as Menu } from "react-burger-menu"
import { useMediaQuery } from "react-responsive"

import { SCREENS } from "../../components/responsive/responsive"
import { styles } from "./nav-styles"

const ListContainer = styled.ul`
  ${tw`
  flex
  list-none
`}
`
const NavItem = styled.li<{menu?: any}>`
  ${tw`
  text-sm
  md:text-2xl
  font-medium
  mr-1
  md:mr-5
  cursor-pointer
  transition
  duration-300
  ease-in-out
  hover:text-gray-700
`}
  ${({menu}) => menu && css`
  ${tw`
    text-white
    text-xl
    mb-3
    focus:text-white
  `}
  `}
`

const NavItems = () => {
  const isMoble = useMediaQuery({ maxWidth: SCREENS.sm })
  return (
    <>
      {isMoble ? (
        <Menu right styles={styles}>
          <ListContainer>
            <NavItem menu>
              <a href="/">Home</a>
            </NavItem>
            <NavItem menu>
              <a href="/">Tempo</a>
            </NavItem>
            <NavItem menu>
              <a href="/">Tour</a>
            </NavItem>
            <NavItem menu>
              <a href="/">Services</a>
            </NavItem>
            <NavItem menu>
              <a href="/">About Us</a>
            </NavItem>
          </ListContainer>
        </Menu>
      ) : (
        <ListContainer>
          <NavItem>
            <a href="/">Home</a>
          </NavItem>
          <NavItem>
            <a href="/">Tempo</a>
          </NavItem>
          <NavItem>
            <a href="/">Tour</a>
          </NavItem>
          <NavItem>
            <a href="/">Services</a>
          </NavItem>
          <NavItem>
            <a href="/">About Us</a>
          </NavItem>
        </ListContainer>
      )}
    </>
  )
}

export default NavItems
