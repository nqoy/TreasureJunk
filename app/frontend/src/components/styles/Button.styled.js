import styled from "styled-components";

export const StyledButton = styled.button`
border-radius: 30px;
border: none;
cursor: pointer;
font-size: 15px;
font-weight:600;
padding: 10px 30px;
margin: 10px;

&:hover {
    opacity:0.9;
    transform: scale(0.98);
}
`

export const StyledFormButton = styled.button`
border-radius: 20px;
border: none;
cursor: pointer;
font-size: 10px;
font-weight:600;
padding: 5px 20px;
margin: 5px;

&:hover {
    opacity:0.9;
    transform: scale(0.98);
}
`