import { GetServerSideProps } from 'next'
import { getPosts, Post } from '../services/hooks/usePosts'
import { Posts } from '../patterns/Posts'

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {

  
  return (
    <Posts 
        posts={posts}
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