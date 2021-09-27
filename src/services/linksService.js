import { pageSizeConstant } from '../helpers/contants';

const localStorageKey = 'link-list';

export const fetchAllLinks = () => {
  return new Promise((resolve, reject) => {
    try {
      let linkListItem = localStorage.getItem(localStorageKey);
      const links = JSON.parse(linkListItem) || [];
      const sortedList = links.sort((a, b) => {
        if (a.voteCount !== b.voteCount) {
          return b.voteCount - a.voteCount;
        } else {
          return (
            parseFloat(new Date(b.modifiedDate).getTime()) -
            parseFloat(new Date(a.modifiedDate).getTime())
          );
        }
      });
      resolve(sortedList);
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

export const fetchPaginatedLinks = (pageNumber) => {
  return new Promise(async (resolve, reject) => {
    try {
      const startIndex = (pageNumber - 1) * pageSizeConstant;
      const endIndex = startIndex + pageSizeConstant;
      const list = await fetchAllLinks();
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
