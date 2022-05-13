import { GetServerSideProps } from 'next'
import { Pagination } from '../patterns/Pagination'
import { Post } from '../patterns/PostCard'
import { Posts } from '../patterns/Posts'
import { createClient } from '../services/prismic'

interface HomeProps {
  posts: Post[];
  next_page: string | null;
  total_pages: number;
}

export default function Home({ 
  posts,
  next_page,
  total_pages 
}: HomeProps) {
  return (
    <>
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

export const getStaticProps: GetServerSideProps = async ({}) => {
  const client = createClient()

  const response = await client.get({
    pageSize: 1,
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