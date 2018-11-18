

let blogs = {
    "blog1": {
        "author": "Petr Matej",
        "date": "20.1.2018",
        "title": "Visiting Prague",
        "body": "Prague is the capital and largest city in the Czech Republic, the 14th largest city in the European Union[9] and the historical capital of Bohemia. Situated in the north-west of the country on the Vltava river, the city is home to about 1.3 million people, while its metropolitan area is estimated to have a population of 2.6 million.[4] The city has a temperate climate, with warm summers and chilly winters.\n" +
            "\n" +
            "Prague has been a political, cultural and economic centre of central Europe complete with a rich history. Founded during the Romanesque and flourishing by the Gothic, Renaissance and Baroque eras, Prague was the capital of the kingdom of Bohemia and the main residence of several Holy Roman Emperors, most notably of Charles IV (r. 1346–1378).[10] It was an important city to the Habsburg Monarchy and its Austro-Hungarian Empire. The city played major roles in the Bohemian and Protestant Reformation, the Thirty Years' War and in 20th-century history as the capital of Czechoslovakia, during both World Wars and the post-war Communist era",
        "image": "images/praha.jpg",
        "tags": ["#Prague", "#Visit", "#History"],
        "comments": 10
    },
    "blog2": {
        "author": "Petr Matej",
        "date": "16.11.2018",
        "title": "Maledives - Eden on Earth",
        "body": "The Maldives - officially the Republic of Maldives, is a South Asian country, located in the Indian Ocean, situated in the Arabian Sea. It lies southwest of Sri Lanka and India. The chain of 26 atolls stretches from Ihavandhippolhu Atoll in the north to the Addu City in the south. Comprising a territory spanning roughly 298 square kilometres (115 sq mi), the Maldives is one of the world's most geographically dispersed sovereign states as well as the smallest Asian country by land area and population, with around 427,756 inhabitants. Malé is the capital and most populated city, traditionally called the \"King's Island\" for its central location.",
        "image": "images/house.jpg",
        "tags": ["#Maledives", "#Holiday", "#Sun"],
        "comments": 5
    },
    "blog3": {
        "author": "Petr Matej",
        "date": "1.12.2018",
        "title": "History of Eiffel Tower",
        "body": "The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.\n" +
            "\n" +
            "Constructed from 1887–1889 as the entrance to the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world.[3] The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.\n" +
            "\n" +
            "The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.\n" +
            "\n" +
            "The tower has three levels for visitors, with restaurants on the first and second levels. The top level's upper platform is 276 m (906 ft) above the ground – the highest observation deck accessible to the public in the European Union. Tickets can be purchased to ascend by stairs or lift to the first and second levels. The climb from ground level to the first level is over 300 steps, as is the climb from the first level to the second. Although there is a staircase to the top level, it is usually accessible only by lift.",
        "image": "images/eiffel.jpg",
        "tags": ["#France", "#Visit", "#History"],
        "comments": 12
    },
    "blog4": {
        "author": "Petr Matej",
        "date": "1.12.2018",
        "title": "History of Eiffel Tower",
        "body": "The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.\n" +
            "\n" +
            "Constructed from 1887–1889 as the entrance to the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world.[3] The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.\n" +
            "\n" +
            "The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.\n" +
            "\n" +
            "The tower has three levels for visitors, with restaurants on the first and second levels. The top level's upper platform is 276 m (906 ft) above the ground – the highest observation deck accessible to the public in the European Union. Tickets can be purchased to ascend by stairs or lift to the first and second levels. The climb from ground level to the first level is over 300 steps, as is the climb from the first level to the second. Although there is a staircase to the top level, it is usually accessible only by lift.",
        "image": "images/eiffel.jpg",
        "tags": ["#France", "#Visit", "#History"],
        "comments": 12
    }
};


var add_articles = function() {
    var myDiv = document.getElementById("posts-body");
    var keys = Object.keys(blogs);


    for(var i = 0; i < keys.length; i++) {
        prop = blogs[keys[i]];

        innerDiv = "<h3 class='navbar-brand'>" + prop.title + "</h3>";

        innerDiv += "<ul class=\"text-muted\">" +
            "<li><i class=\"fa fa-clock prefix grey-text mr-2\"></i>" + "Date: " + prop.date + "</li>" +
            "<li><i class=\"fa fa-user prefix grey-text mr-2\"></i>" + "Author: " + prop.author + "</li>" +
            "<li><i class=\"fa fa-tag prefix grey-text mr-2\"></i>" + "Tags: " + prop.tags + "</li>" +
            "<li><i class=\"fa fa-pen prefix grey-text mr-2\"></i>" + "Comments:" + prop.comments + "</li>" +
            "</ul>";

        innerDiv += "<div class='mb-3'>" +
            "<img src='" + prop.image +  "' class=\"img-fluid\"" +
            "</div>";

        innerDiv += "<div class='description mt-3 mb-2'>" +
            "<p>" +
            prop.body.substring(0, 300) + "..." +
            "</p>" +
            "</div>";

        innerDiv += "<a href=\"detail.html\"><button type=\"post\" class=\"mb-5 btn btn-warning\" onclick='clicked_page(\"" + keys[i] + "\")' '>Continue Reading...</button></a>";

        myDiv.innerHTML += "<div class='post-body mt-5'>" + innerDiv + "</div><hr>"

        if(i < 3) {
            var rightBox = document.getElementById("recent-posts");

            var innerBox = "<div class='col-md-5'>" +
                "<img class=\"img-fluid mx-auto\" src=\"" + prop.image + "\">" +
                "</div>";

            innerBox += "<div>" +
                "<a href=\"detail.html\" onclick='clicked_page(\"" + keys[i] + "\")'><strong>" + prop.title + "</strong></a>" +
                "<p><small>" + prop.date + "</small></p>" +
                "</div>";

            rightBox.innerHTML += "<div class=\"row\">" + innerBox + "</div><hr>";
        }
    }
};

var clicked_page = function (key) {
    localStorage.setItem('selected', key);
};



var article_detail = function () {
    var selected = localStorage.getItem('selected');
    post = blogs[selected];

    document.getElementById("blog-title").innerHTML = post.title;
    document.getElementById("post-main-title").innerHTML = post.title;

    var date = document.getElementById("post-date");
    date.innerHTML = date.innerHTML.replace("Dummy", "Date: " + post.date);

    var author = document.getElementById("post-author");
    author.innerHTML = author.innerHTML.replace("Dummy", "Author: " +  post.author);

    var tags = document.getElementById("post-tags");
    tags.innerHTML = tags.innerHTML.replace("Dummy", "Tags: " +  post.tags);

    var comments = document.getElementById("post-comments");
    comments.innerHTML = comments.innerHTML.replace("Dummy", "Comments: " +  post.comments);

    var body = document.getElementById("post-body");
    body.innerHTML = body.innerHTML.replace("Dummy", post.body);

    document.getElementById("post-image").src = post.image;
};
