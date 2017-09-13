import * as actionTypes from '../constants/config'

export function update(data) {
  return {
      type: actionTypes.USERINFO_UPDATE,
      data
  }
}

export function add(data) {
  return {
      type: actionTypes.COLLECTION_ADD,
      data
  }
}

export function del(data) {
  return {
      type: actionTypes.COLLECTION_DELETE,
      data
  }
}
