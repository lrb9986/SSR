var obj = JSON.parse($response.body);

obj.data['free_search'] = 10000;
obj.data['search_num'] = 10000;
obj.data['invite_count'] = 100;
obj.data['iinivite_level'] = "LV1";
obj.data['is_authentication'] = 1;
obj.data['is_invite'] = 1;
obj.data['discount'] = 1;
obj.timestamp = Date.now();

$done({body:JSON.stringify(obj)});
