const localStorageKey = 'link-list';
const pageSize = 5;

export const getAllLinks = () => {
  return new Promise((resolve, reject) => {
    try {
      let linkListItem = localStorage.getItem(localStorageKey);
      const links = JSON.parse(linkListItem) || [];
      resolve(links);
    } catch (error) {
      reject(error);
    }
  });
};

export const getPaginatedLinks = (pageNumber) => {
  return new Promise((resolve, reject) => {
    try {
      const startIndex = (pageNumber - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      let linkListItem = localStorage.getItem(localStorageKey);
      const links = JSON.parse(linkListItem) || [];
      resolve(links.slice(startIndex, endIndex));
    } catch (error) {
      reject(error);
    }
  });
};

export const addLink = (link) => {
  return new Promise(async (resolve, reject) => {
    try {
      const list = await getAllLinks();
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
      const list = await getAllLinks();
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
      const list = await getAllLinks();
      const newList = list.filter((item) => item.id !== id);
      localStorage.setItem(localStorageKey, JSON.stringify(newList));
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
