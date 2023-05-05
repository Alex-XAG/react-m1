import TransactionItem from './TransactionItem';
import transactions from '../../transactions';
import css from './Transactions.module.css';

const TransactionList = ({ type, amount, currency }) => {
  return (
    <table className={css.transaction__history}>
      <thead className={css.transaction__head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transaction__list}>
        {transactions.map(transaction => {
          return (
            <TransactionItem
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionList;
