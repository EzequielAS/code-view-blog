import { Button } from '../../components/Button'
import { Typography } from '../../components/Typography'
import { Head } from '../../infra/components/Head'
import { Container } from './styles'

export default function NotFound() {
  return (
    <Container>
      <Head title='CodeView | 404' />

      <Typography tag='h1' size='xxlarge'>
        404
      </Typography>

      <Typography>
        Página não encontrada
      </Typography>

      <Button 
        title='Voltar para o início'
        buttonStyle='outlined'
        color='onbackground'
        border='onbackground'
        link='/'
      />
    </Container>
  )
}