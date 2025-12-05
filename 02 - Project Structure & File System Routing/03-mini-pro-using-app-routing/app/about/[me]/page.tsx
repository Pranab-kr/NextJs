const page = ({params}: {params: {me: string}}) => {
  return (
    <div className="text-blue-100">Page id: {params.me}</div>
  );
};

export default page;
