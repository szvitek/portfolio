import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '../ui/button';
import { cn, getStrapiMedia } from '@/lib/utils';
import StrapiImage from './StrapiImage';

type IntroSectionProps = {
  data: {
    heading: string;
    subHeading: string;
    intro: string;
    ctaText: string;
    cv: {
      url: string;
    };
    links: {
      id: number;
      url: string;
      isExternal: boolean;
      icon: string;
    }[];
    image: {
      url: string;
    };
    status: 'open' | 'maybe' | 'busy';
  };
};

const STATUSES = {
  open: {
    color: 'bg-green-500',
    text: 'I am ready to work',
  },
  maybe: {
    color: 'bg-yellow-500',
    text: 'I am not actively looking but I might consider your offer',
  },
  busy: {
    color: 'bg-red-500',
    text: 'I am not looking for a new role at the moment',
  },
};

function getIcon(name: string) {
  switch (name) {
    case 'LINKEDIN':
      return <FaLinkedin />;
    case 'GITHUB':
      return <FaGithub />;
    default:
      return null;
  }
}

export default function IntroSection({ data }: IntroSectionProps) {
  return (
    <section className="flex flex-col-reverse md:grid md:grid-cols-[70%_1fr] gap-4">
      <div className="flex flex-col justify-between">
        <h1>{data.heading}</h1>
        <p>{data.subHeading}</p>

        <div className="text-justify">{data.intro}</div>

        <p>{data.ctaText}</p>

        <div className="flex flex-wrap items-center gap-2">
          <Button asChild>
            <Link href={getStrapiMedia(data.cv.url)!} target="_blank">
              Download CV
            </Link>
          </Button>

          {data.links.map((link) => (
            <Button asChild key={link.id}>
              <Link
                href={link.url}
                target={link.isExternal ? '_blank' : '_self'}
              >
                {getIcon(link.icon)}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <StrapiImage
          src={data.image.url}
          alt="Avatar"
          width={200}
          height={200}
          className="rounded-full"
        />

        {/* maybe make a separate component for status  */}
        <div>
          <div className="flex items-center justify-center gap-2">
            Status:{' '}
            <p
              className={cn(
                'w-4 h-4 rounded-full inline-block',
                STATUSES[data.status].color
              )}
            />
          </div>
          <p className="text-center">{STATUSES[data.status].text}</p>
        </div>
      </div>
    </section>
  );
}
