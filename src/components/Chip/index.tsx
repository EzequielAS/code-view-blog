import { FaTerminal, FaUserAlt, FaCalendar } from 'react-icons/fa'

import { Container } from './styles'

interface ChipProps {
    title: string;
    type: 'code' | 'author' | 'date'
}

const icons = {
    'code': <FaTerminal />,
    'author': <FaUserAlt />,
    'date': <FaCalendar />
}

export function Chip({ title, type }: ChipProps) {
    return (
        <Container>
            {icons[type]}
            {title}
        </Container>
    )
}