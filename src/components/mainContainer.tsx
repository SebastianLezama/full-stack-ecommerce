import React from 'react'

export default function MainContainer({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <div className='container max-w-[1400px] self-center bg-white min-h-screen flex flex-col border-l border-r'>{children}</div>
  )
}
