import { Component } from 'react';
import Masonry from 'react-responsive-masonry';
import ProjectCard from './ProjectCard';
const images = [
  'https://picsum.photos/400/600?image=1050',
  //...
  'https://picsum.photos/400/200?image=2',
  'https://picsum.photos/300/300?image=206',
  'https://picsum.photos/300/300?image=200',
  'https://picsum.photos/300/300?image=2',

  'https://picsum.photos/300/300?image=0',
  'https://picsum.photos/300/300?image=1',
  'https://picsum.photos/400/200?image=3',
  'https://picsum.photos/300/300?image=3',
];

function Gallery() {
  return (
    <div className=" items-center justify-center">
      <div className=" max-w-6xl mx-auto">
        <Masonry columnsCount={3} gutter="10px">
          {images.map((image, i) => (
            <ProjectCard key={i} image={image} />
          ))}
        </Masonry>
      </div>
    </div>
  );
}
export default Gallery;
