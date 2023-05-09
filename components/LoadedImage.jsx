import Image from 'next/image';

const imageLoader = ({ src, width, quality }) => {
    if (process.env.NODE_ENV === "development")
        return `/_next/image?url=${src}&w=${width}&q=${quality || 75}`;
    else
        return `/_ipx/w_${width},q_${quality || 75}/${src}?url=${src}&w=${width}&q=${quality || 75}`;
};

const LoadedImage = (props) => <Image loader={imageLoader} {...props} />;

export default LoadedImage;