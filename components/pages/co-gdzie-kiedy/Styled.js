import styled from "styled-components";
import ParagraphWithIcon from "../../ParagraphWithIcon/ParagpraphWithIcon";

const Features = styled.section`
  text-align: center;
  margin-top: 5rem;

  h1 {
    font-size: 4rem;
    color: ${({theme}) => theme.colors.darkGreen[500]}
  }

  h2 {
    max-width: 60rem;
    margin: 0 auto;
    margin-bottom: 5rem;
    color: ${({theme}) => theme.colors.darkGreen[500]};
    font-size: 2rem;
    font-weight: 500;
  }
`;

const MParagraphWithIcon = styled(ParagraphWithIcon)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const HelpUs = styled.section`
  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.darkGreen[500]};
  padding: 6.4rem 0;

  img {
    width: 100%;
  }

  h3 {
    margin: 3.2rem 0;
    font-weight: 400;
    font-size: 2rem;
  }

  p {
    font-size: 2rem;
    text-align: right;
    margin-left: auto;
    max-width: 30rem;
  }
`;

const Ads = styled.section`
  margin-top: 5rem;

  .swiper {
    margin: 2.4rem 0;
  }
`;

const Newsletter = styled.section`
  background: ${({theme}) => `linear-gradient(${theme.colors.darkYellow[500]}, ${theme.colors.orange[500]})`};
  padding: 6rem 0;
  display: flex;
  justify-content: center;
`;

const Styled = {Features,  HelpUs, MParagraphWithIcon, Newsletter, Ads};

export default Styled;
