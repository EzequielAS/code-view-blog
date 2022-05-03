import { useQuery } from 'react-query'
import { api } from '../api'

export type Post = {
    feature_image: string;
    id: string;
    title: string;
    primary_author: {
      name: string;
    };
    primary_tag: {
      name: string;
    };
    published_at: string;
}

interface GetPostsResponse {
    posts: Post[];
}

export async function getPosts(page: number): Promise<GetPostsResponse> {
    const response = await api.get(
        `posts/?key=${process.env.NEXT_PUBLIC_GHOST_API_KEY}&include=tags,authors`
    )

    const { posts } = response.data

    return {posts}
}


export function usePosts(page: number, initialData: GetPostsResponse) {
    return useQuery(['posts', page], () => getPosts(page), 
        {
            initialData: initialData,
            staleTime: 1000 * 60 * 5  // 5 minutes
        }
    )
}