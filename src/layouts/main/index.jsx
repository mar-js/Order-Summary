import { MainStyles } from './styles'

import { Description } from '../../components/description'
import { Prices } from '../../components/prices'
import { Buttons } from '../../components/buttons'

export const Main = () => (
  <MainStyles>
    <Description />
    <Prices />
    <Buttons />
  </MainStyles>
)
