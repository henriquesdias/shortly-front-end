import PageContainerStyle from "../../styles/Page-container";
import Title from "../Title";
import Header from "../Header";
import UserContext from "../../context/user";
import { getMyUrls } from "../../services/axios";
import Url from "../Url";
import UrlsStyle from "../../styles/Urls";
import PostUrl from "../Post-url";

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
        setUrls(answer.data.shortenedUrls.reverse());
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
        <PostUrl></PostUrl>
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
