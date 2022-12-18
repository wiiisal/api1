import React from 'react'

export default function Pagination({goNextPage,goPrevPage}) {
  return (
    <div>
       { goPrevPage &&<button onClick={goPrevPage}>previous</button>}
       { goNextPage &&<button onClick={goNextPage}>next</button>}
      
    </div>
  )
}
