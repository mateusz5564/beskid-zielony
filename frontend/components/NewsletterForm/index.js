import { useState } from "react";
import Button from "../shared/Button";
import BoldText from "../shared/BoldText";
import SrOnly from "../shared/SrOnly";
import S from "./Styled";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChange = e => {
    setEmail(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_ENDPOINT}/newsletter-emails`, {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data: { email } }),
      });

      const json = await res.json();

      if (res.ok) {
        setEmail("");
        setIsLoading(false);
        setErrorMsg("");
        setSuccessMsg("Zapisano do newslettera");
      } else {
        setEmail("");
        setIsLoading(false);
        setSuccessMsg("");
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
      setEmail("");
      setIsLoading(false);
      setErrorMsg("Nie udało się zapisać");
      setSuccessMsg("");
    }
  };

  return (
    <S.Form onSubmit={onSubmit} aria-describedby="newsletterFormDesc">
      <p id="newsletterFormDesc">
        Osoby zainteresowane otrzymywaniem biuletynu (newslettera){" "}
        <BoldText>„Informacja Czwartkowa”</BoldText> proszone są o wypełnienie formularza
        kontaktowego:
      </p>
      <SrOnly>
        <label htmlFor="email">Wpisz swój adres email</label>
      </SrOnly>
      <S.TextField
        type="text"
        id="email"
        placeholder="Wpisz swój email"
        value={email}
        isInvalid={!!errorMsg}
        onChange={onChange}
      />
      <p className="errorMsg" aria-live="assertive">
        {errorMsg}
      </p>
      <SrOnly ariaLive="assertive">
        {isLoading && "Wysyłanie formularza"}
        {successMsg && "Zapisano do newslettera"}
      </SrOnly>
      <Button disabled={successMsg || isLoading}>
        {successMsg || "Zapisz się do newslettera"}
      </Button>
    </S.Form>
  );
};

export default NewsletterForm;
