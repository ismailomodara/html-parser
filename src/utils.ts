import { TreeNode } from "./types";

export const getNode = (node: TreeNode): TreeNode => {
    return {
        name: Object.keys(node)[0],
        children: node[Object.keys(node)[0]].__children
    }
}

export const isUrlValid = (url: string): boolean => {
    const regex = new RegExp("[(http(s)?):\\/\\/(www\\.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)")
    return regex.test(url)
}
