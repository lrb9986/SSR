var obj = JSON.parse($response.body);

obj.data.score = 100000;

$done({body:JSON.stringify(obj)});
