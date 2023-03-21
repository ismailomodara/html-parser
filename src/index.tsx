import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { render } from 'react-dom'

import Tree from "components/Tree";
import Search from "components/Search";

const App = () => {

  const [nodes, setNodes] = useState("");

  const getParsedData = (url: string) => {
    fetch(`/api/v1/parsedhtml?url=${url}`)
      .then(response => response.json())
      .then(data => {
        if (!data.errno) {
          setNodes(data)
        }
      })
      .catch((response) => {
        console.log("Unable to complete request")
      })
  }

  return  (
    <div>
      <Tree nodes={nodes} />
      <Search
        search={(url) => getParsedData(url)}
        clear={() => setNodes("")}
      />
    </div>
  )
}

const HotApp = hot(App)

const root = document.getElementById('root') as HTMLElement
render(<HotApp />, root)
