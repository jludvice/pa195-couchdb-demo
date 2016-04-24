#!/bin/env python

__author__ = 'jludvice'

from couchdb.http import ResourceNotFound

import json
import couchdb

DB = "fimu"
JSON_FILE = "fi-ldap.json"

# connect to couchdb server
couch = couchdb.Server('http://localhost:5984/')

# create db -- kind of hack - not sure how to check if db exists in a better way
db = None
try:
    db = couch[DB]
    print "found existing database %s" % db
except ResourceNotFound, e:
    db = couch.create(DB)
    print "creating new database %s" % db

print "using database %s" % db

with open(JSON_FILE) as f:
    data = json.load(f)

    # another hack - take look at json - its array of arrays, where the "inner" array is always [entry's FQDN, entry's data]
    for (fqdn, value) in data:
        print "importing %s" % fqdn
        db.save(value)

    print "import finished :)"
