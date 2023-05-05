import css from './Transactions.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.transaction__item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
