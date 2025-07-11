const shows = [
    {
        date: "July 25",
        time: "8pm",
        url: "https://www.eventbrite.com/e/wait-what-the-stand-up-comedy-drinking-game-tickets-1442188698219?aff=oddtdtcreator",
        venue: {
            name: "Saint August Maison",
            address: "153 Robert St.",
            city: "Slidell, LA"
        }
    },
    {
        date: "August 7",
        time: "8pm",
        url: "https://app.opendate.io/e/wait-what-at-sports-drink-august-show-august-07-2025-569030",
        venue: {
            name: "Sports Drink",
            address: "1042 Toledano St.",
            city: "New Orleans, LA"
        }
    },
    {
        date: "August 16",
        time: "7:30pm",
        url: "https://www.lafayettecomedy.com/events/waitwhat8-16",
        venue: {
            name: "Rally Cap Brewing",
            address: "11212 Pennywood Ave.",
            city: "Baton Rouge, LA"
        }
    },
    {
        date: "September 4",
        time: "8pm",
        url: "https://app.opendate.io/e/wait-what-at-sports-drink-september-show-september-04-2025-569031",
        venue: {
            name: "Sports Drink",
            address: "1042 Toledano St.",
            city: "New Orleans, LA"
        }
    },
    {
        date: "October 2",
        time: "8pm",
        url: "https://app.opendate.io/e/wait-what-at-sports-drink-october-show-october-02-2025-569032",
        venue: {
            name: "Sports Drink",
            address: "1042 Toledano St.",
            city: "New Orleans, LA"
        }
    },
    {
        date: "November 6",
        time: "8pm",
        url: "https://app.opendate.io/e/wait-what-at-sports-drink-november-show-november-06-2025-569033",
        venue: {
            name: "Sports Drink",
            address: "1042 Toledano St.",
            city: "New Orleans, LA"
        }
    },
    {
        date: "December 4",
        time: "8pm",
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
        filename: "taj.png",
        title: "Taj Washington at Hi-Ho Lounge in New Orleans, LA"
    },
    {
        filename: "teddy.png",
        title: "Teddy Patterson at Hi-Ho Lounge in New Orleans, LA"
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