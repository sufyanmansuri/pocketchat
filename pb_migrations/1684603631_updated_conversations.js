migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75yf7mat72i3n5v")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75yf7mat72i3n5v")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
