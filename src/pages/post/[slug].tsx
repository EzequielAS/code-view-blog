import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Typography } from '../../components/Typography'
import { Head } from '../../infra/components/Head'
import { createClient } from '../../services/prismic'

export default function Post() {
  const router = useRouter()

  return (
    <>
      <Head title={`CodeView | ${router.query.slug}`} />
      <Typography>{router.query.slug}</Typography>
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

  console.log(response.data.content[0].body[2].spans)

  const post = {
    date: response.first_publication_date,
    data: {
      title: response.data.title,
      subtitle: response.data.subtitle,
      author: response.data.author,
      image: response.data.image.url,
      // content: response.data.content
    }
  }

  return {
    props: { 
      post
    }, 
  }
}