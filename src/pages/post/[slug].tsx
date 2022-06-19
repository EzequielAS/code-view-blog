import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Typography } from '../../components/Typography'
import { Head } from '../../infra/components/Head'
import { createClient } from '../../services/prismic'

import { Container, ImgStyled, PostInfo, Details } from '../../styles/Post'

interface Post {
  date: string,
  title: string,
  subtitle: string,
  author: string,
  image: string,
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const router = useRouter()
  const datePost = new Date(post.date)

  const publishedDateFormatted = format(
    datePost, 
    "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR
    }
  )

  return (
    <>
      <Head title={`CodeView | ${router.query.slug}`} />

      <Container>
        <ImgStyled 
          src={post.image} 
          height={300}
          alt="" 
        />

        <PostInfo>
          <Typography 
            tag="h1"
            size='xxlarge'
            color='onbackgroundFade'
          >
            {post.title}
          </Typography>

          <Details>
            <Typography 
              size='xsmall' 
              color='primary'
            >
              {post.author}
            </Typography>
            <Typography 
              tag='time'
              size='xsmall'
              color='primary'
            >
              {publishedDateFormatted}
            </Typography>
          </Details>

          <Typography
            tag='h2'
            size='small'
          >
            {post.subtitle}
          </Typography>
        </PostInfo>

      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
      paths: [],
      fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = createClient()
  const slug = params?.slug as string

  const response = await client.getByUID('post', slug)

  // console.log(response.data.content[0].body[2].spans)

  const post = {
    date: response.first_publication_date,
    title: response.data.title,
    subtitle: response.data.subtitle,
    author: response.data.author,
    image: response.data.image.url,
  }

  return {
    props: { 
      post
    }, 
  }
}