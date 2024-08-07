import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';
import StrapiImage from './StrapiImage';
import { cn } from '@/lib/utils';

type Certification = {
  id: number;
  title: string;
  organization: string;
  date: string;
  url: string;
  details: BlocksContent;
  image: {
    id: number;
    name: string;
    width: number;
    height: number;
    url: string;
  };
};

type CertificationsSectionProps = {
  data: {
    id: number;
    __component: string;
    name: string;
    certifications: Certification[];
  };
};

function CertCard({ cert }: { cert: Certification }) {
  return (
    <a
      href={cert.url}
      target="_blank"
      className="border border-slate-400 rounded-md p-2 hover:shadow-lg hover:border-indigo-700"
    >
      <div className="flex flex-col">
        <div className="flex items-center border-b border-slate-400">
          <StrapiImage
            alt={cert.title}
            src={cert.image.url}
            width={cert.image.width}
            height={cert.image.height}
            className="w-[100px] h-[100px] object-contain"
          />
          <div className="ml-4 w-full">
            <h3 className="font-semibold">{cert.title}</h3>
            <p className="italic">by {cert.organization}</p>
            <p>{cert.date}</p>
          </div>
        </div>
        <div>
          <h3 className="mt-4 font-semibold">Modules:</h3>
          <BlocksRenderer content={cert.details} />
        </div>
      </div>
    </a>
  );
}

export default function CertificationsSection({
  data,
}: CertificationsSectionProps) {
  return (
    <section className="certifications-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.certifications.map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
}
