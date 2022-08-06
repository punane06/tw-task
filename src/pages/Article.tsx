import { useEffect, useState } from "react";

function Article() {
  const [articelTitle, setArticelTitle] = useState([]);
  const [articelIntro, setArticelIntro] = useState([]);
  const [articelBody, setArticelBody] = useState("");
  const articleDbUrl = "https://midaiganes.irw.ee/api/list/972d2b8a";

  useEffect(() => {
    fetch(articleDbUrl)
      .then((res) => res.json())
      .then((data) => {
        setArticelTitle(data.title);
        setArticelIntro(data.intro);
        setArticelBody(data.body);
      });
  });

  const bodyText = articelBody
    .replace("<p>", "")
    .replace("reprehenderit.</p>", "reprehenderit.")
    .split("</p>\n<p>");

  for (let i = 0; i > bodyText.length; i--) {
    return (
      <>
        <br />
        {bodyText[i]}
      </>
    );
  }
  console.log(bodyText);

  return (
    <div>
      Article
      <div>{articelTitle}</div>
      <div>{articelIntro}</div>
      <div>{articelBody}</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>{bodyText}</div>
    </div>
  );
}

export default Article;
