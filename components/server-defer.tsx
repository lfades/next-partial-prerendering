'use client';

import { type ReactNode, useEffect, useState } from 'react';

export function ServerDefer<P = {}>({
  action,
  props,
  fallback,
}: {
  props?: P;
  action: (props: P) => Promise<ReactNode>;
  fallback?: ReactNode;
}) {
  const [node, setNode] = useState<ReactNode>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    action(props!).then((node) => {
      setNode(node);
      setIsLoading(false);
    });
  }, [action, props]);

  if (typeof window === 'undefined' || isLoading) return fallback;

  return node;
}
