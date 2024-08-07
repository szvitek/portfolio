'use client';
import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';
import { useState } from 'react';
import { Button } from '../ui/button';
import StrapiImage from './StrapiImage';
import { Badge } from '../ui/badge';

type Job = {
  id: number;
  companyName: string;
  jobTitle: string;
  location: string;
  website: string;
  startDate: string;
  endDate?: any;
  companyDescription?: string;
  achievements: BlocksContent;
  skills: {
    data: Skill[];
  };
  image: {
    url: string;
  };
};

type Skill = {
  id: number;
  name: string;
};

type JobsSectionsProps = {
  data: {
    id: number;
    jobs: {
      data: Job[];
    };
  };
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
  });
}

export default function JobsSections({ data }: JobsSectionsProps) {
  const [selectedJobId, setSelectedJobId] = useState(data.jobs.data[0].id);
  const selectedJob = data.jobs.data.find(
    (job) => job.id === selectedJobId
  ) as Job;

  return (
    <section className="flex flex-col md:flex-row md:gap-12 job-section">
      <div className="flex md:flex-col flex-wrap gap-2">
        {data.jobs.data.map((job) => (
          <Button
            size="lg"
            key={job.id}
            onClick={() => setSelectedJobId(job.id)}
            variant={job.id === selectedJobId ? 'secondary' : 'default'}
          >
            {job.companyName}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-y-4 mt-12 md:mt-0 border border-slate-500 rounded-md p-6">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between">
          <div>
            <Button asChild variant="link" className="inline">
              <a href={selectedJob.website}>
                <div className="flex items-center gap-4 border border-slate-500 py-2 px-4 rounded-md">
                  <StrapiImage
                    className="h-[100px] w-[100px] object-contain"
                    src={selectedJob.image.url}
                    alt={`${selectedJob.companyName} logo`}
                    width={200}
                    height={150}
                  />
                  <div className="job-info">
                    <h3 className="font-bold text-xl">
                      {selectedJob.companyName}
                    </h3>
                    <div className="font-semibold">{selectedJob.jobTitle}</div>
                    <div>{selectedJob.location}</div>
                  </div>
                </div>
              </a>
            </Button>
          </div>
          <div className="font-bold text-lg">
            {formatDate(selectedJob.startDate)} -{' '}
            {selectedJob.endDate ? formatDate(selectedJob.endDate) : 'Present'}
          </div>
        </div>

        <div className="italic">{selectedJob.companyDescription}</div>

        <div>
          <h3 className="font-semibold">Achievements:</h3>
          <BlocksRenderer content={selectedJob.achievements} />
        </div>

        <div>
          <h3 className="font-semibold">Tech stack:</h3>
          <div>
            {selectedJob.skills.data.map((skill) => (
              // key={`${selectedJob.companyName}-${skill.id}`}
              <Badge
                key={skill.id}
                className="mr-2 hover:scale-110 cursor-default hover:text-cyan-500"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
