import { Heading } from '@chakra-ui/layout'
import TitleProps from './types'

const TitleSection = ({ title }: TitleProps) => (
  <Heading as="h2">{title}</Heading>
)

export default TitleSection
