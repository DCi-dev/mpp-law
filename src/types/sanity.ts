export type PracticeDomainType = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  slug: {
    _type: string;
    current: string;
  };
  subtitle: string;
  text: {
    _key: string;
    text: string;
    title: string;
  }[];
  title: string;
};
