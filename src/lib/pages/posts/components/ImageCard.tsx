interface ImageCardProps {
  key: number;
  image: string;
}

function ImageCard(props: ImageCardProps) {
  return (
    <div>
      <img
        className="rounded-lg"
        key={props.key}
        src={props.image}
        style={{ width: '100%', display: 'block' }}
      />
      <p>{props.image}</p>
    </div>
  );
}

export default ImageCard;
