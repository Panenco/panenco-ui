export const injectIcons = (svgSprite: any): any =>
  fetch(svgSprite)
    .then((response) => response.text())
    .then((svg) => {
      const dummyElement = document.createElement('div') as any;
      dummyElement.innerHTML = svg;
      const svgElement = dummyElement.firstElementChild;
      svgElement.style.display = 'none';
      document.body.prepend(svgElement);
    })
    .catch((error) => {
      console.error(error);
    });
