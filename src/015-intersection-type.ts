type ImageUrl = {
  imageUrl: string;
};

type ImageAttr = {
  imageAlt: string;
  width?: string;
};

type ImageProps = ImageUrl & ImageAttr;

type ImageProps = {
  imageUrl: string;
  imageAlt: string;
  width?: string;
};

const imageProps: ImageProps = {
  imageUrl: 'www.image.com',
  imageAlt: 'an image',
};

const imageProps: ImageProps = {
  imageUrl: 'www.image.com',
  imageAlt: 'an image',
  width: '100%',
};
