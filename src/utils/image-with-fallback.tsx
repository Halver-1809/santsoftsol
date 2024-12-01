import React, { useState, ImgHTMLAttributes } from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  fallback: string;
  alt: string;
}

export default function ImageWithFallback({ fallback, src, alt, ...props }: Props) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);

  const onError = () => setImgSrc(fallback);

  return (
    <img
      src={imgSrc ? imgSrc : fallback}
      alt={alt}
      onError={onError}
      {...props}
    />
  );
}
