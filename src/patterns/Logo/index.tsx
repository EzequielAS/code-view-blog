import { RiCodeView } from 'react-icons/ri'
import { Typography } from '../../components/Typography'

import { Container } from './styles'

export function Logo() {
    return (
        <Container>
            <RiCodeView />
            <Typography>
                CodeView<span>.</span>
            </Typography>
        </Container>
    )
}