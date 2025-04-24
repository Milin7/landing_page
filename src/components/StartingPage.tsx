import { jobs } from "../data/db";
import ExperienceCard from "./ExperienceCard";

function StartingPage() {
  return (
    <>
      <div className=" mt-10 mr-10">
        <div className="border-2 text-white border-landing-neon rounded-xl p-7">
          <h1 className=" uppercase text-landing-neon tracking-widest  text-2xl mt-2 ">
            From milin github on Tovis mac
          </h1>
          {jobs.map((jobList) => (
            <ExperienceCard jobList={jobList} key={jobList.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default StartingPage;
