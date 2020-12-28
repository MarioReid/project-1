var pexelsAPIkey = "563492ad6f91700001000001b70fb799bff84ca4b8a69bfeb2fb60e3";

import { createClient } from 'pexels';

const client = createClient(pexelsAPIkey);
const query = 'Nature';

client.photos.search({ 
    query, per_page: 1 
}).then(function(response){
    console.log(response)
});