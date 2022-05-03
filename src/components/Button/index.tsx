import { Link } from '../../infra/components/Link'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import theme from '../../global/Theme'

import { Container } from './styles'

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    link?: string;
    title?: string;
    fullWidth?: boolean;
    fullRounded?: boolean;
    buttonStyle?: 'text' | 'outlined',
    iconRight?: ReactNode;
    iconLeft?: ReactNode;
    size?: keyof typeof theme.button.sizes;
    background?: keyof typeof theme.colors;
    color?: keyof typeof theme.colors;
    border?: keyof typeof theme.colors;
}

export function Button({ 
    link,
    title,
    iconLeft,
    iconRight,
    fullWidth,
    fullRounded,
    buttonStyle,
    size,
    background,
    color,
    border,
    ...rest 
}: ButtonProps) {

    if(link)
        return (
            <Link href={link ? link : ''}>
                <Container 
                    buttonStyle={buttonStyle}
                    background={background && theme.colors[background]}
                    color={color && theme.colors[color]}
                    border={border && theme.colors[border]}
                    fullWidth={fullWidth}
                    fullRounded={fullRounded}
                    size={size && theme.button.sizes[size]}
                    {...rest}
                >
                    {iconLeft}
                    {title}
                    {iconRight}
                </Container>
            </Link>
        )

    return (
        <Container 
            buttonStyle={buttonStyle}
            background={background && theme.colors[background]}
            color={color && theme.colors[color]}
            border={border && theme.colors[border]}
            fullWidth={fullWidth}
            fullRounded={fullRounded}
            size={size && theme.button.sizes[size]}
            {...rest}
        >
            {iconLeft}
            {title}
            {iconRight}
        </Container>
    )
}