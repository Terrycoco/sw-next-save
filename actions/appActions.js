const a = require('actions/types').app;


export function setDim(dim) {
  return {
    type: a.SET_DIM,
    payload: dim
  };
}