migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75yf7mat72i3n5v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zt8ztpc7",
    "name": "members",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": 2,
      "maxSelect": 2,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75yf7mat72i3n5v")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zt8ztpc7",
    "name": "members",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
