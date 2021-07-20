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

export function Login() {
  const [disable, setDisable] = useState(true);

  const formValidate = useFormValidate({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  useEffect(() => {
    if (!formValidate.values.userEmail || !formValidate.values.userPassword) {
      return setDisable(true);
    } else {
      return setDisable(false);
    }
  }, [formValidate]);

  return (
    <main>
      <section id="login" className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <BackLinkMobile to="/" />
            <div className="login__content">
              <Title
                titleTag="h2"
                size="heading-2"
                weight="bold"
                color="primary"
                className="login__title"
              >
                Login
              </Title>

              <p className="login__text">
                Para continuar, entre com sua conta Confiança Delivery
              </p>

              <form action="" className="login__form">
                <Input
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  name="userEmail"
                  onChange={formValidate.handleChange}
                  value={formValidate.values.userEmail}
                />
                <Input
                  label="Senha"
                  placeholder="Digite sua senha"
                  type="password"
                  link="Esqueceu sua senha?"
                  href="/"
                  name="userPassword"
                  onChange={formValidate.handleChange}
                  value={formValidate.values.userPassword}
                />
                <Button color="primary" disabled={disable}>
                  Entrar
                </Button>
              </form>

              <div className="login__new-account">
                <p>Ainda não possui conta na Confiança Delivery?</p>
                <Button color="white">Criar conta</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
