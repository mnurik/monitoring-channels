import { Observable } from 'rxjs'

/**
 * gets body returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          body from the request
 */
function getBody(response) {
  if (response.result === null) {
    const error = new Error(response.message);
    throw error
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
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.response;
  }

  const error = new Error(response);
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
  return Observable.ajax({ ...data, crossDomain: true })
    .map(checkStatus)
    .map(getBody)
  // .catch(error => console.error(error.message));
}
