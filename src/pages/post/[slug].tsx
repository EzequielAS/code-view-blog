import { PrismicRichText } from '@prismicio/react'
import { RTNode } from '@prismicio/types'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import NextImage from 'next/image'
import { Typography } from '../../components/Typography'
import { Head } from '../../infra/components/Head'
import { createClient } from '../../services/prismic'

import { 
  Container, 
  ImgStyled, 
  PostInfo, 
  Details,
  PostContent,
  ArticleStyled,
} from '../../styles/Post'

interface Post {
  date: string,
  title: string,
  subtitle: string,
  author: string,
  image: string,
  content: {
    heading: string;
    body?: [] | [RTNode, ...RTNode[]] | null;
  }[];
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const datePost = new Date(post.date)
  const route = useRouter()
  
  const publishedDateFormatted = format(
    datePost, 
    "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR
    }
  )

  return (
    <>
      <Head title={`CodeView | ${post.title}`}>
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={post.subtitle} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_URL_BASE}/post/${route.query.slug}`} />

        <meta name='twitter:title' content={post.title} />
        <meta name='twitter:url' content={`${process.env.NEXT_PUBLIC_URL_BASE}/post/${route.query.slug}`} />
        <meta name='twitter:description' content={post.subtitle} />
        <meta name="twitter:image" content={post.image} />

        <meta name='description' content={post.title} />
      </Head>

      <Container>
        <ImgStyled 
          src={post.image} 
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

        <PostContent>
          {post.content.map(postContent => {
            return (
              <ArticleStyled key={postContent.heading}>
                <Typography size='medium' tag="h3">
                  {postContent.heading}
                </Typography>

                <PrismicRichText 
                  field={postContent.body}
                  components={{
                    paragraph: ({ children }) => (
                      <Typography weight='light' color='text'>
                        {children}
                      </Typography>
                    ),
                    listItem: ({ children }) => (
                      <Typography tag="li" weight='light'>
                        {children}
                      </Typography>
                    )
                  }}
                />
              </ArticleStyled>
            )
          })}
        </PostContent>
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

  try {
    const response = await client.getByUID('post', slug)
  
    const post = {
      date: response.first_publication_date,
      title: response.data.title,
      subtitle: response.data.subtitle,
      author: response.data.author,
      image: response.data.image.url,
      content: response.data.content
    }
  
    return {
      props: { 
        post
      }, 
      revalidate: 60 * 60 * 24 // 24 horas
    }
  }
  catch {
    return {
      notFound: true
    }
  }
}