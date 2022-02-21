import S from './Styled';

const ParagraphWithIcon = ({className, children, iconSrc, right}) => {
  return ( 
    <S.Wrapper className={className} right={right}>
      <img className='icon' src={iconSrc} alt="" />
      <p className='text'>{children}</p>
    </S.Wrapper>
   );
}
 
export default ParagraphWithIcon;