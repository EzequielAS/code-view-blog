import { ReactNode } from 'react'
import NextHead from 'next/head'

interface HeadProps {
  title: string;
  children?: ReactNode;
}

export function Head({ title, children }: HeadProps) {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      {children}
    </NextHead>
  )
}