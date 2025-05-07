'use client'

import { ReactNode, forwardRef } from 'react'

type TagVarients = 'h1' | 'h2' | 'h3' | 'p'

type TypographyProps = {
  tag?: TagVarients
  children: ReactNode
}

const Typography = forwardRef(function Typography(
  { tag = 'p', children, ...props }: TypographyProps,
  ref: any
) {
  const Component = tag
  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  )
})

export default Typography
