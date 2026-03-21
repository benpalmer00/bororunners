"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type GalleryLightboxProps = {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
};

export default function GalleryLightbox({ images, index, onClose }: GalleryLightboxProps) {
  return (
    <Lightbox
      open={index >= 0}
      close={onClose}
      index={index}
      slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
    />
  );
}
