import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 1.5rem;
  max-width: 600px;
  margin: 0 auto 0 auto;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  .form-input,
  select {
    border-radius: 0px;
    padding-left: 0px;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-bottom: 1px solid blue;
    margin-bottom: 20px;
  }
  @media (min-width: 579px) {
    margin-top: 10px;
  }
`;
