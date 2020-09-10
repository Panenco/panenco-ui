import * as React from 'react';

export const useCombinedRefs = (...refs: any[]): any => {
  const targetRef = React.useRef(null);

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        /* eslint no-param-reassign: 0 */
        ref.current = targetRef.current;
      }
    });
  }, refs);

  return targetRef;
};
