import { Chip } from '../../components/Chip'
import { Typography } from '../../components/Typography'

import { 
    Container,
    ImageContainer,
    PostDatasContainer,
    Line,
    ChipsContainer 
} from './styles'

interface PostProps {
    datas: {
        img: string;
        author: string;
        tag: string;
        title: string;
        id: string;
        date: string;
        index: number;
    }
}

export function PostCard({ datas }: PostProps) {
    return (
        <Container index={datas.index}>
            <ImageContainer img={datas.img}/>

            <PostDatasContainer>
                <Line />

                <Typography
                    weight='bolder'
                    tag='h2'
                    size='large'
                >
                    {datas.title}
                </Typography>

                <ChipsContainer>
                    <Chip 
                        title={datas.tag}
                        type='code'
                    />

                    <Chip 
                        title={datas.author}
                        type='author'
                    />

                    <Chip 
                        title='2 dias atrás'
                        type='date'
                    />
                </ChipsContainer>
            </PostDatasContainer>
        </Container>
    )
}