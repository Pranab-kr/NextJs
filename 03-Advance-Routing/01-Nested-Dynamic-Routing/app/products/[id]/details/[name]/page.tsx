const page = async ({params}: {params: Promise<{id: string, name: string}>}) => {
  const {id, name} = await params;
  return (
    <div>Product id: {id}, name: {name}</div>
  );
};

export default page;
