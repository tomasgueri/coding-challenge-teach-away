import React, { useEffect, useState } from 'react';

// Redux logic
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchGallery } from '../store/galleryThunks';

// Components
import Head from 'next/head';
import Layout from '../components/layout';
import Header from '../components/Molecules/Header';
import Container from '../components/Atoms/Container';
import GalleryFilters from '../components/Molecules/GalleryFilters';
import Gallery from '../components/Organisms/Gallery';
import Skeleton from '../components/Molecules/Skeleton';

type Filters = {
  section: string;
  sort: string;
  window: string;
  showViral: boolean;
};

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { images } = useSelector((state: RootState) => state.gallery);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    section: 'hot',
    sort: 'viral',
    window: 'day',
    showViral: true,
  });

  useEffect(() => {
    dispatch(fetchGallery(filters))

  }, [dispatch, filters]);

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
    setIsLoading(true);
  };

  useEffect(() => {
    if (images.length > 0) {
      setIsLoading(false);
    }
  }, [images]);


  return (
    <>
      <Head>
        <title>Gallery Challenge | Teach Away</title>
        <meta name="description" content="Coding Challenge | Teach Away" />
      </Head>
      <Layout>
        <Header />
        <GalleryFilters onFilterChange={handleFilterChange} />
        <Container>
          {isLoading ? (
            <Skeleton />
          ) : (
            <>
              <Gallery data={images} />
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default HomePage;
