const page = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;
  console.log(id)
  return (
    <div>Products id: {id}</div>
  );
};

export default page;
