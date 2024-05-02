import Link from 'next/link'
import React from 'react'

const Check = () => {
  return (
    <div>
      <Link href={{
        pathname: "/check2",
        query: {
          name: "John Doe",
          age: '18'
        }
      }}>
      Go to some other page
      </Link>
    </div>
  )
}

export default Check