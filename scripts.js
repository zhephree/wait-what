const shows = [
    {
        date: "November 6",
        time: "7pm",
        url: "https://app.opendate.io/e/wait-what-at-sports-drink-november-show-november-06-2025-569033",
        venue: {
            name: "Sports Drink",
            address: "1042 Toledano St.",
            city: "New Orleans, LA"
        }
    },
    {
        date: "December 4",
        time: "7pm",
        url: "https://app.opendate.io/e/wait-what-at-sports-drink-december-show-december-04-2025-569034",
        venue: {
            name: "Sports Drink",
            address: "1042 Toledano St.",
            city: "New Orleans, LA"
        }
    },
];

const photos = [
    {
        filename: "terence.jpg",
        title: "Terence Delane at Sports Drink in New Orleans, LA"
    },
    {
        filename: "lee.jpg",
        title: "Lee Glass at Sports Drink in New Orleans, LA"
    },
    {
        filename: "marcus.jpg",
        title: "Marcus Bond at Sports Drink in New Orleans, LA"
    },
    {
        filename: "jake.jpg",
        title: "Jake COsden at Sports Drink in New Orleans, LA"
    },
    {
        filename: "olivia.jpg",
        title: "Olivia Spencer at Sports Drink in New Orleans, LA"
    },
    {
        filename: "keeda.jpg",
        title: "Keeda with a Q at Sports Drink in New Orleans, LA"
    },
    {
        filename: "benjamin.png",
        title: "Benjamin Hoffman at Chafunkta Brewery in Mandeville, LA"
    },
    {
        filename: "chance.png",
        title: "Chance McAdams at Hi-Ho Lounge in New Orleans, LA"
    },
    {
        filename: "joe.png",
        title: "Joe Tolpi at Hi-Ho Lounge in New Orleans, LA"
    },
    {
        filename: "joe2.png",
        title: "Joe Tolpi at Hi-Ho Lounge in New Orleans, LA"
    },
    {
        filename: "kat.png",
        title: "Kat Dreher at Hi-Ho Lounge in New Orleans, LA"
    },
    {
        filename: "keeda.png",
        title: "Keeda with a Q at Chafunkta Brewery in Mandeville, LA"
    },
    {
        filename: "mallory.png",
        title: "Mallory Head at Hi-Ho Lounge in New Orleans, LA"
    },
    {
        filename: "sam.png",
        title: "Samantha Bednars at Hi-Ho Lounge in New Orleans, LA"
    },
    {
        filename: "taj.jpg",
        title: "Taj Washington at Sports Drink in New Orleans, LA"
    },
    {
        filename: "teddy.jpg",
        title: "Teddy Patterson at Sports Drink in New Orleans, LA"
    },
    {
        filename: "tedo.png",
        title: "Ted Orphan at Hi-Ho Lounge in New Orleans, LA"
    },
    {
        filename: "troy.png",
        title: "Troy Duchane at Hi-Ho Lounge in New Orleans, LA"
    },
]

if ("content" in document.createElement("template")) {
    const grid = document.getElementById('photo-grid');
    const thumbTemplate = document.getElementById('thumbnail-template');

    for(let photo of photos){
        const clone = thumbTemplate.content.cloneNode(true);

        clone.querySelector('.thumbnail-link').href = `./images/photos/${photo.filename}`;
        clone.querySelector('.thumbnail-link').title = photo.title;
        clone.querySelector('.thumbnail-image').src = `./images/photos/thumbs/${photo.filename}`;
        clone.querySelector('.thumbnail-image').alt = photo.title;

        grid.appendChild(clone);
    }

    const dates = document.getElementById('dates');
    const showTemplate = document.getElementById('show-template');

    for(let show of shows){
        const clone = showTemplate.content.cloneNode(true);

        clone.querySelector('.show-date').textContent = show.date;
        clone.querySelector('.show-time').textContent = show.time;
        if(show.url && show.url.length > 0){
            clone.querySelector('.btn').href = show.url;
        }else{
            clone.querySelector('.btn').href = '#';
            clone.querySelector('.btn').innerText = 'Available Soon';
            clone.querySelector('.btn').setAttribute('disabled', 'disabled');
            clone.querySelector('.btn').onclick = (e) => false;
        }
        clone.querySelector('.show-venue').textContent = show.venue.name;
        clone.querySelector('.show-street').textContent = show.venue.address;
        clone.querySelector('.show-city').textContent = show.venue.city;

        dates.appendChild(clone);
    }
}