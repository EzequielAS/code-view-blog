import { Button } from '../../components/Button'
import { Logo } from '../Logo'

import { 
    Container, 
    Content, 
    ContainerLinks, 
    Line, 
    FadeLine
} from "./styles"

const listButtons = ["Frontend", "Backend"]

export function Header() {
    return(
        <Container>
            <Content>
                <Logo />

                <Line />

                <ContainerLinks>
                    {
                        listButtons.map(button => (
                            <Button 
                                key={button}
                                link={`/${button}`}
                                title={button}
                                buttonStyle='text'
                            />
                        ))
                    }
                </ContainerLinks>
            </Content>

            <FadeLine />
        </Container>
    )
}