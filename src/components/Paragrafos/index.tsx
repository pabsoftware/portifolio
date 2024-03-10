import { P } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Paragrafo = (props: Props) => <P>{props.children}</P>

export default Paragrafo
