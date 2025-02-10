import { atom, selector } from 'recoil';

// export const counter = atom({
//   key: 'counter', // Unique key for the atom
//   default: 0,     // Initial value
// });


export const counter = atom({
  key: 'counter', // Unique key for the atom
  default: 0,     // Initial value
});


export const isevenselector= selector({

  key:"iseven",
  // selectorn doesnot  have deault value it is derived from bunch of keys 
   get:function({get}){
    const number=get(counter)
    const even=(number%2 == 0)

    return even;



  }
})

