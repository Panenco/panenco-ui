export const useInjectStylesFirst = () => {
  if (typeof window !== 'undefined') {
    const { head } = document;
    if (!head.querySelector('[data-styled="active"]')) {
      const injectFirstNode = document.createElement('style');
      injectFirstNode.setAttribute('data-styled', 'active');
      head.insertBefore(injectFirstNode, head.firstChild);
    }
  }
};
