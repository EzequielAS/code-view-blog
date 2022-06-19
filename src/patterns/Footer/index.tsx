import { Typography } from '../../components/Typography'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

import { 
  Container, 
  Content, 
  SocialMedias, 
  Social,
  BlogInfo, 
  Anchor 
} from './styles'

const socialMedias = {
  instagram: {
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/ezequiel.alves0/',
  },
  linkedin: {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/ezequiel-alves-3b09a21a6/'
  },
  github: {
    icon: <FaGithub />,
    url: 'https://github.com/EzequielAS'
  }
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <Container>
      <Content>
        <SocialMedias>
          {Object.entries(socialMedias).map(([key, datas]) => (
            <Social target='_blank' href={datas.url} key={key}>
              {datas.icon}
            </Social>
          ))}
        </SocialMedias>
        
        <BlogInfo>
          <Typography size='xsmall' weight='bold'>
            CodeView © {year}
          </Typography>
          
          <Typography size='xxsmall' weight='light'>
            Desenvolvido com <Anchor 
              target='_blank' 
              href='https://prismic.io/'
            >
              @prismic
            </Anchor>
          </Typography>
        </BlogInfo>
      </Content>
    </Container>
  )
}