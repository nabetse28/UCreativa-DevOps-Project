from flask_restx import Resource, Namespace

NS_STATUS = Namespace(name="Status", description="This is the status check of the app", path="/api")


@NS_STATUS.route("/v1/status")
class Status(Resource):
    @NS_STATUS.response(code=200, description="Success")
    @NS_STATUS.response(code=404, description="Not found")
    @NS_STATUS.response(code=500, description="Internal server error")
    def get(self):
        return {"message": "The app is running"}, 200
