import { useState } from 'react'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'

export function RecoveryPassword() {
	const [showMessageRecovery, setShowMessageRecovery] = useState(false)

	function handleSubmit(event) {
		event.preventDefault()
		setShowMessageRecovery(!showMessageRecovery)
	}

	return (
		<>
			<Breadcrumb
				className="my-5"
				list={[
					{ href: '#', link: 'Home' },
					{ href: '#', link: 'Recuperar Senha' },
				]}
			/>

			<div className="l-recovery">
				<h1 className="l-recovery__title">Recuperar Senha</h1>
				<div className="l-recovery__line"></div>

				<p
					className={`l-recovery__information ${
						showMessageRecovery ? 'l-recovery__information--is-center' : ''
					}`}
				>
					{!showMessageRecovery
						? 'Por favor, insira o endereço de email associado à sua conta. Enviaremos um link seguro por e-mail para redefinir sua senha.'
						: 'Enviamos um link para redefinir sua senha para o endereço de e-mail fornecido. Você poderá entrar quando receber este link.'}
				</p>

				{!showMessageRecovery && (
					<form className="l-recovery__form" onSubmit={handleSubmit}>
						<Input
							label="*Email"
							placeholder="Digite o seu e-mail"
							showIcon={true}
							message="e-mail inválido"
							color="primary"
							iconType="email"
						/>

						<div className="l-recovery__container-button">
							<Button>Recuperar Senha</Button>
						</div>
					</form>
				)}
			</div>
		</>
	)
}
