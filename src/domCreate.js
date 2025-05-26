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

  function elWithClass(el, cl, text) {
    const element = document.createElement(el);
    element.classList.add(`${cl}`);
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
