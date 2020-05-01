const url = 'http://newsapi.org/v2/top-headlines?' +
    'country=in&' +
    'apiKey=396f24a36ea64c608de1d62b555ac1c4';

jQuery(document).ready(async function news() {
    await fetch(url)
        .then((res) => res.json())
        .then((articles) => {
            let output = "";
            articles.articles.forEach((article) => {
                console.log(articles);
                output += `
                    <li class="article">
                      <img class="article-img" src="${article.urlToImage}">

                      <h2 class="article-title">${article.title}</h2>

                      <p class="article-description">${article.description}</p>

                      <span class="article-author">${article.author}</span>
                        
                      <a class="article-link" href="${article.url}" target="_blank"></a>
                    </li>
                `;
            });
            document.getElementById("news-articles").innerHTML = output;
        })
        .catch((err) => console.log(err));
});

$(document).ready(function() {
    $('#search').keypress(() => {
        let searchField = $("#search").val();
        const url2 = `https://newsapi.org/v2/everything?q=${searchField}&apiKey=396f24a36ea64c608de1d62b555ac1c4`;

        if (searchField !== "") {
            $.ajax({
                url: url2,
                method: "GET",
                dataType: "json",

                success: function(news) {
                    let output2 = "";
                    let articals = news.articles;

                    for (var art of articals) {
                        console.log(articals);
                        //const art = 
                        output2 += `
                <li class="article">
                    <img class="article-img" src="${art.urlToImage}">

                    <h2 class="article-title">${art.title}</h2>

                    <p class="article-description">${art.description}</p>

                    <span class="article-author">${art.author}</span>

                    <a class="article-link" href="${art.url}" target="_blank"></a>
                </li>
                `;
                    }
                    if (output2 !== "") {
                        document.getElementById("news-articles").innerHTML = output2;
                    } else {
                        $("#news-articles").html("<h3 class="not-found">No article was found based on the search.</h3>");
                    }
                }
            });
        }
    });
});
