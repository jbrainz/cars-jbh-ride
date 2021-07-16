import styled from 'styled-components'

export interface IMarginerProps {
  margin: number | string
  direction: 'horizontal' | 'vertical'
}

const Horizontal = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`

const VerticalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`

const Marginer = (props: IMarginerProps) => {
  const { direction } = props
  if (direction === 'horizontal') return <Horizontal {...props} />
  return <VerticalMargin {...props} />
}

export default Marginer
