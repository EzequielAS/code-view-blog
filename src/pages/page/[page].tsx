import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PageWithPostProps } from '../../global/interfaces'
import { Head } from '../../infra/components/Head'
import { Pagination } from '../../patterns/Pagination'
import { Posts } from '../../patterns/Posts'
import { createClient } from '../../services/prismic'

export default function Page({ 
  posts,
  next_page,
  total_pages 
}: PageWithPostProps) {
	const navigate = useRouter()
  const currentPage = Number(navigate.query.page)

  return (
	<>
    <Head title='CodeView' />

	  <Posts 
		  posts={posts}
	  />

	  <Pagination 
      currentPage={currentPage}
      total_pages={total_pages}
      next_page={next_page}
	  />
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
  const currentPage = Number(params?.page)

  try {
    const response = await client.get({
      pageSize: 9,
      page: currentPage,
      fetch: [
        'post.title', 
        'post.author', 
        'post.image'
      ],
    })
  
    if(response.results.length === 0)
      return { notFound: true }
  
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
      revalidate: 60 * 60 // 1 hour
    }
  } catch {
    return { notFound: true }
  }
}