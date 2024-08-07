import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutSkillsSection extends Schema.Component {
  collectionName: 'components_layout_skills_sections';
  info: {
    displayName: 'Skills Section';
  };
  attributes: {
    skills: Attribute.Relation<
      'layout.skills-section',
      'oneToMany',
      'api::skill.skill'
    >;
  };
}

export interface LayoutJobsSection extends Schema.Component {
  collectionName: 'components_layout_jobs_sections';
  info: {
    displayName: 'Jobs Section';
  };
  attributes: {
    jobs: Attribute.Relation<
      'layout.jobs-section',
      'oneToMany',
      'api::job.job'
    >;
  };
}

export interface LayoutIntroSection extends Schema.Component {
  collectionName: 'components_layout_intro_sections';
  info: {
    displayName: 'Intro Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.String;
    intro: Attribute.Text;
    ctaText: Attribute.String;
    image: Attribute.Media<'images'>;
    status: Attribute.Enumeration<['open', 'maybe', 'busy']>;
    links: Attribute.Component<'components.button-link', true>;
    cv: Attribute.Media<'files'>;
  };
}

export interface LayoutEducationSection extends Schema.Component {
  collectionName: 'components_layout_education_sections';
  info: {
    displayName: 'Education Section';
    description: '';
  };
  attributes: {
    schools: Attribute.Component<'components.school', true>;
  };
}

export interface LayoutCertificationsSection extends Schema.Component {
  collectionName: 'components_layout_certifications_sections';
  info: {
    displayName: 'Certifications Section';
  };
  attributes: {
    certifications: Attribute.Component<'components.certifications', true>;
    name: Attribute.String;
  };
}

export interface ComponentsSchool extends Schema.Component {
  collectionName: 'components_components_schools';
  info: {
    displayName: 'School';
  };
  attributes: {
    name: Attribute.String;
    faculty: Attribute.String;
    startDate: Attribute.Date;
    endDate: Attribute.Date;
  };
}

export interface ComponentsCertifications extends Schema.Component {
  collectionName: 'components_components_certifications';
  info: {
    displayName: 'Certifications';
  };
  attributes: {
    title: Attribute.String;
    organization: Attribute.String;
    date: Attribute.Date;
    url: Attribute.String;
    image: Attribute.Media<'images'>;
    details: Attribute.Blocks;
  };
}

export interface ComponentsButtonLink extends Schema.Component {
  collectionName: 'components_components_button_links';
  info: {
    displayName: 'buttonLink';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<true>;
    icon: Attribute.Enumeration<['GITHUB', 'LINKEDIN']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.skills-section': LayoutSkillsSection;
      'layout.jobs-section': LayoutJobsSection;
      'layout.intro-section': LayoutIntroSection;
      'layout.education-section': LayoutEducationSection;
      'layout.certifications-section': LayoutCertificationsSection;
      'components.school': ComponentsSchool;
      'components.certifications': ComponentsCertifications;
      'components.button-link': ComponentsButtonLink;
    }
  }
}
