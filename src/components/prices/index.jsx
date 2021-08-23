
import { List, Item, Img, Subtitle, Value, Anchor } from './styles'

import musicImg from '../../assets/images/icon-music.svg'

export const Prices = () => (
  <List>
    <Item>
      <Img
        src={ musicImg }
        alt="Icon music"
      />
    </Item>
    <Item>
      <Subtitle>Annual Plan</Subtitle>
      <Value>$59.99/year</Value>
    </Item>
    <Item>
      <Anchor href="#">Change</Anchor>
    </Item>
  </List>
)
