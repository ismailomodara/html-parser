import React, { useState, MouseEvent } from 'react'
import styles from "styles/search.module.css";
import { isUrlValid } from "utils";

type Search = {
  loading: boolean,
  search: (url: string) => void,
  clear: () => void
}

const Search = (props: Search) => {

  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const disabled = query === '' || props.loading;

  const clearURL = () => {
    setQuery("")
    props.clear()
  }

  const parseURL = (e: MouseEvent) => {
    e.preventDefault();

    if (isUrlValid(query)) {
      setMessage("")
      props.search(query)
    } else {
      setMessage("The URL is not valid")
      clearURL()
    }
  }

  return  (
    <div className={styles["app-search"]}>
      <form>
        <label>Input</label>
        <input
          type="url"
          placeholder="Enter a valid url to parse"
          value={query}
          required
          onChange={(e) => setQuery(e.target.value)} />
        <span className={styles['app-search-message']}>{ message }</span>
        <div>
          <button
            className={styles["app-button"]}
            onClick={clearURL}
            disabled={ disabled }>Clear</button>
          <button
            className={styles["app-button"] + ' ' + styles["app-button-primary"]}
            onClick={parseURL}
            disabled={ disabled }>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Search;
