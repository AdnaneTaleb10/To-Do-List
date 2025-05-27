const create = (function () {
  function el(el, text) {
    const element = document.createElement(el);
    element.textContent = text;
    return element;
  }

  function elWithId(el, id, text) {
    const element = document.createElement(el);
    element.id = id;
    element.textContent = text;
    return element;
  }

  function elWithClass(el, text, ...cl) {
    const element = document.createElement(el);
    /* element.classList.add(`${cl}`); */
    if(cl.length > 0){
      cl.forEach(className => {
        element.classList.add(className);
      });
    }

    element.textContent = text;
    return element;
  }

  function imgWithSrc(src) {
    const element = document.createElement("img");
    element.src = src;
    return element;
  }

  return {
    el,
    elWithId,
    elWithClass,
    imgWithSrc
  };
})();

export default create;
