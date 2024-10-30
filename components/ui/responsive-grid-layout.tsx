import React from 'react'


export const ResponsiveGridLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 p-4">
      {children}
    </div>
  )
}
