import type { Schema, Attribute } from '@strapi/strapi';

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
      'layout.intro-section': LayoutIntroSection;
      'components.button-link': ComponentsButtonLink;
    }
  }
}
