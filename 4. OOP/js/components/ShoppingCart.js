
// header 담당 렌더링
class ShoppingCart {
  
  constructor() {
    // 장바구니에 담은 product들을 저장
    this.cartItems = [];
  }

  render() {
    const $section = document.createElement('section');
    $section.classList.add('cart');
    $section.innerHTML = `
      <h2>총액 0원</h2>
      <button>주문하기</button>
    `;
    return $section;
  }
}

export default ShoppingCart;