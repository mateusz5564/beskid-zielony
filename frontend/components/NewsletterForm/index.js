import Button from "../shared/Button";
import BoldText from "../shared/BoldText";
import S from "./Styled";

const NewsletterForm = () => {
  return (
    <S.Form>
      <p>
        Osoby zainteresowane otrzymywaniem biuletynu (newslettera){" "}
        <BoldText>„Informacja Czwartkowa”</BoldText> proszone są o wypełnienie formularza
        kontaktowego:
      </p>
      <input type="text" placeholder="wpisz swój email" />
      <Button>Zapisz się do newslettera</Button>
    </S.Form>
  );
};

export default NewsletterForm;
