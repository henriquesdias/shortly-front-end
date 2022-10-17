import PageContainerStyle from "../../styles/Page-container";
import Title from "../Title";
import Header from "../Header";
import UserContext from "../../context/user";
import { getMyUrls } from "../../services/axios";
import Url from "../Url";
import UrlsStyle from "../../styles/Urls";

import { useContext, useEffect, useState } from "react";

export default function Home() {
  const [urls, setUrls] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    getMyUrls({
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((answer) => {
        setUrls(answer.data.shortenedUrls);
      })
      .catch((answer) => {
        console.log(answer);
      });
  }, []);
  return (
    <PageContainerStyle>
      <Header></Header>
      <Title></Title>
      <UrlsStyle>
        <ul>
          {urls.map((e, index) => (
            <Url
              url={e.url}
              shortUrl={e.shortUrl}
              visitCount={e.visitCount}
              key={index}
              id={e.id}
            ></Url>
          ))}
        </ul>
      </UrlsStyle>
    </PageContainerStyle>
  );
}

function PostUrl() {
  const [form, setForm] = useState({
    url: "",
  });
  const [disabled, setDisabled] = useState(false);
  function submitData(event) {
    event.preventDefault();
    setDisabled(true);
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
