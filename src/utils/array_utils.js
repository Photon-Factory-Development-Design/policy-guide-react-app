import _ from 'lodash';

export const deepClone = obj => JSON.parse(JSON.stringify(obj));

export const getArrayLength = array => (array || []).length;

export const arrayAverage = array =>
  array.reduce((a, b) => a + b) / getArrayLength(array);

/**
 *
 * @param {*} objArray: array of objects
 * @param {*} fields: array of properties of object
 * @param {*} func: merge function
 * @return merged object for given properties
 *
 * ex:
 * const a = [{a: 1, b: 2, c: 3}, {a: 2, b: 3, c: 4}]
 * mergeArrayOfObjects(a, ['a', 'b'], arrayAverage)
 * Result should be: {a: 1.5, b: 2.5}
 */
export const mergeArrayOfObjects = (objArray, fields = [], func = null) => {
  const newObj = {};

  fields.forEach(field => {
    newObj[field] = func(objArray.map(item => item[field]) || []);
  });

  return newObj;
};

/**
 * update object-array item w/ id
 * ex:
 * const a = [{id: 1, a: 1, b: 2, c: 3}, {id: 2, a: 2, b: 3, c: 4}]
 * mergeArrayOfObjects(a, 1, {b: 3})
 * Result should be: [{id: 1, a: 1, b: 3, c: 3}, {id: 2, a: 2, b: 3, c: 4}]
 */
export const updateObjectArray = (array, id, obj, canCreate = false) => {
  const newArray = deepClone(array);

  const index = newArray.findIndex(item => item.id === id);
  if (index >= 0) {
    newArray[index] = _.merge(newArray[index], obj);
  } else {
    if (canCreate) {
      // if can create, create that obj
      newArray.push({ id, ...obj });
    }
  }

  return newArray;
};

/**
 * update object-array-array item w/ id
 * ex:
 * const a = [{id: 1, values: [{ id: 1, b: 1, c: 1}]}, {id: 2, values: [{ id: 2, b: 1, c: 1}]}]
 * const newArray = [{id: 1, b: 2, c: 3}, {id: 2, b: 3, c: 4}]
 * updateObjectArrayArray(a, 1, newArray)
 * result should be: [{id: 1, values: [{ id: 1, b: 2, c: 3}, {id: 2, b: 3, c: 4}]}, {id: 2, values: [{ id: 2, b: 1, c: 1}]}]
 */
export const updateObjectArrayArray = (array, id, targetArray) => {
  const newArray = deepClone(array);

  const index = newArray.findIndex(item => item.id === id);
  if (index >= 0) {
    let item = deepClone(newArray[index]); // this is the object
    // merge/add new Array
    targetArray.forEach(element => {
      if (typeof element === 'object') {
        // merge/add by id field
        const _j = (item.values || []).findIndex(obj => obj.id === element.id);
        if (_j >= 0) {
          // merge
          item.values = updateObjectArray(item.values, element.id, element);
        } else {
          // add
          item.values.push(element);
        }
      } else {
        // add item
        item.values.push(element);
      }
    });

    newArray[index] = item;
  } else {
    // if array instance w/ id not exists, add that item
    newArray.push({
      id: id,
      values: deepClone(targetArray)
    });
  }

  return newArray;
};

export const checkErrorObjValidated = error => {
  const keys = Object.keys(error);
  for (let _i = 0; _i < keys.length; _i++) {
    if (error[keys[_i]]) return false;
  }
  return true;
};

// remove array obj w/ id
/**
 *
 * @param {*} id
 * const a = [{id: 1, b: 2}, { id: 2, c: 3}]
 * removeArrayObjById(1)
 * return value: [{id: 2, c: 3}]
 */
export const removeArrayObjById = (values, id) => {
  let newValues = deepClone(values);

  const index = newValues.findIndex(obj => obj.id === id);
  if (index >= 0) {
    newValues = [].concat(
      newValues.slice(0, index),
      newValues.slice(index + 1)
    );
  }

  return newValues;
};

/**
 * merge two object array
 * const a = [{ category: '11', b: 2, c: 3}]
 * const b = [{ category: '11', d:3, e: 4 }]
 *
 * mergetTwoObjArray(a, b, 'category', ['d'])
 * result would be: [{ category: '11', b: 2, c: 3, d: 3}]
 */
export const mergeTwoObjArray = (
  original,
  newArray,
  searchField,
  mergeFields
) => {
  const newResult = deepClone(original);

  newArray.forEach(item => {
    const index = newResult.findIndex(
      obj => obj[searchField] === item[searchField]
    );

    if (index >= 0) {
      // merge objects
      newResult[index] = _.extend(
        {},
        newResult[index],
        _.pick(item, mergeFields)
      );
    } else {
      // add new item
      newResult.push({
        [searchField]: item[searchField],
        ..._.pick(item, mergeFields)
      });
    }
  });

  return newResult;
};
