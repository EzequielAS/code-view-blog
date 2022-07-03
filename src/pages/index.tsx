import { GetServerSideProps } from 'next'
import { PageWithPostProps } from '../global/interfaces'
import { Head } from '../infra/components/Head'
import { Pagination } from '../patterns/Pagination'
import { Posts } from '../patterns/Posts'
import { createClient } from '../services/prismic'

export default function Home({ 
  posts,
  next_page,
  total_pages 
}: PageWithPostProps) {
  return (
    <>
      <Head title='CodeView'>
        <meta property="og:title" content="CodeView" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Conteúdos sobre tecnologia sob a visão de pessoas em constante aprendizado!" />
        <meta property="og:image" content="https://images.prismic.io/code-view/979db02e-91aa-44bd-870e-c63ef0b85b89_meta-image.jpg?auto=compress,format" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL_BASE} />

        <meta name='twitter:title' content="CodeView" />
        <meta name='twitter:url' content={process.env.NEXT_PUBLIC_URL_BASE} />
        <meta name='twitter:description' content="Conteúdos sobre tecnologia sob a visão de pessoas em constante aprendizado!" />
        <meta name="twitter:image" content="https://images.prismic.io/code-view/979db02e-91aa-44bd-870e-c63ef0b85b89_meta-image.jpg?auto=compress,format" />

        <meta name='description' content="CodeView" />
      </Head>

      <Posts 
          posts={posts}
      />

      <Pagination 
        currentPage={1}
        total_pages={total_pages}
        next_page={next_page}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({}) => {
  const client = createClient()

  const response = await client.get({
    pageSize: 9,
    page: 1,
    fetch: [
      'post.title', 
      'post.author', 
      'post.image'
    ],
  })

  const posts = response.results.map((post, index) => {
    return {
      slug: post.uid,
      data: {
        tag: post.tags[0],
        date: post.first_publication_date,
        title: post.data.title,
        author: post.data.author,
        imageURL: post.data.image.url,
        index
      }
    }
  })

  return {
    props: { 
      posts,
      next_page: response.next_page,
      total_pages: response.total_pages
    }, 
  }
}