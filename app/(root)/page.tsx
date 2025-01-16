import Hero from "@/app/components/Hero";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query || "";
  return (
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
  );
}
