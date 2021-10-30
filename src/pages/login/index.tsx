import React, { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Redirect, useHistory } from "react-router";
import Button from "../../components/button";
import Input from "../../components/input";
import logo from "../../image/Mask Group.png";
import { AuthContext } from "../../providers/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  Container,
  ContainerForm,
  Buttons,
  ContainerInfo,
  Field,
  Phrase,
  Ball,
} from "./styles";

interface UserData {
  email: string;
  password: string;
}

export default function Login() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const history = useHistory();
  const { signIn } = useContext(AuthContext);
  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const handleForm = (data: UserData) => {
    signIn(data, history);
  };

  if (localStorage.getItem("accessToken")) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <ContainerForm onSubmit={handleSubmit(handleForm)}>
        <div className="title">
          <h3>Login</h3>
        </div>
        <Input
          register={register}
          name="email"
          label="E-mail"
          placeholder="Digite seu email"
          error={errors.email?.message}
        />
        <Input
          register={register}
          type="password"
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          error={errors.password?.message}
        />
        <Buttons>
          <Button style={{ height: "60px" }} color type="submit">
            Logar
          </Button>
        </Buttons>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Buttons>
          <Button
            style={{ height: "60px" }}
            color={false}
            onClick={() => history.push("/register")}
          >
            Cadastrar
          </Button>
        </Buttons>
      </ContainerForm>
      <ContainerInfo>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Phrase>
          <div className="icon">
            <FiShoppingBag />
          </div>
          <div className="info">
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os
              <strong> melhores </strong>
              ingredientes.
            </p>
          </div>
        </Phrase>
        <Field>
          {array.map((item) => (
            <Ball />
          ))}
        </Field>
      </ContainerInfo>
    </Container>
  );
}
