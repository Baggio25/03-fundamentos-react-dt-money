import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>06/07/2023</td>
            </tr>
            <tr>
              <td width="40%">Pagamento de contas</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 120,00</PriceHighlight>
              </td>
              <td>Contas</td>
              <td>06/07/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
