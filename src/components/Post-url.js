import { useContext, useState } from "react";

import UserContext from "../context/user";
import { postUrl } from "../services/axios";

export default function PostUrl() {
  const [form, setForm] = useState({
    url: "",
  });
  const [disabled, setDisabled] = useState(false);
  const { user } = useContext(UserContext);
  function submitData(event) {
    event.preventDefault();
    setDisabled(true);
    postUrl(
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
      form
    )
      .catch(() => {
        setDisabled(false);
        alert("Formato de url inválido");
      })
      .then(() => {
        window.location.reload();
      });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <form onSubmit={submitData}>
        <input
          type="text"
          placeholder="Links que cabem no bolso"
          name="url"
          value={form.url}
          onChange={handleForm}
          readOnly={disabled}
          required
        />
        <button type="submit" disabled={disabled}>
          Encurtar link
        </button>
      </form>
    </div>
  );
}
