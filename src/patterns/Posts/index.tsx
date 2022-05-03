import { Container } from './styles'
import { Post } from '../../services/hooks/usePosts'
import { PostCard } from '../PostCard'

interface PostsProps {
    posts: Post[] | undefined;
}

export function Posts({ posts }: PostsProps) {
    return (
        <Container>
        {
            posts?.map((post, index) => (
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