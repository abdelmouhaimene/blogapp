import Image from "next/image";
import SearchForm from "../../components/SearchForm";
export default async function Home({searchParams}: {
  searchParams: Promise<{query?:string}>
}) {
  const query = (await searchParams).query
  return (
    <>
      <section className="pink_container">
        <Image src='/subheader.png' alt="subheadeer image" height={200} width={200} />
        <h1 className="heading">Pith Your Startup, <br /> Connect with entrpreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Idea, Vote on Pitches, and Get Noticed in Virtual Compititions
        </p>
        <SearchForm query={query}/>
      </section>
      
    </>
  );
}
