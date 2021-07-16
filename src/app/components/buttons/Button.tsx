import styled from 'styled-components'
import tw from 'twin.macro'

interface ButtonProps {
  theme?: 'filled' | 'outline'
  text: string
}

const Wrapper = styled.button`
  cursor: pointer;
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `}
`

const OutlineButton = styled(Wrapper)`
  background-color: #f77f00;
  :hover {
    border-color: #f77f00;
    color: #f77f00;
  }
  ${tw`
  hover:bg-transparent

`}
`

const FilledButton = styled(Wrapper)`
  border-color: #f77f00;
  color: #f77f00;
  :hover {
    background-color: #f77f00;
  }
  ${tw`
  bg-transparent
  hover:border-transparent
  hover:text-white

`}
`

const Button = (props: ButtonProps) => {
  const { theme, text } = props

  if (theme === 'filled') {
    return <FilledButton>{text}</FilledButton>
  } else {
    return <OutlineButton>{text}</OutlineButton>
  }
}

export default Button
