import { notFound } from "next/navigation";

const reviewPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const reviewId = parseInt(id);

  if (reviewId > 10) {
    return notFound();
  }
  return (
    <div>
      <h1>Review ID: {id}</h1>
    </div>
  );
};

export default reviewPage;
