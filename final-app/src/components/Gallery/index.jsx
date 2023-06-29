import "./gallery.css";
import ImageGallery from "react-image-gallery";

const Gallery = ({ images }) => {
  //   images?.forEach((url) => console.log(url, "Budu"));
  const galleryImages = images?.map((url) => ({
    original: url,
    thumbnail: url,
  }));
  return (
    <>
      {galleryImages && (
        <ImageGallery
          items={galleryImages}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      )}
    </>
  );
};

export default Gallery;
