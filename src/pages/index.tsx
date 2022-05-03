import { GetServerSideProps } from 'next'
import { getPosts, Post, usePosts } from '../services/hooks/usePosts'
import { Posts } from '../patterns/Posts'

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  const { data } = usePosts(1, {posts})

  return (
    <Posts 
        posts={data?.posts}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { posts } = await getPosts(1) 

    return {
        props: {
            posts
        }
    }
}