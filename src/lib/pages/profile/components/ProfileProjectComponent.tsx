import ProfilePostCard from './ProfilePostCard';

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

//fetch profile propject data then render a grid with projects
function ProfileProjectComponent() {
  return (
    <div className=" grid grid-cols-3 gap-6 overflow-scroll h-[520px] pr-5 gap-y-1">
      {images.map((image, i) => (
        <ProfilePostCard key={i} image={image} />
      ))}
    </div>
  );
}

export default ProfileProjectComponent;
