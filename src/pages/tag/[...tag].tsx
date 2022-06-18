import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PageWithPostProps } from '../../global/interfaces'
import { Pagination } from '../../patterns/Pagination'
import { Posts } from '../../patterns/Posts'
import { createClient } from '../../services/prismic'

export default function Tag({ 
  posts,
  next_page,
  total_pages 
}: PageWithPostProps) {
	const navigate = useRouter()
  const arrayQuery = navigate.query.tag || []
  const currentTag = arrayQuery[0]
  const currentPage = Number(arrayQuery[1]) || 1

  return (
	<>
	  <Posts 
		  posts={posts}
	  />

	  <Pagination 
      currentPage={currentPage}
      total_pages={total_pages}
      next_page={next_page}
      route={`tag/${currentTag}`}
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
  const arrayParams = params?.tag || []
  const currentTag = arrayParams[0]
  const currentPage = Number(arrayParams[1]) || 1

  const response = await client.getByTag(currentTag ,{
      pageSize: 1,
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
  }
}