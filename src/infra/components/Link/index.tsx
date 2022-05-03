import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'

interface LinkProps extends NextLinkProps{
    children: ReactNode;
}

export function Link({ children, ...rest }: LinkProps) {
    return (
        <NextLink {...rest}>
            {children}
        </NextLink>
    )
}