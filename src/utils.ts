import { TreeNode } from "./types";

export const getNode = (node: TreeNode): TreeNode => {
    return {
        name: Object.keys(node)[0],
        children: node[Object.keys(node)[0]].__children
    }
}
