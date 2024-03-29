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
    const hasPaginationOnRoute = sanitizedRoute.split('/').length === 3
    const buttonRoute = `tag/${button}`

    if (hasPaginationOnRoute) {
      const routeWithoutPagination = sanitizedRoute.slice(0, -2)

      return routeWithoutPagination === buttonRoute
    }

    return sanitizedRoute === buttonRoute
  }

  const ButtonsContainer = (
    <ContainerLinks>
      {listButtons.map(button => {
        const isRouteActive = isRouteMatching(button)

        return( 
          <Button 
            key={button}
            link={`/tag/${button}/1`}
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
