import styled from 'styled-components'

export const Group = styled.div`
  padding: 0 2rem;
`

export const ButtonPayment = styled.button`
  color: var(--very-pale-blue);
  background-color: var(--bright-blue);

  &:hover {
    background-color: var(--desaturated-blue);
  }
`

export const ButtonCacncel = styled.button`
  color: var(--desaturated-blue);
  background-color: transparent;

  &:hover {
    color: var(--dark-blue);
  }
`
