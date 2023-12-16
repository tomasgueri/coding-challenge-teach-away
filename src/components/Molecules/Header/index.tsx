import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.scss';
import logo from './../../../shared/assets/images/logo.png';
import Container from '../../Atoms/Container';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container >
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50} priority />
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
      </Container>
    </header>
  );
};

export default Header;
