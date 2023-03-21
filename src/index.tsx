import { hot } from 'react-hot-loader/root'
import React from 'react'
import { render } from 'react-dom'
import folderIcon from 'assets/folder-icon.svg'
import fileIcon from 'assets/file-icon.svg'

import { useState } from 'react'

const getNode = (node) => {
  return {
    name: Object.keys(node)[0],
    children: node[Object.keys(node)[0]].__children
  }
}

const TreeNode = ({ node, depth = 0 }) => {

  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{marginLeft: `${depth * 20}px`}}>
      <p onClick={() => setExpanded(!expanded)}>{node.name}</p>
      {
        expanded && node.children && node.children.map((child, index) => {
          return (
            <TreeNode
              node={getNode(child)}
              key={`${node.name}-${index}`}
              depth={1}
            />
          )
        })
      }
    </div>
  )
}
const App = () => {

  const [input, setInput] = useState("");
  const [nodes, setNodes] = useState("");

  const clear = () => {
    setInput("")
    setNodes("")
  }
  const test = (e) => {
    e.preventDefault()
    console.log(input)
    fetch(`/api/v1/parsedhtml?url=${input}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
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
      <p>Replace me with application code</p>
      <input name="url" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={clear}>Clear</button>
      <button onClick={test}>Submit</button>

      <div>
        {
          nodes && <TreeNode node={getNode(nodes)} />
        }
      </div>

      <p>Use the <img src={folderIcon} alt="folder icon" /> icon for HTML elements with children</p>
      <p>Use the <img src={fileIcon} alt="file icon" /> icon for HTML elements without children</p>
    </div>
  )
}

const HotApp = hot(App)

const root = document.getElementById('root') as HTMLElement
render(<HotApp />, root)
