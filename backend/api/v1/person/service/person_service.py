from db_utils.mongoclient import DB_Client
from bson.objectid import ObjectId

db = DB_Client()


class Person:
    COLLECTION = "person"

    def __init__(self, _id=None, name="", age=0, description="", background=""):
        if _id is not None:
            self._id = str(_id)
        self.name = name
        self.age = age
        self.description = description
        self.background = background

    def create_person(self):
        result = db.insert_one(self.COLLECTION, self.__dict__)
        if not result.acknowledged:
            return False
        return True

    @classmethod
    def get_all(cls):
        result = db.get_all_data(cls.COLLECTION, values_dict={})
        return [Person(**p).__dict__ for p in result]

    @classmethod
    def get_by_id(cls, id):
        result = db.get_data(cls.COLLECTION, values_dict={"_id": ObjectId(id)})
        print(result, flush=True)
        if result is None:
            return None
        return Person(**result).__dict__

    @classmethod
    def delete(cls, id):
        result = db.delete_data(cls.COLLECTION, {"_id": ObjectId(id)})
        if result.deleted_count > 0:
            return True
        return False


if __name__ == "__main__":
    pass
