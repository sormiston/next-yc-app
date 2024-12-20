import Hero from "@/app/components/Hero";

export default function Home() {
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
    />
  );
}
