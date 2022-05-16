import { formatDistanceToNowStrict } from 'date-fns'
import { pt } from 'date-fns/locale'
import { Chip, ChipProps } from '../../components/Chip'
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

    const chips: Record<string, ChipProps> = {
        code: {
            type: 'code',
            title: data.tag
        },
        author: {
            type: 'author',
            title: data.author
        },
        date: {
            type: 'date',
            title: dateFormatted
        }
    }

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
                    {Object.entries(chips).map(([key, datas]) => (
                        <Chip 
                            key={key}
                            title={datas.title}
                            type={datas.type}
                        />
                    ))}
                </ChipsContainer>
            </PostDatasContainer>
        </Container>
    )
}