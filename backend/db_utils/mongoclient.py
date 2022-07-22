from pymongo import MongoClient
import os


class DB_Client:
    def __init__(self, database="population"):
        self.database = database
        self.config = {
            "username": os.getenv("MONGO_USER", ""),
            "password": os.getenv("MONGO_PASSWORD", ""),
            "server": os.getenv("MONGO_SERVER", ""),
            "port": os.getenv("MONGO_PORT", 27017),
        }

    def connection(self):
        try:
            url = f"mongodb://{self.config['username']}:{self.config['password']}@{self.config['server']}:{self.config['port']}"
            print("Trying to connect to mongo...")
            return MongoClient(url)
        except Exception as e:
            print(f"Error: {e}")
            return None

    def lookup_unwind_formating(self, lookups):
        lookups_unwinds_list = []
        for lookup in lookups:
            unwind = {
                "$unwind": {"path": f"${lookup['as']}", "preserveNullAndEmptyArrays": True},
            }
            lookup_aux = {"$lookup": lookup}
            lookups_unwinds_list.append(lookup_aux)
            lookups_unwinds_list.append(unwind)
        return lookups_unwinds_list

    def insert_one(self, collection, values_dict: dict):
        db = self.connection()[self.database]
        if db is None:
            print("Database connection is not working")
            return
        print("Inserting one record")
        result = db[collection].insert_one(values_dict)
        print(result)
        return result

    def get_all_data(self, collection, values_dict=dict(), lookups=list()):
        db = self.connection()[self.database]
        if db is None:
            print("Database connection is not working")
            return
        lookups_queries = self.lookup_unwind_formating(lookups)
        return db[collection].aggregate(
            [
                *lookups_queries,
                {"$match": values_dict},
            ]
        )

    def get_data(self, collection, values_dict=dict(), lookups=list()):
        db = self.connection()[self.database]
        lookups_queries = self.lookup_unwind_formating(lookups)
        data = db[collection].aggregate(
            [
                *lookups_queries,
                {
                    "$match": values_dict,
                },
                {
                    "$limit": 1,
                },
            ]
        )
        data = list(data)
        print(data, flush=True)
        if not len(data):
            return None
        return data[0]

    def update_data(self, collection, values_dict, update_dict):
        db = self.connection()[self.database]
        if db is None:
            print("Database connection is not working")
            return
        return db[collection].update_one(values_dict, {"$set": update_dict})

    def delete_data(self, collection, values_dict):
        db = self.connection()[self.database]
        if db is None:
            print("Database connection is not working")
            return
        return db[collection].delete_one(values_dict)


if __name__ == "__main__":
    pass
