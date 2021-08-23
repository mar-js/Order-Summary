import { Group, ButtonPayment, ButtonCacncel } from './styles'

export const Buttons = () => (
  <Group>
    <ButtonPayment type="button">Proceed to Payment</ButtonPayment>
    <ButtonCacncel type="button">Cancel Order</ButtonCacncel>
  </Group>
)
