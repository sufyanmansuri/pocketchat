migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75yf7mat72i3n5v")

  collection.listRule = "members.id ?= @request.auth.id"
  collection.viewRule = "members.id ?= @request.auth.id"
  collection.createRule = "members.id ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75yf7mat72i3n5v")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
