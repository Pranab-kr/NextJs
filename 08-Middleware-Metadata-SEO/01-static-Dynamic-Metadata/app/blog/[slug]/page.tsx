//metadata only works in server components

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: `Blog Post - ${slug}`,
    description: `Read our latest blog post about ${slug}.`,
  };
}

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <div>{slug}</div>;
};

export default BlogPage;
