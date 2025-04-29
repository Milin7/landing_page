import { jobs } from "../data/db";
import ExperienceCard from "./ExperienceCard";

function ExperiencePage() {
  return (
    <>
      <div className=" mt-10 mr-10">
        <div className="border-2 text-white border-landing-neon rounded-xl p-7">
          <h2 className=" uppercase text-landing-neon tracking-widest  text-2xl mt-2 ">
            Experience
          </h2>
          {jobs.map((jobList) => (
            <ExperienceCard jobList={jobList} key={jobList.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ExperiencePage;
