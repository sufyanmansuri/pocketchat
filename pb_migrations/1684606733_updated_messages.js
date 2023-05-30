migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bg118bmg7aab13m")

  collection.listRule = "conversation.members.id ?= @request.auth.id"
  collection.viewRule = "conversation.members.id ?= @request.auth.id"
  collection.createRule = "conversation.members.id ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bg118bmg7aab13m")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
