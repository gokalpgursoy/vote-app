const localStorageKey = 'link-list';

export const getLinks = () => {
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

export const addLink = (link) => {
  return new Promise(async (resolve, reject) => {
    try {
      const list = await getLinks();
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
      const list = await getLinks();
      list.find((item) => item.id === id).voteCount = voteCount;
      localStorage.setItem(localStorageKey, JSON.stringify(list));
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
