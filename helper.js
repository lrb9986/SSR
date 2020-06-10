var obj ={
  "code": 200,
  "msg": "请求成功",
  "data": {
    "free_search": 100000
  },
  "timestamp": Date.now()
};
$done({ body: JSON.stringify(obj)});
