import { Feature } from "@/types/feature";

const SinglePlan = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp text-center" data-wow-delay=".15s">
        <div className="mx-auto mb-2 flex h-[70px] w-[70px] flex-shrink-0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <div className="ml-5">
          <h3 className="mb-1 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-normal leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePlan;
