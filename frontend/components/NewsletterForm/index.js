import { useState } from "react";
import Button from "../shared/Button";
import BoldText from "../shared/BoldText";
import S from "./Styled";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = e => {
    setEmail(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_ENDPOINT}/newsletter-emails`, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data: { email } }),
      });

      const json = await res.json();

      if (res.ok) {
        setErrorMsg("");
        setEmail("");
      } else {
        switch (json.error.message) {
          case "email must be at least 1 characters":
            setErrorMsg("Wprowadź adres email");
            break;
          case "email must be a valid email":
            setErrorMsg("Wprowadź prawidłowy adres email");
            break;
          case "This attribute must be unique":
            setErrorMsg("Adres już zapisany");
            break;
          default:
            setErrorMsg("Nie udało się zapisać");
        }
      }
    } catch (err) {
      setErrorMsg("Nie udało się zapisać");
    }
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <p>
        Osoby zainteresowane otrzymywaniem biuletynu (newslettera){" "}
        <BoldText>„Informacja Czwartkowa”</BoldText> proszone są o wypełnienie formularza
        kontaktowego:
      </p>
      <S.TextField type="text" placeholder="Wpisz swój email" value={email} isInvalid={!!errorMsg} onChange={onChange} />
      <p className="errorMsg"> {errorMsg}</p>
      <Button>Zapisz się do newslettera</Button>
    </S.Form>
  );
};

export default NewsletterForm;
