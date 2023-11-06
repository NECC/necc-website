import Image from 'next/image';

const imageLoader = ({ src, width, quality }) => {
    return `/_next/image?url=${src}&w=${width}&q=${quality || 75}`;
};

const LoadedImage = (props) => <Image loader={imageLoader} {...props} />;

export default LoadedImage;