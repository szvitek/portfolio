import EducationSection from '@/components/custom/EducationSection';
import IntroSection from '@/components/custom/IntroSection';
import JobsSections from '@/components/custom/JobsSections';
import SkillsSection from '@/components/custom/SkillsSection';
import { getHomePageData } from '@/data/loaders';

function blockRenderer(block: any) {
  switch (block.__component) {
    case 'layout.intro-section':
      return <IntroSection key={block.__component} data={block} />;
    case 'layout.skills-section':
      return <SkillsSection key={block.__component} data={block} />;
    case 'layout.jobs-section':
      return <JobsSections key={block.__component} data={block} />;
    case 'layout.education-section':
      return <EducationSection key={block.__component} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getHomePageData();
  // console.dir(strapiData, { depth: null });

  const { blocks } = strapiData;
  if (!blocks) return <div>No blocks found</div>;

  return (
    <main className="container flex min-h-screen flex-col items-center p-12">
      {blocks.map((block: any) => blockRenderer(block))}
    </main>
  );
}
