import productImg from '../../../assets/images/side-cart/cardeira.png'

export function SideCartProduct(params) {
	return (
		<div className="c-side-cart__product">
			<img src={productImg} alt="" className="c-side-cart__product-img" />
			<div className="c-side-cart__product-info">
				<span className="c-side-cart__product-title">
					Cadeira de Escritório Diretor Giratória Preta
				</span>
				<span className="c-side-cart__product-quantity">Quantidade: 1</span>
			</div>
			<span className="c-side-cart__product-price">R$ 433,79</span>
		</div>
	)
}
