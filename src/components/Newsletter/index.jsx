import { Button } from '../Form/Button'
import { Input } from '../Form/Input'

export function NewsLetter() {
	return (
		<div className="l-newsletter">
			<div className="container">
				<div className="row align-items-end">
					<div className="col-lg-3 offset-lg-1 l-newsletter__button-assine">
						<p className="l-newsletter__text-assine">
							Assine nossa <b>Newsletter</b> e receba
						</p>
						<Button color="tertiary">Novidades Exclusivas.</Button>
					</div>
					<div className="col-lg-2 l-newsletter__input-box">
						<Input label="Nome" placeholder="Digite seu nome" />
					</div>
					<div className="col-lg-3 l-newsletter__input-box">
						<Input label="E-mail" placeholder="Digite seu E-mail" />
					</div>
					<div className="col-lg-2 l-newsletter__input-box">
						<Button color="primary">Cadastrar</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
