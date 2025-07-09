// creating the html page only in js. Without the use of html tags and elements.

// There are three appraoches to create an html page in js file.

let legend = [
    {
        imgUrl : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP._gfOg-XjZJMnfDoD5BvTvQHaNK%3Fpid%3DApi&f=1&ipt=3d2f1a8b5f9968b9df5c4177c274a543d2c63dd7b9f5fd8305fc55a6ad3526c2&ipo=images",
        legendName : "Title: Dhoni",
        legendJob1: "The Captain",
        legendJob2: "The Wicketkeeper",
        legendJob3 : "The Finisher",
        legendSurName: "CAPTAIN COOL"
    },
    {
        imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP._gfOg-XjZJMnfDoD5BvTvQHaNK%3Fpid%3DApi&f=1&ipt=3d2f1a8b5f9968b9df5c4177c274a543d2c63dd7b9f5fd8305fc55a6ad3526c2&ipo=images",
        legendName : "Title: Dhoni",
        legendJob1 : "The Captain",
        legendJob2 : "The Wicketkeeper",
        legendJob3 : "The Finisher",
        legendSurName : "CAPTAIN COOL"
    },
    {
        imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP._gfOg-XjZJMnfDoD5BvTvQHaNK%3Fpid%3DApi&f=1&ipt=3d2f1a8b5f9968b9df5c4177c274a543d2c63dd7b9f5fd8305fc55a6ad3526c2&ipo=images",
        legendName : "Title: Dhoni",
        legendJob1 : "The Captain",
        legendJob2 : "The Wicketkeeper",
        legendJob3 : "The Finisher",
        legendSurName : "CAPTAIN COOL"
    },
    {
        imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP._gfOg-XjZJMnfDoD5BvTvQHaNK%3Fpid%3DApi&f=1&ipt=3d2f1a8b5f9968b9df5c4177c274a543d2c63dd7b9f5fd8305fc55a6ad3526c2&ipo=images",
        legendName : "Title: Dhoni",
        legendJob1 : "The Captain",
        legendJob2 : "The Wicketkeeper",
        legendJob3 : "The Finisher",
        legendSurName : "CAPTAIN COOL"
    }
]

// console.log(legend);

// This creates a object with a array called array of an object

// In approach one we have to call a property using the string.

// Approach -1 : The string method

// let finalResult = '<section>';

// for (i=0;i<legend.length;i++){
//     finalResult += '<figure>';
//     finalResult += '<img src =' + legend[i].imgUrl + 'alt=Dhoni-Image/>';
//     finalResult += '<figcaption>' + legend[i].legendName + '</figcaption>';
//     finalResult += '<figcaption>' + legend[i].legendJob1 + '</figcaption>';
//     finalResult += '<figcaption>' + legend[i].legendJob2 + '</figcaption>';
//     finalResult += '<figcaption>' + legend[i].legendJob3 + '</figcaption>';
//     finalResult += '<figcaption>' + legend[i].legendSurName + '</figcaption>';
//     finalResult += '</figure>'
// }
// finalResult += '</section>'

// // console.log(finalResult);
// document.write(finalResult)


// Approach - 2: Backtick Methods

let finalResult = '<section>';

for(i=0;i<legend.length;i++){

    finalResult += `<figure>

    <img src="${legend[i].imgUrl}"/>
    <figcaption>${legend[i].legendName}</figcaption>
    <figcaption>${legend[i].legendJob1}</figcaption>
    <figcaption>${legend[i].legendJob2}</figcaption>
    <figcaption>${legend[i].legendJob3}</figcaption>
    <figcaption>${legend[i].legendSurName}</figcaption>

    </figure>`
}
finalResult += '</section>';
// console.log(finalResult);
document.write(finalResult);
