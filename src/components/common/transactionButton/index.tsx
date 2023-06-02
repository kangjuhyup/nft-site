'use client';

import TransactionButtonController from '@/components/view_controller/transactionButton';
import styled from 'styled-components';

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
  const { send, error } = TransactionButtonController()
  return (
    <TransactionButton onClick={() => send()}>
      Send Transaction
    </TransactionButton>
  );
}

export default Button;
