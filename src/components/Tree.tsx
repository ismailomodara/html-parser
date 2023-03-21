import React from 'react'
import Loader from "components/Loader";
import TreeNode from "components/TreeNode";
import { getNode } from "utils";
import * as type from "types/index";

import styles from "styles/tree.module.css";

const Tree = (props: { loading: boolean, nodes: type.TreeNode | null }) => {
  return (
    <div className={styles['app-tree']}>
      <header className={styles['app-tree-heading']}>
        <h2>HTML Folder Structure</h2>
      </header>
      <div className={styles['app-tree-nodes']}>
        {
          props.loading ?
            <Loader />
              : (
                props.nodes ?
                  props.nodes && <TreeNode node={getNode(props.nodes)} depth={0} />
                  : <p className={styles['empty']}>No data to display.</p>
            )

        }
      </div>
    </div>
  )
}

export default Tree
