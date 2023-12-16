import { fetchWithCache } from '../utils/apiCache';

export const getGallery = async (section: string, sort: string, window: string, showViral: boolean) => {
  const url = `/gallery/${section}/${sort}/${window}`;
  const options = {
    params: { showViral: showViral, mature: false, album_previews: false }
  };

  return fetchWithCache(url, options);
};
