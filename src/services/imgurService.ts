import { fetchWithCache } from '../utils/apiCache';

export const getGallery = async (section: string, sort: string, window: string, page: number) => {
  const url = `/gallery/${section}/${sort}/${window}/${page}`;
  const options = {
    params: { showViral: true, mature: false, album_previews: false }
  };

  return fetchWithCache(url, options);
};
