/**
 * Map function - use `emit(key, value)1 to generate rows in the output result.
 * @link http://docs.couchdb.org/en/latest/couchapp/ddocs.html#reduce-and-rereduce-functions
 *
 * Note there is no reduce.js.
 *
 * @param {object} doc - Document Object.
 */
function (doc) {
    // mess of ldap -->> json import - every entry is wrapped in array
    emit(doc.uid[0], {
        name: doc.givenName[0],
        surname: doc.sn[0],
        email: doc.mail[0]
    });
}
