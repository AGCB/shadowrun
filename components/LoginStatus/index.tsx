type LogInStatusProps = {
  status: string;
};

const LogInStatus = ({ status }: LogInStatusProps) => {
  return <div>{status}</div>;
};

export default LogInStatus;
