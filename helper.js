var obj ={
  "code": 200,
  "msg": "请求成功",
  "data": {
    "free_search": 100000,
    "search_num": 100000,
    "score": 100000,
    "invite_count": 100000,
    "invite_level": "LV3",
    "is_authentication": -1,
    "is_invite": 1,
    "discount": 100000
  },
  "timestamp": Date.now()
};
$done({ body: JSON.stringify(obj)});
