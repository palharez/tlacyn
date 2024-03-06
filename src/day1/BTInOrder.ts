function walk(curr: BinaryNode<number> | null, path: number[]) {
  if (!curr) {
    return path;
  }
  
  
  // In binary we always traverse first lefth than right
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}