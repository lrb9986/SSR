var date = Date.now();
var data = {
  body: "{\"code\": 200,  \"msg\": \"请求成功\",  \"data\": {    \"free_search\": 1000000  },  \"timestamp\": "+date+"}",
  headers: {
    "Content-Type": "application/json"
  }
};
$done({response: data});
