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

export function RecoveryPassword() {
  const [disable, setDisable] = useState(true);

  const formValidate = useFormValidate({
    initialValues: {
      userEmail: "",
    },
  });

  useEffect(() => {
    if (!formValidate.values.userEmail) {
      return setDisable(true);
    } else {
      return setDisable(false);
    }
  }, [formValidate]);

  return (
    <main>
      <section id="recovery-password" className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <BackLinkMobile to="/" />
            <div className="recovery-password__content">
              <Title
                titleTag="h2"
                size="heading-2"
                weight="bold"
                color="primary"
                className="recovery-password__title"
              >
                Recuperar senha
              </Title>

              <p className="recovery-password__text">
                Por favor informe o seu endereço de e-mail. As instruções para
                redefinição de senha serão enviadas para o e-mail cadastrado.
              </p>

              <form action="" className="recovery-password__form">
                <Input
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  name="userEmail"
                  onChange={formValidate.handleChange}
                  value={formValidate.values.userEmail}
                />

                <Button color="primary" disabled={disable}>
                  Continuar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
