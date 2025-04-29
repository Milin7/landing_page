import { JobItem } from "../types";

type JobListProps = {
  jobList: JobItem;
};

export default function ExperienceCard({ jobList }: JobListProps) {
  return (
    <>
      <div className=" cursor-default relative my-20 pl-5">
        <svg
          width="8"
          height="8"
          viewBox="0 0 4 4"
          xmlns="http://www.w3.org/2000/svg"
          className=" text-landing-neon absolute -left-[33px] top-1/2 -translate-y-1/2"
        >
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </svg>
        <h3>{jobList.jobDetails.name}</h3>
        <p className="  w-full">{jobList.jobDetails.date}</p>
        <p>{jobList.jobDetails.role}</p>
        <p>Description</p>
      </div>
    </>
  );
}
