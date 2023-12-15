import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.scss';
import SearchComponent from '../../Atoms/SearchComponent';
import logo from './../../../shared/assets/images/logo.png';
import Container from '../../Atoms/Container';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container >
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </Link>
        </div>
        <div className={styles.searchContainer}>
          <SearchComponent />
        </div>
        <nav className={styles.navigation}>
          <Link href="/about">
            About
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
