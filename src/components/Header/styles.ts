import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${props => props.theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  padding: 0 1.25rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  color: ${props => props.theme.white};
  background: ${props => props.theme["green-500"]};


  &:hover {
    background: ${props => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
`;