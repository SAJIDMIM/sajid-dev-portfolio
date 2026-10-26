type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-[#070d18] px-6 py-20 text-white">
      <h1 className="text-4xl font-bold">Blog Article</h1>
      <p className="mt-4 text-slate-400">Article: {slug}</p>
    </main>
  );
}
