$(function(){
    new Promise(function(resolve, reject){
        $.get('update_hash.hash', function(data){
            resolve(data)
        });
    }).then(function(hash_data){
        for (let i = 0; i < 65536; i++) {
            let index = '' + i;
            let md5data = md5(index);
            if(md5data == hash_data){
                return index;
            }
        }
    }).then(console.log);
});