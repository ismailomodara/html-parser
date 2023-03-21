import React, { useState } from 'react';
import { getNode } from "utils";

import arrowIcon from "assets/arrow-icon.svg";
import folderIcon from "assets/folder-icon.svg";
import fileIcon from "assets/file-icon.svg";

import * as type from "../types";
import styles from "styles/tree.module.css";


const TreeNode = (props: type.TreeNodeComponent) => {

  const { node, depth } = props;

  const [renderedChildren, setRenderedChildren] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const hasChildren = !!(node.children && node.children.length)

  const renderChildren = () => {
    if (renderedChildren) {
      setExpanded(!expanded)
    } else {
      setRenderedChildren(true)
      setExpanded(!expanded)
    }
  }

  return (
    <>
      {
        node &&
          <ul className={styles.node} style={{paddingLeft: `${depth * 20}px`}}>
              <li className={styles["node-title"]}>
                {
                  hasChildren ? (
                    <span onClick={() => renderChildren()}>
                      <img src={arrowIcon} alt="arrow icon" className={styles[`node-toggle-${expanded ? 'open' : 'closed'}`]} />
                      <img src={folderIcon} alt="folder icon" />
                    </span>
                  ) : <img src={fileIcon} alt="file icon" />
                }
                  <p>{node.name}</p>
              </li>
              <li className={styles[`node-children-${expanded ? 'expanded' : 'hidden'}`]}>
                {
                  renderedChildren && node.children.map((child: type.TreeNode, index: number) => {
                    return (
                      <TreeNode
                        node={getNode(child)}
                        key={`${node.name}-${index}`}
                        depth={1}
                      />
                    )
                  })
                }
              </li>
          </ul>
      }
    </>
  )
}

export default TreeNode
