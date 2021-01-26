import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    font-family: 'Lato', sans-serif;

  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
  }
  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 10px 0;
  }

    input {
      margin-bottom: 10px;
      height: 38px;
      border-radius: ${({ theme }) => theme.borderRadius};
      background-color: ${({ theme }) => theme.colors.mainBg};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      outline: none;
      padding: 0 16px;
      color: ${({ theme }) => theme.colors.contrastText};
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
    }
    button {
      height: 38px;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      background-color: ${({ theme }) => theme.colors.secondary};
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
        0px 2px 2px rgba(0, 0, 0, 0.24);
      cursor: pointer;
   }
   button:disabled {
    background-color: gray;  
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
