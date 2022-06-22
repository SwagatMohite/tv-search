const form = document.querySelector("#searchForm");
form.addEventListener('submit', async function(e) {
    // API search results..
        e.preventDefault();
        const searchTerm = form.elements.query.value;
        //simplyfy Q string while calling api each time.
        const config = { params: {q: searchTerm}}
        //API fetch through config
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        makeImages(res.data);
        form.elements.query.value = '';
    // Print Images on each search results!!
});
    const makeImages = (shows) => {
        for(let result of shows){
            if(result.show.image){
                const img = document.createElement("img");
                img.src = result.show.image.medium;
                document.body.append(img);
            }
        }   
    } 
