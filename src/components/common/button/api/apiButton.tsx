'use client';

import styled from 'styled-components';
import ApiButtonController, { API_TYPE } from './apiButtonController';

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;



const ApiButton =(props : {
  type : API_TYPE,
  param : {}
}) => {
  const { setInfo, loading, error } = ApiButtonController(props.type);

  return (
    <div>
    {
      !loading ?
       <Button onClick={() => setInfo(props.param)}>
        Change User Infomation
      </Button>
      :
        <p>
          isLoading...
        </p>
    }
   </div>
  );
}

export default ApiButton;
