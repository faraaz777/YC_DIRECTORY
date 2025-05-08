import SearchForm from "../components/searchForm";
import Startupcards from "../components/startupcards";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const post = [
    {
      _createdAt: new Date(),
      views: 55,
      _id: 1,
      author: { _id: 1, name: "John Doe" },
      description: "this is a sample description for the startup",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      category: "tech",
      title: "Sample Startup",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup
          <br /> Conneect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions{" "}
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search for ${query}` : "All Start ups"}
        </p>
        <ul className="mt-7 card_grid">
          {post?.length > 0 ? (
            post.map((post: StartupTypeCard) => (
              <Startupcards key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
