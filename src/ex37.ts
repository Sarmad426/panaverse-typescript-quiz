// interface album {
//     artist_name: string,
//     album_name: string
// }
type album = {
    artistName: string,
    albumName: string,
    tracks?: number | string
}
const createAlbum = (artistName: string, albumName: string, tracks: number | string = 0): album => {
    const new_album: album = {
        artistName,
        albumName,
        tracks,
    }
    return new_album
}
let Doorian: album = createAlbum("Atif Aslam", "Doorian", 76)
let pslAnthem: album = createAlbum("Jhanzaib", "Psl Anthem,Josh Dikha De Tu", 93)
let enemy: album = createAlbum("Mian Adil", "Enemy", "No Tracks")
const countTracks = (albumName: album): number | string => {
    if (albumName.tracks !== undefined)
        return albumName.tracks
    else
        return "No Tracks"
}
console.log(Doorian);
console.log(pslAnthem)
console.log(enemy);
console.log(countTracks(Doorian))