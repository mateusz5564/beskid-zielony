import Image from "next/image";
import S from "./Styled";

const ParagraphWithIcon = ({ className, children, icon, right }) => {
  return (
    <S.Wrapper className={className} right={right}>
      <div className="icon">
        <Image layout="responsive" priority src={icon} alt="" />
      </div>
      <p className="text">{children}</p>
    </S.Wrapper>
  );
};

export default ParagraphWithIcon;
