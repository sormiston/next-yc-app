import Hero from "@/components/Hero";
import StartupCard from "@/components/StartupCard";
import { StartupPost } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query || "";

  /* HARDCODE: hardcoded posts data, to come from sanity */
  const posts: StartupPost[] = new Array(9)
    .fill({
      _createdAt: "January 13, 2025",
      views: 55,
      author: { _id: 1 },
      _id: 0,
      description:
        "Wearable tech for modern party people.  Neon armor laser glint money aggregation machines, we handle the crypto you handle the vibes.  More is more is more.",
      image:
        "https://images.unsplash.com/photo-1729457497659-9700bfb4d506?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Fashion",
      title: "Future Rave",
    })
    .map((post, index) => ({ ...post, _id: index }));

  return (
    <>
      <Hero
        title={
          <>
            Pitch Your Startup,
            <br />
            Connect with Entrepreneurs
          </>
        }
        subtitle="Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions."
        query={query}
      />
      <section className="py-3 px-3 sm:px-4 md:px-6 md:py-4 xl:px-8 xl:py-6 2xl:py-14 2xl:px-12">
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-3 lg:mb-5 2xl:mb-9">
          {query ? `Search results for "${query}"` : "Recommended startups"}
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-[1600px] mx-auto">
          {posts.length ? (
            posts.map((post) => <StartupCard key={post._id} post={post} />)
          ) : (
            <p className="text-xl lg:text-2xl font-semibold">No posts found</p>
          )}
        </ul>
      </section>
    </>
  );
}
