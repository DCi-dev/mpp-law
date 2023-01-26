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

export type LawyerType = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  bio: string;
  career: {
    _key: string;
    date: string;
    description: string;
    title: string;
  }[];
  description: string;
  domain: {
    _key: string;
    _ref: string;
    _type: string;
  }[];
  education: {
    _key: string;
    date: string;
    description: string;
    title: string;
  }[];
  email: string;
  facebook: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  linkedin: string;
  name: string;
  phone: string;
  position: string;
  slug: {
    _type: string;
    current: string;
  };
  title: string;
};
