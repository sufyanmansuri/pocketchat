migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bg118bmg7aab13m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2r9ivskb",
    "name": "read",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bg118bmg7aab13m")

  // remove
  collection.schema.removeField("2r9ivskb")

  return dao.saveCollection(collection)
})
