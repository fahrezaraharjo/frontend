import React from "react";
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "hotels",
    headerName: "Hotels",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Fahreza",
    img: "http://localhost:3000/static/media/eja-about.e8bffadc.PNG",
    status: "active",
    email: "fahrezaraharjo92@gmail.com",
    hotels: "Art Deco",
    age: 35,
  },
  {
    id: 2,
    username: "Fahreza",
    img: "http://localhost:3000/static/media/eja-about.e8bffadc.PNG",
    status: "active",
    email: "fahrezaraharjo92@gmail.com",
    hotels: "Art Deco",
    age: 35,
  }, {
    id: 3,
    username: "Fahreza",
    img: "http://localhost:3000/static/media/eja-about.e8bffadc.PNG",
    status: "active",
    email: "fahrezaraharjo92@gmail.com",
    hotels: "Art Deco",
    age: 35,
  }, {
    id: 4,
    username: "Fahreza",
    img: "http://localhost:3000/static/media/eja-about.e8bffadc.PNG",
    status: "active",
    email: "fahrezaraharjo92@gmail.com",
    hotels: "Art Deco",
    age: 35,
  }, {
    id: 5,
    username: "Fahreza",
    img: "http://localhost:3000/static/media/eja-about.e8bffadc.PNG",
    status: "active",
    email: "fahrezaraharjo92@gmail.com",
    hotels: "Art Deco",
    age: 35,
  }, {
    id: 6,
    username: "Fahreza",
    img: "http://localhost:3000/static/media/eja-about.e8bffadc.PNG",
    status: "active",
    email: "fahrezaraharjo92@gmail.com",
    hotels: "Art Deco",
    age: 35,
  },
];

export const hotelColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const hotelRows = [
  {
    id: '1',
    img: "http://localhost:3000/static/media/eja-about.e8bffadc.PNG",
    name: 'Swissbell-resort Dago',
    type: 'resort',
    Address: 'Dago',
    Distance: '12km',
    title: 'Swiss Luxury Hotel & Residence',
    city: 'Bandung',
    status: "active",
    Price: 90000000,
  }, {
    id: '2',
    name: 'Swissbell-resort Dago',
    type: 'resort',
    Address: 'Dago',
    Distance: '12km',
    title: 'Swiss Luxury Hotel & Residence',
    city: 'Bandung',
    status: "active",
    Price: 90000000,
  }, {
    id: '3',
    name: 'Swissbell-resort Dago',
    type: 'resort',
    Address: 'Dago',
    Distance: '12km',
    title: 'Swiss Luxury Hotel & Residence',
    city: 'Bandung',
    status: "active",
    Price: 90000000,
  }, {
    id: '4',
    name: 'Swissbell-resort Dago',
    type: 'resort',
    Address: 'Dago',
    Distance: '12km',
    title: 'Swiss Luxury Hotel & Residence',
    city: 'Bandung',
    status: "active",
    Price: 90000000,
  }, {
    id: '5',
    name: 'Swissbell-resort Dago',
    type: 'resort',
    Address: 'Dago',
    Distance: '12km',
    title: 'Swiss Luxury Hotel & Residence',
    city: 'Bandung',
    status: "active",
    Price: 90000000,
  }, {
    id: '6',
    name: 'Swissbell-resort Dago',
    type: 'resort',
    Address: 'Dago',
    Distance: '12km',
    title: 'Swiss Luxury Hotel & Residence',
    city: 'Bandung',
    status: "active",
    Price: 90000000,
  }, {
    id: '7',
    name: 'Swissbell-resort Dago',
    type: 'resort',
    Address: 'Dago',
    Distance: '12km',
    title: 'Swiss Luxury Hotel & Residence',
    city: 'Bandung',
    status: "active",
    Price: 90000000,
  },
  
];



export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];