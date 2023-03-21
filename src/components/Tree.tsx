import React from 'react'
import TreeNode from "components/TreeNode";
import { getNode } from "utils";
import * as type from "types/index";


const Tree = (props: { nodes: type.TreeNode }) => {
  return (
    <div>
      <h1>HTML Folder Structure</h1>
      <div>
        {
          props.nodes && <TreeNode node={getNode(props.nodes)} depth={0} />
        }
      </div>
    </div>
  )
}

export default Tree
