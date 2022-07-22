from api.v1.person.service.person_service import Person

from flask_restx import Resource, Namespace, cors
from flask import request


NS_PERSON = Namespace(name="Person", description="This is the status check of the app", path="/api")


@NS_PERSON.route("/v1/person")
class PersonPost(Resource):
    @NS_PERSON.response(code=200, description="Success")
    @NS_PERSON.response(code=400, description="Bad request")
    @NS_PERSON.response(code=404, description="Not found")
    @NS_PERSON.response(code=500, description="Internal server error")
    @cors.crossdomain(origin="*")
    def post(self):

        data = request.get_json()

        person = Person(**data)

        valid = person.create_person()

        if not valid:
            return {"message": "Person couldn't be created"}, 400

        return {"message": "Person created successfully"}, 200

    @NS_PERSON.response(code=200, description="Success")
    @NS_PERSON.response(code=404, description="Not found")
    @NS_PERSON.response(code=500, description="Internal server error")
    @cors.crossdomain(origin="*")
    def get(self):

        persons = Person.get_all()

        return {"message": "Success", "data": persons}, 200


@NS_PERSON.route("/v1/person/<string:id>")
class PersonGetById(Resource):
    @NS_PERSON.response(code=200, description="Success")
    @NS_PERSON.response(code=404, description="Not found")
    @NS_PERSON.response(code=500, description="Internal server error")
    @cors.crossdomain(origin="*")
    def get(self, id):
        person = Person.get_by_id(id)

        if person is None:
            return {"message": "Person not found"}, 400

        return {"message": "Success", "data": person}, 200

    @NS_PERSON.response(code=200, description="Success")
    @NS_PERSON.response(code=404, description="Not found")
    @NS_PERSON.response(code=500, description="Internal server error")
    @cors.crossdomain(origin="*")
    def delete(self, id):
        deleted = Person.delete(id)

        if not deleted:
            return {"message": "Person was not deleted"}, 400

        return {"message": "Person was deleted successfully"}, 200

    @NS_PERSON.response(code=200, description="Success")
    @NS_PERSON.response(code=404, description="Not found")
    @NS_PERSON.response(code=500, description="Internal server error")
    @cors.crossdomain(origin="*")
    def patch(self, id):
        return {"message": "A person"}, 200
