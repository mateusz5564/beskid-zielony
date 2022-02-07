import S from './Styled';

const ParagraphWithIcon = ({className, children, iconSrc, right}) => {
  return ( 
    <S.Wrapper className={className} right={right}>
      <img className='corner left' src="img/decorations/left_corner.png" alt="" />
      <img className='corner right' src="img/decorations/right_corner.png" alt="" />
      <img className='icon' src={iconSrc} alt="" />
      <p>{children}</p>
    </S.Wrapper>
   );
}
 
export default ParagraphWithIcon;