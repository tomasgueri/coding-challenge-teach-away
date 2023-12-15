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
import Pagination from '../components/Molecules/Pagination';
import Skeleton from '../components/Molecules/Skeleton';

type Filters = {
  section: string;
  sort: string;
  window: string;
  page: number;
  showViral: boolean;
};

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { images } = useSelector((state: RootState) => state.gallery);
  console.log('images', images)
  const [totalPages, setTotalPages] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    section: 'hot',
    sort: 'viral',
    window: 'day',
    page: 0,
    showViral: true,
  });

  useEffect(() => {
    //dispatch(fetchGallery(filters));
    dispatch(fetchGallery(filters)).then(() => {
      setIsLoading(false);
    });
    console.log('UseEffect from home page is called')
  }, [dispatch, filters]);

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const handlePageChange = (newPage: number) => {
    setFilters((prevFilters) => ({ ...prevFilters, page: newPage }));
  };

  return (
    <>
      <Head>
        <title>Gallery Challenge | Teach Away</title>
        <meta name="description" content="Coding Challenge | Teach Away" />
      </Head>
      <Layout>
        <Header />
        <GalleryFilters onFilterChange={handleFilterChange} />
        <Container >
          {/* <Gallery data={images} />
          <Pagination
            currentPage={filters.page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          /> */}
          {isLoading ? (
            <Skeleton /> // Your skeleton loader component
          ) : (
            <>
              <Gallery data={images} />
              <Pagination
                currentPage={filters.page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default HomePage;
