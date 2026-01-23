export const ProductGallery = ({ images }: { images: string[] }) => (
  <div>
    {images.map((img) => (
      <img key={img} src={img} alt="product image" />
    ))}
  </div>
);
