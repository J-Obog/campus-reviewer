import Hero from "../components/Hero";
import { BiBookmark } from "react-icons/bi";

const CollegePage = () => {
  return (
    <>
      <Hero 
        image={"https://image.cnbcfm.com/api/v1/image/106578950-1592283323893gettyimages-1212003765.jpeg?v=1592312973"} 
        title={"Harvard University"}
        description={"Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, clergyman John Harvard, Harvard is the oldest institution of higher learning in the United States and among the most prestigious in the world."}
        showButton={false}
        rating={5.0}
      />
      <main className="px-4 py-10 md:py-14">
        <div>
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center xl:justify-start">
          <button className="btn btn-primary btn-outline gap-2">
            save
            <span className="text-xl">
              <BiBookmark />
            </span>
          </button>
          <button className="btn btn-primary btn-wide">add location</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CollegePage;