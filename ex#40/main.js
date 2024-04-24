function make_album(artist_name, album_title, track) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var album1 = make_album("faria", "album title 1");
var album2 = make_album("usman", "album tital 2");
var album3 = make_album("hassan", "album taital 3", 3);
console.log(album1);
console.log(album2);
console.log(album3);
