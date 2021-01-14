const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      subtitle: 'SHOP NOW',
      imageUrl: 'hats',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      subtitle: 'SHOP NOW',
      imageUrl: 'jackets',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      subtitle: 'SHOP NOW',
      imageUrl: 'sneakers',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      subtitle: 'SHOP NOW',
      imageUrl: 'womens',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      subtitle: 'SHOP NOW',
      imageUrl: 'men',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = ((state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: return state;
  }
});

export default directoryReducer;
