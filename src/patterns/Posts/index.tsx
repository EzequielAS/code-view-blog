import { Container } from './styles'
import { Post, PostCard } from '../PostCard'

export interface PostsProps {
    posts: Post[];
}

export function Posts({ posts }: PostsProps) {
    return (
        <Container>
        {
            posts.map(post => (
            <PostCard
                key={post.slug}
                slug={post.slug}
                data={post.data}
            />
            ))
        }
        </Container>
    )
}