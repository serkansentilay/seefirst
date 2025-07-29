const randomId = () => Math.random().toString()

const createItem = (title) => ({ id: randomId(), title })
//Bu fonksiyon bir başlık alır (title) ve bu başlıkla birlikte rastgele bir
//  id içeren bir nesne döndürür:
//{ id: '0.1234...', title: 'Learn React' }

const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

export const actionCreators = {
  add: (title) => ({ type: types.ADD, payload: createItem(title) }),
  //ADD türünde bir eylem döndürür.
//payload kısmında yeni bir To-Do nesnesi içerir.
//{ type: 'ADD', payload: { id: '0.123...', title: 'Learn React' } }
  remove: (id) => ({ type: types.REMOVE, payload: id }),
}

export const initialState = {
  items: [
    createItem('Click to remove'),
    createItem('Learn React Native'),
    createItem('Write Code'),
    createItem('Ship App'),
  ],
}

export function reducer(state, action) {
  switch (action.type) {
    case types.ADD:
      return { ...state, items: [...state.items, action.payload] }
      //...state → mevcut state'in diğer alanlarını korur.
      //items: [...state.items, action.payload] → eski öğeleri korur, sonuna yenisini ekler.

    case types.REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        //Belirtilen id'ye sahip öğeyi listeden çıkarır.
        //filter() metodu ile, item.id !== action.payload olan (yani eşleşmeyen) 
        // öğeler korunur, eşleşen silinir.
      }
  }
}
