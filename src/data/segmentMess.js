const customerData = {
  totalCount: 3,
  customers: [
    {
      id: 1,
      firstName: 'Jessi',
      lastName: 'Cooper',
      email: 'JCooper@gmail.com',
      orders: [
        {
          id: 1,
          name: 'milk',
          value: 3.99,
        },
        {
          id: 183,
          name: 'bread',
          value: 1.99,
        },
        {
          id: 852,
          name: 'eggs',
          value: 5.99,
        },
      ],
    },
    {
      id: 2,
      firstName: 'Floyd',
      lastName: 'Bauer',
      email: 'FloydRocks@msn.com',
      orders: [
        {
          id: 53,
          name: 'chicken',
          value: 9.99,
        },
        {
          id: 78,
          name: 'tortillas',
          value: 1.99,
        },
      ],
    },
    {
      id: 3,
      firstName: 'Ernest',
      lastName: 'Le',
      email: 'Ernest678@aol.com',
      orders: [
        {
          id: 950,
          name: 'chocolate',
          value: 0.99,
        },
        {
          id: 1,
          name: 'milk',
          value: 3.99,
        },
      ],
    },
  ],
};

export default customerData;
