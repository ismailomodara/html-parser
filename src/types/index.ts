export type TreeNode = {
  [key: string]: any
  children: TreeNode[]
}

export interface TreeNodeComponent {
  node: TreeNode,
  depth: number
}
