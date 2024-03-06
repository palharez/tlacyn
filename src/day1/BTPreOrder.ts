function walk(curr: BinaryNode<number> | null, path: number[]) {
  if (!curr) {
    return path;
  }
  
  path.push(curr.value);

  // In binary we always traverse first lefth than right
  walk(curr.left, path);
  walk(curr.right, path);

  return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}