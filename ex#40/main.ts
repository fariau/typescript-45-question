function make_album(artist_name: string, album_title: string, track?: number){
    let album:{artist: string, title: string, track? :number} ={
        artist: artist_name,
        title: album_title,
    };
    if(track !== undefined ){
        album.track = track;
    }
    return album;

}
let album1 = make_album("faria", "album title 1")
let album2 = make_album("usman", "album tital 2")
let album3 = make_album("hassan", "album taital 3", 3 )
console.log(album1);
console.log(album2);
console.log(album3);
