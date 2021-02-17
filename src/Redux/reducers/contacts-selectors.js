import {createSelector} from 'reselect'

const getCardsSelector = (state) => {
  return state.contacts_state.cards;
}

export const getCards = createSelector(
  getCardsSelector,
  (cards) => {
    console.log(cards)
    return cards;
  }
)

export const getCurrPage = (state) => {
  return state.contacts_state.currPage;
}

export const getNextPage = (state) => {
  return state.contacts_state.nextPage;
}

export const getPrevPage = (state) => {
  return state.contacts_state.prevPage;
}

export const getHasNextPage = (state) => {
  return state.contacts_state.hasNextPage;
}

export const getHasPrevPage = (state) => {
  return state.contacts_state.hasPrevPage;
}

export const getTotalPages = (state) => {
  return state.contacts_state.totalPages;
}

export const getIfActiveSearch = (state) => {
  return state.contacts_state.ifActiveSearch;
}
