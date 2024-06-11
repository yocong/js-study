
// 1개의 li태그 처리
class ProductItem {

  constructor(prod) {
    this.prod = prod;
  }

  render() {

    // 1개의 product들에 들어가는 것들 디스트럭쳐링, this.prod 생략가능하게
    const { title, price, image, desc } = this.prod;

    const $prodLi = document.createElement('li');
      $prodLi.classList.add('product-item');
      $prodLi.innerHTML = `
      <div>
        <img src="${image}" alt="${title}">
        <div class="product-item__content">
          <h2>${title}</h2>
          <h3>${price}원</h3>
          <p>${desc}</p>
          <button>담기</button>
        </div>
      </div>
    `;

    return $prodLi;
  }
}

export default ProductItem;