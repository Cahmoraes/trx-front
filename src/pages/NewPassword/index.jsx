import { useState } from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'

export function NewPassword() {
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
					{ href: '#', link: 'Nova Senha' },
				]}
			/>

			<div className="l-new-password">
				<h1 className="l-new-password__title">
					{showMessageSuccess ? 'Senha Atualizada' : 'Nova Senha'}
				</h1>
				<div className="l-new-password__line"></div>

				{showMessageSuccess && (
					<p
						className={`l-new-password__information ${
							showMessageSuccess ? 'l-new-password__information--is-center' : ''
						}`}
					>
						Sua senha foi atualiza com sucesso!
					</p>
				)}

				{!showMessageSuccess && (
					<form className="l-new-password__form" onSubmit={handleSubmit}>
						<Input
							label="*E-mail"
							placeholder="Digite o seu e-mail"
							showIcon={true}
							message="e-mail inválido"
							color="primary"
							iconType="email"
						/>

						<Input
							label="*Nova senha"
							placeholder="Digite a sua nova senha"
							showIcon={true}
							message="senha inválida"
							color="primary"
							iconType="lock"
						/>

						<Input
							label="*Confirmação sua nova senha"
							placeholder="Digite novamente sua nova senha"
							showIcon={true}
							message="confirmação de senha inválida"
							color="primary"
							iconType="lock"
						/>

						<div className="l-new-password__container-button">
							<Button>Redefinir senha</Button>
						</div>
					</form>
				)}
			</div>
		</>
	)
}
