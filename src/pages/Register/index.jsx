import { Input } from "../../components/Form/Input";
import { Title } from "../../components/Title";
import { Checkbox } from "../../components/Form/Checkbox";
import { Button } from "../../components/Form/Button";
import { BackLinkMobile } from "../../components/BackLinkMobile";

import { useEffect, useState } from "react";

export function Register(params) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      !name.trim() ||
      !lastname.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      return setDisable(true);
    } else {
      return setDisable(false);
    }
  }, [name, email, lastname, password, confirmPassword]);

  return (
    <main>
      <section id="register" className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="register-content">
              <BackLinkMobile to="/" />
              <Title
                titleTag="h2"
                size="heading-2"
                weight="bold"
                color="primary"
                className="register-title"
              >
                Cadastre-se
              </Title>

              <p className="register-content__description">
                Preencha o formulário abaixo para criar sua conta
              </p>

              <form action="" className="register__form">
                <Input
                  label="Nome*"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  label="Sobrenome*"
                  placeholder="Digite seu sobrenome"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Input
                  label="Email*"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <p className="register__observation">
                  Sua senha deve ter entre 6 e 12 caracteres e incluir pelo
                  menos um número e letras maiúsculas e minúsculas.
                </p>

                <Input
                  label="Senha*"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  label="Confirma sua senha*"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <div class="register__checkbox">
                  <Checkbox id="2" name="checkbox-name">
                    Desejo receber ofertas por e-mail
                  </Checkbox>
                </div>

                <Button color="primary" disabled={disable} type="button">
                  Criar Conta
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
