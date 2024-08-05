import IntroSection from '@/components/custom/IntroSection';
import { getHomePageData } from '@/data/loaders';

function blockRenderer(block: any) {
  switch (block.__component) {
    case 'layout.intro-section':
      return <IntroSection key={block.id} data={block} />;
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
