import qs from 'qs';
import { flattenAttributes, getStrapiURL } from '@/lib/utils';
import { getAuthToken } from './services/get-token';

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  const authToken = await getAuthToken();
  const headers: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error('Error fetchingdata:', error);
    throw error;
  }
}

// todo: maybe more fine tuned populates
export async function getHomePageData() {
  const url = new URL('/api/home-page', baseUrl);
  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: {
          image: '*',
          cv: '*',
          links: '*',
          skills: {
            populate: ['name', 'icon'],
          },
        },
      },
    },
  });

  return fetchData(url.href);
}
