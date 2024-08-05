'use client';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import StrapiImage from './StrapiImage';

type SkillsSectionProps = {
  data: {
    skills: {
      data: {
        id: number;
        name: string;
        icon: {
          id: number;
          name: string;
          width: number;
          height: number;
          url: string;
        };
      }[];
    };
  };
};

export default function SkillsSection({
  data: { skills },
}: SkillsSectionProps) {
  return (
    <section>
      <Carousel
        plugins={[
          AutoScroll({
            speed: 2,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {skills.data.map((skill) => (
            <CarouselItem key={skill.id} className="basis-1/6 md:basis-1/12">
              <StrapiImage
                src={skill.icon.url}
                alt={skill.name}
                width={skill.icon.width}
                height={skill.icon.height}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
