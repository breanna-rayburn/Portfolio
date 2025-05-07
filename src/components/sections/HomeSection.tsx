import Image from 'next/image'
import IconCard from '@/components/ui/IconCard'
import ProjectCard from '@/components/ui/ProjectCard'
import Portrait from '@/public/imgs/portrait.jpg'
import BarnesWelding from '@/public/imgs/previews/BarnesWelding.png'
import BarnesSpecialty from '@/public/imgs/previews/BarnesSpecialty.png'
import TapsCO2 from '@/public/imgs/previews/TapsCO2.png'
import AnimatedTitle from '@/components/ui/AnimatedTitle'
import AnimatedText from '@/components/ui/AnimatedText'
import StaggerWrapper from '@/components/ui/StaggerWrapper'
import AnimatedChevron from '@/components/ui/AnimatedChevron'
import AnimatedSection from '@/components/ui/AnimatedSection'

const HomeSection = () => {
  return (
    <main className="container mx-auto max-w-7xl flex-grow px-6">
      <section className="flex min-h-screen items-center justify-center text-center">
        <StaggerWrapper>
          <AnimatedTitle tag="h1" text="Breanna Rayburn" />
          <AnimatedText tag="h3" text="Front-End Web Developer" />
          <AnimatedChevron href="#scroll-down" />
        </StaggerWrapper>
      </section>
      <section className="md:pt-24" id="scroll-down">
        <StaggerWrapper>
          <div className="grid grid-cols-1 pt-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <AnimatedTitle tag="h2" text="Crafting Experiences" />
              <AnimatedSection>
                <p>
                  I&apos;m passionate about creating impactful digital
                  experiences with an emphasis on responsiveness and
                  performance. Beyond front-end development, I&apos;m on an
                  exciting journey toward becoming a full-stack developer.
                </p>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4">
                  <IconCard src="/imgs/icons/javascript.svg" alt="Javascript" />
                  <IconCard src="/imgs/icons/typescript.svg" alt="TypeScript" />
                  <IconCard src="/imgs/icons/react.svg" alt="React" />
                  <IconCard src="/imgs/icons/nextjs.svg" alt="Next.js" />
                  <IconCard src="/imgs/icons/threejs.svg" alt="Three.js" />
                  <IconCard
                    src="/imgs/icons/tailwindcss.svg"
                    alt="Tailwindcss"
                  />
                  <IconCard src="/imgs/icons/postgresql.svg" alt="PostgreSQL" />
                  <IconCard src="/imgs/icons/graphql.svg" alt="GraphQL" />
                </div>
              </AnimatedSection>
            </div>
            <div className="hidden justify-center md:flex">
              <AnimatedSection>
                <Image
                  src={Portrait}
                  alt="Self Portrait"
                  style={{ width: '400px' }}
                />
              </AnimatedSection>
            </div>
          </div>
        </StaggerWrapper>
      </section>
      <section className="mt-12 flex flex-col items-center justify-center md:mt-24">
        <StaggerWrapper>
          <div className="mb-12 text-center">
            <AnimatedTitle tag="h2" text="Professional Work" />
          </div>
          <AnimatedSection>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <ProjectCard
                href="https://barnesweldingsupply.com"
                src={BarnesWelding}
                name="Barnes Welding Supply"
              />
              <ProjectCard
                href="https://barnesspecialtygases.com"
                src={BarnesSpecialty}
                name="Barnes Specialty Gases"
              />
              <ProjectCard
                href="https://tapsco2.com"
                src={TapsCO2}
                name="TapsCO2"
              />
            </div>
          </AnimatedSection>
        </StaggerWrapper>
      </section>
      <section className="my-12 flex flex-col items-center justify-center text-center md:my-24">
        <StaggerWrapper>
          <AnimatedTitle tag="h2" text="Let's Connect!" />
          <AnimatedSection>
            <p>
              I&apos;m always open to exciting opportunities for collaboration
              and potential work projects! Whether you&apos;re looking for a
              passionate developer to join your team, need assistance on a
              project, or simply want to discuss ideas, I&apos;m here to help.
              Let&apos;s explore how we can work together to bring your vision
              to life. Feel free to reach out through the provided channels
              below. Looking forward to connecting with you!
            </p>
            <div className="mt-4 items-center justify-center">
              <a
                className="inline-block"
                href="https://www.linkedin.com/in/breanna-rayburn/"
                target="_blank"
              >
                <IconCard src="/imgs/icons/linkedin.svg" alt="Linkedin" />
              </a>
              <a
                className="inline-block"
                href="https://github.com/breanna-rayburn"
                target="_blank"
              >
                <IconCard src="/imgs/icons/github.svg" alt="GitHub" />
              </a>
            </div>
          </AnimatedSection>
        </StaggerWrapper>
      </section>
    </main>
  )
}

export default HomeSection
