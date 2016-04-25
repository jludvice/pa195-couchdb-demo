# pa195-couchdb-demo
Demo examples for CouchDB presentation

## presentation slides

http://jludvice.github.io/pa195-couchdb-demo/

## ldap2json
*Simple proxy that turns HTTP GET requests into LDAP queries and
then returns JSON-encoded results.*  

Project github https://github.com/larsks/ldap2json



## Couchtacty
*Web app deployable to CouchDB*

```bash
# generate empty app
$ couchapp generate couchtacty

# go to generated directory
$ cd couchtacty

# deploy to CouchDB - to db called "mydb"
$ couchapp push mydb
2016-04-24 12:51:15 [INFO] Visit your CouchApp here:
http://127.0.0.1:5984/mydb/_design/couchtacty/index.html
```

### Dependencies
```bash
# install couchdb from repositories (or any other source)
$ sudo dnf install couchdb

# start couchdb
$ sudo service couchdb start

# install couchapp cli helper
pip install couchapp
```
