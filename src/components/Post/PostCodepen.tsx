import { PostCodepenProps } from './types';

// prettier-ignore
const PostEmbedCodepen = (props: PostCodepenProps) => {
  const { title, src, penId } = props;

  return (
    <div>
      <iframe
        scrolling="no"
        title={title || 'Codepen'}
        src={src}
        style={{
          width: '100%',
          height: 500,
        }}
      />
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://codepen.io/miquel/pen/${penId}`}
        >
          Ver {title} en CodePen
        </a>
      </p>
    </div>
  );
};

export default PostEmbedCodepen;
