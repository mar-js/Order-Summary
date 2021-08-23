import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`

export const Item = styled.li`
  margin: 0 1.1rem;

  &:nth-child(2) {
    margin-right: 5rem;
  }
`

export const Img = styled.img`
  object-fit: cover;
  border-radius: 50%;
`

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  letter-spacing: -.1rem;
  margin-bottom: .5rem;
  color: var(--dark-blue);
`

export const Value = styled.span`
  font-size: 1.2rem;
  letter-spacing: .12rem;
  color: var(--desaturated-blue);
`

export const Anchor = styled.a`
  font-size: 1.2rem;
  color: var(--bright-blue);

  &:hover {
    color: var(--desaturated-blue);
  }
`
