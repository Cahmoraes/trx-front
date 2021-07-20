import { useState, useEffect } from "react";

import { Input } from "../../components/Form/Input";
import { Title } from "../../components/Title";
import { BackLinkMobile } from "../../components/BackLinkMobile";
import { Button } from "../../components/Form/Button";

function useFormValidate({ initialValues }) {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    const fieldName = event.target.getAttribute("name");
    const value = event.target.value;
    console.log(values);

    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  return {
    values,
    handleChange,
  };
}

export function NewPassword() {
  const [disable, setDisable] = useState(true);

  const formValidate = useFormValidate({
    initialValues: {
      userEmail: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  useEffect(() => {
    if (
      !formValidate.values.userEmail ||
      !formValidate.values.newPassword ||
      !formValidate.values.confirmNewPassword
    ) {
      return setDisable(true);
    } else {
      return setDisable(false);
    }
  }, [formValidate]);

  return (
    <main>
      <section id="new-password" className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <BackLinkMobile to="/" />
            <div className="new-password__content">
              <Title
                titleTag="h2"
                size="heading-2"
                weight="bold"
                color="primary"
                className="new-password__title"
              >
                Criar nova senha
              </Title>

              <p className="new-password__text">
                Por favor informe novamente seu endereço de e-mail.
              </p>

              <form action="" className="new-password__form">
                <Input
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  name="userEmail"
                  onChange={formValidate.handleChange}
                  value={formValidate.values.userEmail}
                />

                <p className="new-password__text">
                  Sua senha deve ter entre 6 e 12 caracteres e incluir pelo
                  menos um número e letras maiúsculas e minúsculas.
                </p>
                <Input
                  label="Senha"
                  placeholder="Crie sua senha"
                  name="newPassword"
                  onChange={formValidate.handleChange}
                  value={formValidate.values.newPassword}
                />

                <Input
                  label="Confirmar senha"
                  placeholder="Confirme sua senha"
                  type="password"
                  name="confirmNewPassword"
                  onChange={formValidate.handleChange}
                  value={formValidate.values.confirmNewPassword}
                />
                <Button color="primary" disabled={disable}>
                  Criar nova senha
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
