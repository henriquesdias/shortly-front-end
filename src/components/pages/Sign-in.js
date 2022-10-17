import { signIn } from "../../services/axios";
import PageContainerStyle from "../../styles/Page-container";
import Header from "../Header";
import Title from "../Title";
import FormStyle from "../../styles/Form";
import UserContext from "../../context/user";

import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

function Inputs({ form, handleForm, disabled }) {
  return (
    <>
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
    </>
  );
}

export default function SignIn() {
  const [disabled, setDisabled] = useState(false);
  const { setUser } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    setDisabled(true);
    signIn(form)
      .then((answer) => {
        setDisabled(false);
        setUser({ ...form, token: answer.data.token });
        localStorage.setItem(
          "user",
          JSON.stringify({ ...form, token: answer.data.token })
        );
        navigate("/");
      })
      .catch((answer) => {
        setDisabled(false);
        alert("Dados inválidos/usuário não existe");
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
          Entrar
        </button>
      </FormStyle>
    </PageContainerStyle>
  );
}
