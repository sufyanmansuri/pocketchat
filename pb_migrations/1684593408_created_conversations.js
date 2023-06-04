migrate((db) => {
  const collection = new Collection({
    "id": "75yf7mat72i3n5v",
    "created": "2023-05-20 14:36:48.804Z",
    "updated": "2023-05-20 14:36:48.804Z",
    "name": "conversations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dnu9ldun",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("75yf7mat72i3n5v");

  return dao.deleteCollection(collection);
})
