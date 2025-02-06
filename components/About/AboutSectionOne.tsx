import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-base font-light text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Don't Let Your Message Fall Flat"
                paragraph="Is your unclear messaging leading to missed opportunities?"
                mb="44px"
                center={true}
              />

              <div
                className="wow fadeInUp mb-12 mt-16 lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Missing out on sales because customers lose interest." />
                    <List text="Feeling ignored because potential clients won't return your emails." />
                    <List text="Giving presentations that don't produce move people to action." />
                  </div>

                  <div className="mt-8 w-full px-3 sm:mt-0 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Wasted marketing dollars and lost revenue." />
                    <List text="Your competition gets the contract." />
                    <List text="Time wasted because you feel lost in the branding process." />
                    {/* <List text="Frustration grows with each missed opportunity." /> */}
                    {/* <List text="Potential customers remain uninterested." /> */}
                    {/* <List text="Ideas crucial for growth are overlooked." /> */}
                    {/* <List text="Missed growth opportunities." /> */}
                    {/* <List text="Value of your offerings goes unrecognized." /> */}
                  </div>
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="mx-auto mt-12 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Schedule Your Free Call
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[16/9]  lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/blog/blog-01.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full object-cover drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/blog-01.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full object-cover drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
