migrate((db) => {
  const collection = new Collection({
    "id": "bg118bmg7aab13m",
    "created": "2023-05-20 14:38:19.169Z",
    "updated": "2023-05-20 14:38:19.169Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pghwzc9b",
        "name": "message",
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
        "id": "bx4fmier",
        "name": "sender",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "a5s2f8vo",
        "name": "conversation",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "75yf7mat72i3n5v",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
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
  const collection = dao.findCollectionByNameOrId("bg118bmg7aab13m");

  return dao.deleteCollection(collection);
})
