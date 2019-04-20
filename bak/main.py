# [START app]

# [START imports]
from google.appengine.ext import vendor
vendor.add('lib')

import  logging
from    os             import environ
from    datetime       import timedelta
from    functools      import update_wrapper
from    flask          import Flask, render_template, request, make_response, current_app, jsonify
from    flask.ext.cors import CORS, cross_origin

#from    sql.msql       import zcdb, zcdk, zddb, zldb, zltb, zltbs, zdtb, znwcd, zztb, zdwhere
# [END imports]


# [START create_app]
#app     =  Flask(__name__)
#cors    =  CORS( app, resources={ r"/lsdb"   : {"origins": "*"} } )  # list db(s) 4 db
#cors    =  CORS( app, resources={ r"/lstb"   : {"origins": "*"} } )  # list table(s) 4 tbl
#cors    =  CORS( app, resources={ r"/nwdb"   : {"origins": "*"} } )  # new db
#cors    =  CORS( app, resources={ r"/nwtb"   : {"origins": "*"} } )  # new db
#cors    =  CORS( app, resources={ r"/lstbs"  : {"origins": "*"} } )  # list tables
#cors    =  CORS( app, resources={ r"/deldk"  : {"origins": "*"} } )  # delete table
#cors    =  CORS( app, resources={ r"/delcd"  : {"origins": "*"} } )  # delete table
#cors    =  CORS( app, resources={ r"/newcd"  : {"origins": "*"} } )  # create deck
#cors    =  CORS( app, resources={ r"/lddeck" : {"origins": "*"} } )  # create deck

SQL_DB  =  environ.get('SQL_DB')
app.config['CORS_HEADERS'] = 'Content-Type'
# [END create_app]


def zlog( subc, txt ):
  # log category, text

  txt = str( txt )

  try:
     if ( subc == "info" ):
      logging.info( "%s" % txt )

     if ( subc == "error" ):
       logging.error( "%s" % txt )
  except:
     print("log %s" % txt )

  return


def validate( headers ):

  hst = headers['Host']
  uas = headers['User-Agent']

  for h in headers:
     print(h)

  return [ hst, uas ]

def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))

    if headers is not None and not isinstance(headers, basestring):
        headers = ', '.join(x.upper() for x in headers)

    if not isinstance(origin, basestring):
        origin = ', '.join(origin)

    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers

            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)

            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers

            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator




# [START kart]
@app.route('/')
@app.route("/index.html")
@app.route("/index.php")
@app.route("/index")
def landing():
  return render_template('index.html',
       SQL_DB   = SQL_DB )
# [END landing]



@app.route('/lstb', methods=['POST'])
@crossdomain(origin="*")
def ltb():

  zdb = None
  ztb = None

  ner = request.json.items()

  for ky, val in ner:
     ky  = str( ky )
     val = str( val )

     if ( ky == "zdb" ):
         zdb = val
     if ( ztb == "ztb" ):
         ztb = val

  if ( zdb ):
     if ( ztb ):
	# will return bool or str query for cmp
        return str( zltb( zdb, ztb ) )

  else:
     return "False"


