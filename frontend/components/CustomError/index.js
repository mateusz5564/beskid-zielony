import Image from "next/image";
import S from "./Styled";
import Container from "../shared/Container";

export default function Custom404({text, illustration}) {
  return (
    <S.Wrapper>
      <Container $textAlign="center">
        <h1>{text}</h1>
        <S.Illustration>
          <Image src={illustration} layout="responsive"/>
        </S.Illustration>
      </Container>
    </S.Wrapper>
  );
}
