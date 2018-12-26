from pyramid.view import view_config
from pyramid.response import Response

from pyramid.httpexceptions import HTTPNotFound

from sqlalchemy.exc import DBAPIError

from .. import models


@view_config(route_name='get_tags', renderer='json')
def get_tags_controler(request):
    try:
        query = request.dbsession.query(models.Tag)
        tags = query.all()
        if len(tags) == 0:
            raise HTTPNotFound()
        dict_objs = [tag.as_dict() for tag in tags]
    except DBAPIError:
        return Response(db_err_msg, content_type='text/plain', status=500)
    return dict_objs
