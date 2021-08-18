import { useState } from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { Checkbox } from '../../components/Form/Checkbox'

export function NewAccount() {
	const [showMessageSuccess, setShowMessageSuccess] = useState(false)

	function handleSubmit(event) {
		event.preventDefault()
		setShowMessageSuccess(!showMessageSuccess)
	}

	return (
		<>
			<Breadcrumb
				className="my-5"
				list={[
					{ href: '#', link: 'Home' },
					{ href: '#', link: 'Cadastre-se' },
				]}
			/>

			<div className="l-new-account">
				<h1 className="l-new-account__title">
					{showMessageSuccess ? 'Conta Criada com Sucesso!' : 'Cadastre-se'}
				</h1>
				<div className="l-new-account__line"></div>

				{showMessageSuccess && (
					<p
						className={`l-new-account__information ${
							showMessageSuccess ? 'l-new-account__information--is-center' : ''
						}`}
					>
						Em instantes você será direcionado para a Home.
					</p>
				)}

				{!showMessageSuccess && (
					<form className="l-new-account__form" onSubmit={handleSubmit}>
						<Input
							label="*Nome"
							placeholder="Digite o seu nome"
							message="nome inválido"
							color="primary"
						/>

						<Input
							label="*Sobrenome"
							placeholder="Digite o seu sobrenome"
							showIcon={true}
							message="sobrenome inválido"
							color="primary"
						/>

						<Input
							label="*Email"
							placeholder="Digite o seu e-mail"
							showIcon={true}
							message="e-mail inválido"
							color="primary"
							iconType="email"
						/>

						<Input
							label="*Senha"
							placeholder="Digite a sua senha"
							showIcon={true}
							message="senha inválida"
							color="primary"
							iconType="lock"
						/>

						<Input
							label="*Confirmação de senha"
							placeholder="Confirme a sua senha"
							showIcon={true}
							message="senha inválida"
							color="primary"
							iconType="lock"
						/>

						<Checkbox>Desejo receber ofertas por E-mail.</Checkbox>

						<div className="l-new-account__container-button">
							<Button>Criar conta</Button>
							<Button color="secondary">Possui uma conta? Faça Login</Button>
						</div>
					</form>
				)}
			</div>
		</>
	)
}
