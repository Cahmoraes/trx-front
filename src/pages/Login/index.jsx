import { Input } from '../../components/Form/Input'
import { Hiperlink } from '../../components/Hiperlink'
import { Button } from '../../components/Form/Button'

export function Login() {
	return (
		<div className="l-login">
			<h1 className="l-login__title">Acesse a sua conta</h1>
			<div className="l-login__line"></div>

			<form className="l-login__form">
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
					message="Senha inválida. Por favor, verifique o campo e tente de novo."
					color="error"
					iconType="lock"
					className="my-4"
					type="password"
				/>

				<div className="l-login__hiperlink">
					<Hiperlink size="small" href="/">
						Esqueci minha senha
					</Hiperlink>
				</div>

				<div className="l-login__container-button">
					<Button>Entrar</Button>
					<Button color="secondary">Não tem cadastro? Cadastre-se</Button>
				</div>
			</form>
		</div>
	)
}
