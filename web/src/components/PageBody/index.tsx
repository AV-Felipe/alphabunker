/* eslint-disable react/react-in-jsx-scope */


interface PropTypes {
  children: React.ReactNode;
}

export default function PageBody ({
  children
}: PropTypes) {
  return (
    <div
      className={
        'w-screen h-full flex flex-col bg-body-light-200 items-center justify-start'
      }
    >
      {children}
    </div>
  );
}
