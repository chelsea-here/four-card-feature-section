import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "../styles/page.module.scss";

type ImageSources = {
  desktopImageSrc?: string;
  mobileImageSrc?: string;
};

const ResponsiveProductImage = ({
  desktopImageSrc = "/image-product-desktop.jpg",
  mobileImageSrc = "/image-product-mobile.jpg",
}: ImageSources) => (
  <>
    {/* Image for desktop */}
    <Image
      src={desktopImageSrc}
      width={600}
      height={900}
      className={styles.imageDesktop}
      alt="Image of product"
    />

    {/* Image for mobile */}
    <Image
      src={mobileImageSrc}
      width={686}
      height={480}
      className={styles.imageMobile}
      alt="Image of product"
    />
  </>
);

export default ResponsiveProductImage;
