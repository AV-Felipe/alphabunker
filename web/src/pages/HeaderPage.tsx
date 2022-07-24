/* eslint-disable react/react-in-jsx-scope */
import Button from '../components/Button';
import Header from '../components/Header';
import HeaderRow from '../components/HeaderRow';
import summaryIcon from '../assets/vectors/icon-summary.svg';
import transferIcon from '../assets/vectors/icon-transfer.svg';
import depositIcon from '../assets/vectors/icon-deposit.svg';
import withdrawIcon from '../assets/vectors/icon-withdraw.svg';
import userIcon from '../assets/vectors/icon-user.svg';

export default function HeaderPage () {
  return (
    <Header>

      <HeaderRow>

        <p>Bem-vindo Felipe</p>
        <img src={userIcon} />

      </HeaderRow>

      <HeaderRow>

        <Button type="button" source={summaryIcon} link="/summary" onClick={() => console.log('oi')}>
          Extrato
        </Button>

        <Button type="button" source={transferIcon} link="/transfer" onClick={() => console.log('oi')}>
          Transferir
        </Button>

        <Button type="button" source={depositIcon} link="/deposit" onClick={() => console.log('oi')}>
          Depositar
        </Button>

        <Button type="button" source={withdrawIcon} link="/withdraw" onClick={() => console.log('oi')}>
          Sacar
        </Button>

      </HeaderRow>


    </Header>
  );
}
