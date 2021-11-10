import { Toaster } from 'react-hot-toast';

function Toast() {
  return (
    <Toaster
      duration="10000"
      position="top-center"
      containerStyle={{ top: 100 }}
      toastOptions={{
        style: {
          border: '1px solid #52555f',
          padding: '14px',
          color: '#52555f',
        },
      }}
    />
  );
}

export default Toast;
