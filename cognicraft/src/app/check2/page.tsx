import React from 'react'

const AnotherCheck = ({searchParams}:{
    searchParams:{
        name:string,
        age:string
    }
}) => {
    console.log(searchParams.name)
  return (
    <div>
        <h1>{searchParams.name}</h1>
    </div>
  )
}

export default AnotherCheck