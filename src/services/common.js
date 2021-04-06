import React from 'react';
/**
 * Returns a new Object with only few attributes of the original Object
 * Note: the attributes/properties will still be bound to the old object.
 * 
 * @param {Object} object  The object.
 * @param {Array}          Array of selected attributes.
 * @param {Object}         New object with only the selected attributes.
 */
export function objectWithOnly(object, attributes) {
  let newObject = {};

  attributes.forEach(
    attributes => newObject[attributes] = object[attributes].bind(object)
  );

  return newObject;
}

/**
 * Wraps react children elements with props.
 */
export function wrapChildrenWith(children, props) {
  return React.Children.map(children, child => React.cloneElement(child, props))
}