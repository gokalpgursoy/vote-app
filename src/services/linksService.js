import { orderBy } from 'lodash';
import { pageSizeConstant } from '../helpers/contants';

const localStorageKey = 'link-list';

export const fetchAllLinks = (orderType = '') => {
  return new Promise((resolve, reject) => {
    try {
      let linkListItem = localStorage.getItem(localStorageKey);
      let list = JSON.parse(linkListItem) || [];
      if (orderType) {
        list = orderBy(
          list,
          ['voteCount', 'modifiedDate'],
          [orderType, 'desc']
        );
      } else {
        list = orderBy(list, ['modifiedDate'], ['desc']);
      }
      resolve(list);
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchTotalLinkCount = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const list = await fetchAllLinks();
      resolve(list.length);
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchPaginatedLinks = (pageNumber, orderType) => {
  return new Promise(async (resolve, reject) => {
    try {
      const startIndex = (pageNumber - 1) * pageSizeConstant;
      const endIndex = startIndex + pageSizeConstant;
      const list = await fetchAllLinks(orderType);

      resolve(list.slice(startIndex, endIndex));
    } catch (error) {
      reject(error);
    }
  });
};

export const addLink = (link) => {
  return new Promise(async (resolve, reject) => {
    try {
      const list = await fetchAllLinks();
      link.voteCount = 0;
      link.modifiedDate = new Date();

      list.push(link);
      localStorage.setItem(localStorageKey, JSON.stringify(list));
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const updateLink = ({ id, voteCount }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const list = await fetchAllLinks();
      list.find((item) => item.id === id).voteCount = voteCount;
      localStorage.setItem(localStorageKey, JSON.stringify(list));
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const deleteLinkById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const list = await fetchAllLinks();
      const newList = list.filter((item) => item.id !== id);
      localStorage.setItem(localStorageKey, JSON.stringify(newList));
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
