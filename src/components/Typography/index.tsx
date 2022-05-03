import { ReactNode } from 'react'
import theme from '../../global/Theme'

import { Text } from './styles'

interface TypographyProps {
    tag?: string;
    color?: keyof typeof theme.colors;
    weight?: keyof typeof theme.typography.weights;
    size?: keyof typeof theme.typography.sizes;
    children:  ReactNode;
}

export function Typography({ 
    tag, 
    color = 'onbackground', 
    weight,
    size,
    children 
}:  TypographyProps) {

    return (
        <Text 
            tag={tag}
            color={color && theme.colors[color]}
            weight={weight && theme.typography.weights[weight]}
            size={size && theme.typography.sizes[size]}
        >
            {children}
        </Text>
    )
}