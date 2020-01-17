import styled from "styled-components";

export const Input = styled.div`
  label {
    color: #acacac;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
  }

  && + && {
    margin-top: 20px;
  }
`;

export const Container = styled.div`
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  form {
    margin-top: 30px;

    .input-group {
      margin-top: 20px;
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr;

      .input-block {
        margin-top: 0;

        label {
          color: #acacac;
          font-size: 14px;
          font-weight: bold;
          display: block;
        }

        input {
          width: 100%;
          height: 32px;
          font-size: 14px;
          color: #666;
          border: 0;
          border-bottom: 1px solid #eee;
        }
      }
    }

    button {
      width: 100%;
      border: 0;
      margin-top: 30px;
      background: #7d40e7;
      border-radius: 2px;
      padding: 15px 20px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      transition: background 0.5s;
    }

    button:hover{
      background: #6931ca;
    }
  }
`;
