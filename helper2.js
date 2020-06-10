var obj = JSON.parse($response.body);

obj.data.free_search = 10000;
obj.data.search_num = 10000;
obj.data.iinivite_level = "LV3";
obj.data.is_invite = 1;

$donw({body:JSON.stringify(obj)});
