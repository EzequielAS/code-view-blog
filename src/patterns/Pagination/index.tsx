import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Button } from '../../components/Button'
import { Typography } from '../../components/Typography'

import { Container } from './styles'

interface PaginationProps {
    currentPage: number;
    total_pages: number;
    next_page: string | null;
    route?: string;
}

export function Pagination({ 
    currentPage, 
    total_pages,
    next_page,
    route
}: PaginationProps) {
    const routeRedirect = route ? route : 'page'
    const isLeftButtonVisible = currentPage !== 1
    
    const nextPageLink = `/${routeRedirect}/${currentPage + 1}`
    const prevPageLink = currentPage === 2 && routeRedirect === 'page' 
        ? '/' 
        : `/${routeRedirect}/${currentPage - 1}`


    if(!next_page) 
        return <></>

    return (
        <Container>
            {isLeftButtonVisible &&
                <Button 
                    size='small'
                    background='background'
                    color='onbackground'
                    iconRight={<FaArrowLeft />}
                    link={prevPageLink}
                    fullRounded
                />
            }
            
            <Typography 
                size='xsmall'
                weight='bolder'
            >
                {currentPage} de {total_pages}
            </Typography>

            <Button 
                size='small'
                background='background'
                color='onbackground'
                iconRight={<FaArrowRight />}
                link={nextPageLink}
                fullRounded
            />
        </Container>
    )
}