import { StyledButton } from "./styles/Button.styled"

const Button = ({backgroundColor, text, textColor, onClick}) => {
    return (
    <StyledButton 
    onClick={onClick}
    style={{
      backgroundColor: backgroundColor,
      color:textColor}} 
    className='btn'>{text}
    </StyledButton>
  )
}


export default Button