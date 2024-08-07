type EducationSectionProps = {
  data: {
    schools: {
      id: number;
      name: string;
      faculty: string;
      startDate: string;
      endDate: string;
    }[];
  };
};

function getYear(date: string) {
  return new Date(date).getFullYear();
}

export default function EducationSection({ data }: EducationSectionProps) {
  return (
    <section className="text-center space-y-4">
      {data.schools.map((school) => (
        <div key={school.id}>
          <h3 className="font-bold text-lg">
            {school.name} ({getYear(school.startDate)} -{' '}
            {getYear(school.endDate)})
          </h3>
          <h4>{school.faculty}</h4>
        </div>
      ))}
    </section>
  );
}
