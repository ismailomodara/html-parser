import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { render } from 'react-dom'

import Tree from "components/Tree";
import Search from "components/Search";

import "styles/index.css";

const App = () => {

  const [nodes, setNodes] = useState(null);
  const [loading, setLoading] = useState(false);

  const getParsedData = (url: string) => {
    setLoading(true)
    fetch(`/api/v1/parsedhtml?url=${url}`)
      .then(response => response.json())
      .then(data => {
        if (!data.errno) {
          setNodes(data)
          setLoading(false)
        } else {
          setNodes(null)
          setLoading(false)
        }
      })
      .catch(() => {
        setNodes(null)
        setLoading(false)
      })
  }

  return  (
    <main>
      <Tree loading={loading} nodes={nodes} />
      <Search
        loading={loading}
        search={(url) => getParsedData(url)}
        clear={() => setNodes(null)}
      />
    </main>
  )
}

const HotApp = hot(App)

const root = document.getElementById('root') as HTMLElement
render(<HotApp />, root)
