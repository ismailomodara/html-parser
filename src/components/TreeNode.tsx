import React, { useState } from 'react';
import { getNode } from "utils";

import folderIcon from "assets/folder-icon.svg";
import fileIcon from "assets/file-icon.svg";

import * as type from "../types";

const TreeNode = (props: type.TreeNodeComponent) => {

  const { node, depth } = props;

  const [expanded, setExpanded] = useState(false)
  const hasChildren = !!(node.children && node.children.length)

  return (
    <div style={{marginLeft: `${depth * 20}px`}}>
      {
        hasChildren ? <img src={folderIcon} alt="folder icon" /> : <img src={fileIcon} alt="file icon" />
      }
      <p onClick={() => setExpanded(!expanded)}>{node.name}</p>
      {
        expanded && hasChildren && node.children && node.children.map((child: type.TreeNode, index: number) => {
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

export default TreeNode
