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
  const relativePath = route || 'page'
  const isPrevButtonVisible = currentPage !== 1
  
  const nextPageLink = `/${relativePath}/${currentPage + 1}`
  const prevPageLink = currentPage === 2 && relativePath === 'page' 
    ? '/' 
    : `/${relativePath}/${currentPage - 1}`

  return (
    <Container>
      {isPrevButtonVisible &&
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

      {next_page && (
        <Button 
          size='small'
          background='background'
          color='onbackground'
          iconRight={<FaArrowRight />}
          link={nextPageLink}
          fullRounded
        />
      )}
    </Container>
  )
}
