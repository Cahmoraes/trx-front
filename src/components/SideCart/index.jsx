import { Button } from '../Form/Button'
import { SideCartProduct } from './SideCartProduct'

import { ReactComponent as IconClose } from '../../assets/images/icons/close.svg'
import { ReactComponent as IconCheck } from '../../assets/images/side-cart/check.svg'

export function SideCart({ cart = false, handleClickToggleSideCart }) {
	const titles = {
		add: 'Adicionado ao carrinho',
		sideCart: 'Meu carrinho',
	}
	return (
		<div id="side-cart" className="c-side-cart is-active">
			<div className="c-side-cart__header">
				{!cart && <IconCheck />}

				<h3 className="c-side-cart__title">
					{cart ? titles.sideCart : titles.add}
				</h3>
				<button
					type="button"
					className="c-side-cart__close"
					onClick={handleClickToggleSideCart}
				>
					<IconClose />
				</button>
			</div>
			<div className="c-side-cart__list">
				<SideCartProduct />
				{cart && (
					<>
						<SideCartProduct />
						<SideCartProduct />
						<SideCartProduct />
						<SideCartProduct />
						<SideCartProduct />
						<SideCartProduct />
					</>
				)}
			</div>
			<div className="c-side-cart__footer">
				{cart && (
					<div className="c-side-cart__subtotal">
						<span className="c-side-cart__subtotal-title">Subtotal</span>
						<span className="c-side-cart__subtotal-price">R$ 583,79</span>
					</div>
				)}

				<Button color="primary" className="c-side-cart__see-cart">
					Ver meu carrinho (1)
				</Button>
				<Button color="secondary" className="c-side-cart__checkout">
					Checkout
				</Button>

				{!cart && (
					<button
						type="button"
						className="c-side-cart__continue-shopping"
						onClick={handleClickToggleSideCart}
					>
						Continuar comprando
					</button>
				)}
			</div>
		</div>
	)
}
