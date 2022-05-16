import { FaTerminal, FaUserAlt, FaCalendar } from 'react-icons/fa'

import { Container } from './styles'

const icons = {
    code: <FaTerminal />,
    author: <FaUserAlt />,
    date: <FaCalendar />
}

export interface ChipProps {
    title: string;
    type: keyof typeof icons;
}

export function Chip({ title, type }: ChipProps) {
    return (
        <Container>
            {icons[type]}
            {title}
        </Container>
    )
}