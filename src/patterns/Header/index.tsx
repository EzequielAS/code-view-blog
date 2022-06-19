import { useRouter } from 'next/router'
import { Button } from '../../components/Button'
import { Logo } from '../Logo'

import { 
  StickyContainer,
  HeaderStyled, 
  Content, 
  ContainerLinks, 
  Line, 
  FadeLine,
} from "./styles"

const listButtons = ["Frontend", "Backend"]

export function Header() {
  const navigate = useRouter()
  const currentRoute = navigate.asPath

  const isRouteMatching = (button: string) => {
    const sanitizedRoute = currentRoute.slice(1)

    if(sanitizedRoute.split('/').length === 3) {
      const rootRoute = sanitizedRoute.slice(0, -2)

      return rootRoute === `tag/${button}`
    }

    return sanitizedRoute === `tag/${button}`
  }

  const ButtonsContainer = (
    <ContainerLinks>
      {listButtons.map(button => {
        const isRouteActive = isRouteMatching(button)

        return( 
          <Button 
            key={button}
            link={`/tag/${button}`}
            title={button}
            buttonStyle='text'
            color={isRouteActive ? 'primary' : 'onbackground'}
          />
        )
      })}
    </ContainerLinks>
  )

  return(
    <StickyContainer>
      <HeaderStyled>
        <Content>
          <Logo />

          <Line />

          {ButtonsContainer}
        </Content>
      </HeaderStyled>

      <FadeLine />
    </StickyContainer>
  )
}
