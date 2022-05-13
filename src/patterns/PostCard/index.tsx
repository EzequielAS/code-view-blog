import { formatDistanceToNowStrict } from 'date-fns'
import { pt } from 'date-fns/locale'
import { Chip } from '../../components/Chip'
import { Typography } from '../../components/Typography'

import { 
    Container,
    ImageContainer,
    PostDatasContainer,
    Line,
    ChipsContainer 
} from './styles'


export interface Post {
    slug: string;
    data: {
        tag: string,
        date: string,
        title: string,
        author: string,
        imageURL: string,
        index: number
    };
}


export function PostCard({ data }: Post) {
    const dateFormatted = formatDistanceToNowStrict(
        new Date(data.date), 
        { 
            addSuffix: true,
            locale: pt 
        }
    )

    return (
        <Container index={data.index}>
            <ImageContainer img={data.imageURL}/>

            <PostDatasContainer>
                <Line />

                <Typography
                    weight='bolder'
                    tag='h2'
                    size='large'
                >
                    {data.title}
                </Typography>

                <ChipsContainer>
                    <Chip 
                        title={data.tag}
                        type='code'
                    />

                    <Chip 
                        title={data.author}
                        type='author'
                    />

                    <Chip 
                        title={dateFormatted}
                        type='date'
                    />
                </ChipsContainer>
            </PostDatasContainer>
        </Container>
    )
}