import React, { useState, MouseEvent } from 'react'

type Search = {
  search: (url: string) => void,
  clear: () => void
}

const Search = (props: Search) => {

  const [input, setInput] = useState("");

  const clearURL = () => {
    setInput("")
    props.clear()
  }

  const validateURL = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (input) {
      props.search(input)
    } else {
      alert("Empty field")
    }
  }

  return  (
    <div>
      <input name="url" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={clearURL}>Clear</button>
      <button onClick={validateURL}>Submit</button>
    </div>
  )
}

export default Search;
