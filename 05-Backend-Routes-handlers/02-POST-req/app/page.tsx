const page = async () => {
  const res = await fetch("http://localhost:3000/api/home");
  const data = await res.json();

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default page;
