'use client';

import styled from 'styled-components';
import ModalTransaction from '../../modal/transaction';
import TransactionButtonController, { TRANSACTION_TYPE } from './transactionButtonController';

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



function TransactionButton(props : {
  type : TRANSACTION_TYPE,
  param : {}
}) {
  console.log('props.param : ',props.param)
  const { send, isLoading, isSuccess, txData } = TransactionButtonController(props.type);

  return (
    <div>
    {
      !isLoading ?
       <Button onClick={() => send(props.param)}>
        Send Transaction
      </Button>
      :
        <p>
          Transaction Pending
        </p>
    }
    {isSuccess && <ModalTransaction isOpend={true} message={JSON.stringify(txData)}/>}
   </div>
  );
}

export default TransactionButton;
