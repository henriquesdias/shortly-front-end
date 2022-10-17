import { IoTrashSharp } from "react-icons/io5";

export default function Url({ url, shortUrl, visitCount, id }) {
  return (
    <li>
      <div>
        <span>{url}</span>
        <span>{shortUrl}</span>
        <span>Quantidade de visitantes: {visitCount}</span>
      </div>
      <div>
        <IoTrashSharp></IoTrashSharp>
      </div>
    </li>
  );
}
