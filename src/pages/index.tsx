import { GetServerSideProps } from 'next'
import { PostCard } from '../patterns/PostCard'
import { getPosts, Post, usePosts } from '../services/hooks/usePosts'

import { Container } from './styles'

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  const { data } = usePosts(1,  {posts})

  return (
    <Container>
      {
        data?.posts.map((post, index) => (
          <PostCard 
            key={post.id}
            datas={{
              img: post.feature_image,
              id: post.id,
              author: post.primary_author.name,
              title: post.title,
              date: post.published_at,
              tag: post.primary_tag.name,
              index
            }}
          />
        ))
      }
    </Container>
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