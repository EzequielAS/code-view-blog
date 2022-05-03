import styled from 'styled-components'

type ContainerProps = {
    buttonStyle?: 'text' | 'outlined',
    background?: string;
    size?: number;
    fullWidth?: boolean;
    fullRounded?: boolean;
    color?: string;
    border?: string;
}

export const Container = styled.button<ContainerProps>`
    ${({ 
         buttonStyle, 
         background, 
         size,
         fullWidth,
         fullRounded,
         color, 
         border, 
         theme 
    }) => `
        background: ${
            buttonStyle === 'text'  ||  buttonStyle === 'outlined'
            ? 'none'
            : background 
            ? background 
            : theme.colors.primary
        };
        color: ${
            buttonStyle === 'text' 
            ? theme.colors.onbackground
            : buttonStyle === 'outlined'
            ? theme.colors.primary
            : color 
            ? color 
            : theme.colors.onprimary
        };
        border: ${
            buttonStyle === 'text' 
            ? 'none'
            : buttonStyle === 'outlined'
            ? `1px solid ${theme.colors.primary}`
            : border 
            ? `1px solid ${border}`
            : 'none'
        }; 
        border-radius: ${
            fullRounded 
            ? '100%'
            : size 
            ? `${size * 4}px` 
            : `${theme.button.sizes.small * 4}px`
        };

        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;

        width: ${fullWidth ? '100%' : 'max-content'};
        font-size: ${size ? `${size}rem` : `${theme.button.sizes.small}rem`};
        padding: ${size ? `${size/2}rem` : `${theme.button.sizes.small/2}rem`};
        gap: ${size ? `${size/2}rem` : `${theme.button.sizes.small/2}rem`};
    `}
`