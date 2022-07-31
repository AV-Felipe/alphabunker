/* eslint-disable react/react-in-jsx-scope */
import userIcon from '../../assets/vectors/icon-user.svg';

interface PropTypes {
  userName: string;
}

export default function HeaderWelcome ({
  userName,
}: PropTypes) {
  return (
    <div
      className={
        'w-5/6 bg-transparent flex justify-between my-2 p-2'
      }
    >

      <p
        className={
          'text-header-light text-xl flex justify-between'
        }
      >
        Bem-vind@, {userName}
      </p>

      <img src={userIcon} />



    </div>
  );
}
