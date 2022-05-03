import styled from 'styled-components'

type TextProps = {
    tag?: string;
    color?: string;
    weight?: number | string;
    size?: string;
}

export const Text = styled('p')
    .attrs<TextProps>(({ tag }) => ({
    as: `${tag ? tag : 'p'}`
}))<TextProps>`
    ${({ color, weight, size, theme }) => `
        color: ${color ? color : theme.colors.onbackground};
        font-weight: ${weight ? weight : ''};
        font-size: ${size ? size : ''};
    `}
`