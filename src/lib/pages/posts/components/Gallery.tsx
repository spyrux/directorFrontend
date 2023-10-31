import { Component } from 'react';
import Masonry from 'react-responsive-masonry';
import ImageCard from './ImageCard';
const images = [
  'https://picsum.photos/200/300?image=1050',
  //...
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/300/300?image=200',
  'https://picsum.photos/300/300?image=2',
  'https://picsum.photos/300/300?image=0',
  'https://picsum.photos/300/300?image=1',
  'https://picsum.photos/300/300?image=3',
];

class Gallery extends Component {
  render() {
    return (
      <Masonry columnsCount={3} gutter="10px">
        {images.map((image, i) => (
          <ImageCard key={i} image={image} />
        ))}
      </Masonry>
    );
  }
}
export default Gallery;
