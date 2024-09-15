'use client'

import { ReactLenis } from 'lenis/react'

function SmoothScroll({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ReactLenis root options={{
        lerp: 0.1,
    }}>
      { children }
    </ReactLenis>
  )
}

export default SmoothScroll