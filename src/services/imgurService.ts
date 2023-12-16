import { fetchWithCache } from '../utils/apiCache';

export const getGallery = async (section: string, sort: string, window: string, page: number) => {
  const url = `/gallery/${section}/${sort}/${window}/${page}/0.json?perPage=35`;
  console.log('page', page)
  const options = {
    params: { showViral: true, mature: false, album_previews: false }
  };

  return fetchWithCache(url, options);
};
