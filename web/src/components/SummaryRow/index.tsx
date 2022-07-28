/* eslint-disable react/react-in-jsx-scope */

interface PropTypes {
  date: string;
  transferSend?: string;
  transferReceived?: string;
  withdraw?: string;
  deposit?: string;
  fee?: string;
}

export default function SummaryRow ({
  date,
  transferSend,
  transferReceived,
  withdraw,
  deposit,
  fee
}: PropTypes) {
  return (
    <div
      className={
        'w-11/12 bg-transparent flex flex-col gap-0.5 justify-start items-start my-1'
      }
    >
      <h2
        className={
          'text-sm text-input-text'
        }
      >
        {date}
      </h2>

      {
        transferSend &&
        <p
          className='w-full flex justify-between'
        >
          <span className='text-input-inactive'>Transferências enviadas</span>
          <span className='text-input-error'>- ${transferSend}</span>
        </p>
      }

      {
        withdraw &&
        <p
          className='w-full flex justify-between'
        >
          <span className='text-input-inactive'>Saques</span>
          <span className='text-input-error'>- ${withdraw}</span>
        </p>
      }

      {
        fee &&
        <p
          className='w-full flex justify-between'
        >
          <span className='text-input-inactive'>Tarifas bancárias</span>
          <span className='text-input-error'>- ${fee}</span>
        </p>
      }

      {
        deposit &&
        <p
          className='w-full flex justify-between'
        >
          <span className='text-input-inactive'>Depósitos</span>
          <span className='text-[#53D496]'>${deposit}</span>
        </p>
      }

      {
        transferReceived &&
        <p
          className='w-full flex justify-between'
        >
          <span className='text-input-inactive'>Transferências recebidas</span>
          <span className='text-[#53D496]'>${transferReceived}</span>
        </p>
      }

    </div>
  );
}
