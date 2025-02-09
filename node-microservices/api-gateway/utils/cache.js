const LRU = require('lru-cache');

const options = {
  max: 100, // Max 100 items
  ttl: 1000 * 60 * 5 // Cache items for 5 minutes
};
const cache = new LRU(options);

const getCache = (key) => cache.get(key);
const setCache = (key, value) => cache.set(key, value);

module.exports = { getCache, setCache };
