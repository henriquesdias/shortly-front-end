import { signUp } from "../../services/axios";
import PageContainerStyle from "../../styles/Page-container";
import Header from "../Header";
import Title from "../Title";
import FormStyle from "../../styles/Form";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Inputs({ form, handleForm, disabled }) {
  return (
    <>
      <input
        type="text"
        placeholder="Nome"
        required
        name="name"
        value={form.name}
        onChange={handleForm}
        readOnly={disabled}
      />
      <input
        type="email"
        placeholder="Email"
        required
        name="email"
        value={form.email}
        onChange={handleForm}
        readOnly={disabled}
      />
      <input
        type="password"
        placeholder="Senha"
        required
        name="password"
        value={form.password}
        onChange={handleForm}
        readOnly={disabled}
      />
      <input
        type="password"
        placeholder="Confirmar Senha"
        required
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleForm}
        readOnly={disabled}
      />
    </>
  );
}

export default function SignUp() {
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    setDisabled(true);
    signUp(form)
      .then(() => {
        setDisabled(false);
        navigate("/");
      })
      .catch((answer) => {
        setDisabled(false);
        alert("Dados inválidos/email já em uso");
        console.log(answer);
      });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <PageContainerStyle>
      <Header></Header>
      <Title></Title>
      <FormStyle onSubmit={submitData}>
        <Inputs
          disabled={disabled}
          handleForm={handleForm}
          form={form}
        ></Inputs>
        <button type="submit" disabled={disabled}>
          Criar Conta
        </button>
      </FormStyle>
    </PageContainerStyle>
  );
}
