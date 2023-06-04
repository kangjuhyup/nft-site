'use client';

import TransactionButtonController from '@/components/controller/transactionButton';
import styled from 'styled-components';
import Modal from '../modal';

const TransactionButton = styled.button`
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

function Button() {
  const { send , isLoading, isSuccess, txData } = TransactionButtonController()
  return (
    <div>
    {
      !isLoading ?
       <TransactionButton onClick={() => send()}>
        Send Transaction
      </TransactionButton>
      :
        <p>
          Transaction Pending
        </p>
    }
    {isSuccess && <Modal message={JSON.stringify(txData)}/>}
   </div>
  );
}

export default Button;
