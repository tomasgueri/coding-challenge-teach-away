import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import Container from '../../Atoms/Container';
import LogoSvg from '../../Atoms/LogoSvg';

const Header = () => {
  return (
    <Container >
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <LogoSvg />
          </Link>
        </div>
        <nav className={styles.navigation}>
          <Link href="/about">
            About
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
