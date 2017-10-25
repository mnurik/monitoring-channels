import toastr from 'toastr'
import { Observable } from 'rxjs'

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  return response.result
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus({ response }) {
  if (response.isSuccess) {
    return response
  }

  const error = new Error(response.message)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(data) {
  return Observable.ajax({
    ...data, crossDomain: true,
    createXHR: function () {
      return new XMLHttpRequest();
    }
  })
    .map(checkStatus, error => toastr.error(error.message))
    .map(parseJSON)
}
