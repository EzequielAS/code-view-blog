import { RiCodeView } from 'react-icons/ri'
import { Typography } from '../../components/Typography'
import { Link } from '../../infra/components/Link'

import { Container } from './styles'

export function Logo() {
    return (
      <Link href="/">
        <Container>
            <RiCodeView />
            <Typography>
                CodeView<span>.</span>
            </Typography>
        </Container>
      </Link>
    )
}