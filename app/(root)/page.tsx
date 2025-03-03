import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
export default async function Home({searchParams}: {
  searchParams: Promise<{query?:string}>
}) {
  const query = (await searchParams).query
  const posts = [
    {
      _id: 1,
      _createdAt : new Date,
      title : "We robots",
      views: 55,
      author : {id:1, name: "john"},
      descreption: "descreption of we rebots",
      image : "https://www.shop4tesla.com/cdn/shop/articles/teslas-we-robot-event-cybercab-robovan-optimus-und-mehr-489531.jpg?v=1728680993",
      category:"Robots",
    }
  ]
  return (
    <>
      <section className="pink_container text-white">
        <Image src='/subheader.png' alt="subheadeer image" height={200} width={200} />
        <h1 className="heading">Pith Your Startup, <br /> Connect with entrpreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Idea, Vote on Pitches, and Get Noticed in Virtual Compititions
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for " ${query} "` : 'All startups'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post,index) => (
              <StartupCard key={index} post={post}/>
            )) 
          ) : <p className="no-results"> No startups found </p>}
        </ul>
      </section>
    </>
  );
}
