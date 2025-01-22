const songs = [
    {
        id: 1,
        name: 'Locked Away',
        artist: 'R. City',
        image: '../../../multimedia/locked away.jpg',
        genre: 'hip hop',
        source: '../../../multimedia/locked away.mp3'
    },
    {
        id: 2,
        name: 'Shape of You',
        artist: 'Ed Sheeran',
        image: '../../../multimedia/shape of you.jpg',
        genre: 'pop',
        source: '../../../multimedia/shape of you.mp3'
    },
    {
        id: 3,
        name: 'Sugar',
        artist: 'Maroon',
        image: '../../../multimedia/sugar.jpg',
        genre: 'hip hop',
        source: '../../../multimedia/sugar.mp3'
    }
]

class Playlist 
{
    constructor(name, queue) 
    {
        this.name = name
        this.queue = [...queue]
    }
    addSong(song)
    {
        if(!this.queue.find(s => s.name == song.name))
        {
            this.queue.push(song)
            return 0
        }
        return -1
    }
}

// Global variables
let index = 0
let currentSong = songs[index]
let queue = songs
let playlists = []
let currentPlaylist
// DOM elements
const root = document.documentElement
const songList = document.getElementById('song-list')
const cover = document.getElementById('cover')
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const player = document.querySelector('audio')
const playlistName = document.querySelector('#playlist-name')
const allPlaylists = document.querySelector('#all-playlists')
const queueContainer = document.querySelector('#queue')
const songSearchList = document.querySelector('#song-search-results')
const playlistSearchList = document.querySelector('#playlist-search-results')
const songInput = document.querySelector('#song-input')
const playlistInput = document.querySelector('#playlist-input')

renderSongs(songs, songList)
renderCurrentSong()
document.querySelector('#filter').addEventListener('change', showSongs)
document.querySelector('#theme-switch').addEventListener('change', toggleTheme)
document.querySelector('#next').addEventListener('click', next)
document.querySelector('#prev').addEventListener('click', previous)
document.querySelector('#add').addEventListener('click', addToPlaylist)
document.querySelector('#create-playlist').addEventListener('click', createPlaylist)
document.querySelector('#search-song').addEventListener('click', searchSongs)
document.querySelector('#search-playlist').addEventListener('click', searchPlaylists)

/**
 * Toggles the theme of the page
 */
function toggleTheme()
{
    const theme = root.getAttribute('data-theme') == 'light' ? 'dark' : 'light'
    root.setAttribute('data-theme', theme)
}
/*
 * Renders the songs in the songs section based on the filter selected
 */
function showSongs()
{
    songList.innerHTML = `<h2>All Songs:</h2>`
    switch(this.value)
    {
        case 'all': renderSongs(songs, songList); break;
        default: renderSongs(songs.filter(song => song.genre == this.value), songList)
    }
}
/**
 * Renders the current song into the player
 */
function renderCurrentSong()
{
    cover.setAttribute('src', currentSong.image)
    title.textContent = currentSong.name
    artist.textContent = currentSong.artist
    player.setAttribute('src', currentSong.source)
}
/**
 * Moves to next song in the queue
 */
function next()
{
    if(index < queue.length - 1)
    {
        currentSong = queue[++index]
        renderCurrentSong()
    }
}
/**
 * Moves to the previous song in the queue 
 */
function previous()
{
    if(index > 0)
    {
        currentSong = queue[--index]
        renderCurrentSong()
    }
}
/**
 * Adds the current song to the current playlist and updates
 * the index
 */
function addToPlaylist()
{
    if(currentPlaylist.addSong(currentSong) == 0)
    {
        queueContainer.append(createSongElement(currentSong))
        index = currentPlaylist.queue.indexOf(currentSong)
        currentSong = queue[index]
    }
}
/**
 * Adds a playlist to the all playlists section
 */
function createPlaylist()
{
    const name = playlistName.value.trim()
    playlistName.value = ''
    if(name !== '')
    {
        if(!playlists.find(p => p.name == name))
        {
            const playlist = new Playlist(name, [])
            playlists.push(playlist)
            allPlaylists.append(createPlaylistElement(playlist))
        }
    }
}
/**
 * Changes the current playlist, renders it and updates the queue
 */
function renderPlaylistSong()
{
    currentPlaylist = playlists.find(p => p.name == this.textContent)
    if(currentPlaylist.queue.length !== 0)
    {
        queue = currentPlaylist.queue
        index = 0
        currentSong = queue[index]
        renderCurrentSong()
    }
    renderPlaylist()
}
/**
 * Searches the song list and renders the matches
 */
function searchSongs()
{
    const input = songInput.value.trim()
    songSearchList.innerHTML = ''
    songInput.value = ''
    if(input.length !== 0)
    {
        const matches = songs.filter(s => s.name.includes(input))
        songSearchList.append(...matches.map(song => createSongElement(song)))
    }
}
/**
 * Finds and displays the matching playlists
 */
function searchPlaylists()
{
    const input = playlistInput.value.trim()
    playlistInput.value = ''
    playlistSearchList.innerHTML = ''
    if(input.length != 0)
    {
        const matches = playlists.filter(p => p.name.includes(input))
        playlistSearchList.append(...matches.map(playlist => createPlaylistElement(playlist)))
    }
}

/**
 * Renders the songs into the given container
 * @param {songs[]} songs Songs to be rendered
 * @param {Element} container element that will display all the songs
 */
function renderSongs(songs, container)
{
    container.append(...songs.map(s => createSongElement(s)))
}
/**
 * Creates an HTML element from the given song object
 * @param {songs} song Song
 * @returns HTML element representing a song
 */
function createSongElement(song)
{
    const songElement = document.createElement('button')
    songElement.classList.add('song')
    songElement.setAttribute('data-name', song.name)
    songElement.textContent = `${song.name} - ${song.artist}`
    songElement.addEventListener('click', songEventHandler)
    return songElement
}
/**
 * Creates an HTML element from the given playlist object
 * @param {Playlist} playlist playlist
 * @returns HTML element representing a playlist
 */
function createPlaylistElement(playlist)
{
    let playlistElement = document.createElement('button')
    playlistElement.classList.add('playlist')
    playlistElement.textContent = playlist.name
    playlistElement.addEventListener('click', renderPlaylistSong)
    return playlistElement
}
/**
 * Changes the current song to the selected song and renders it
 */
function songEventHandler()
{
    currentSong = songs.find(s => s.name == this.getAttribute('data-name'))
    renderCurrentSong()
}
/**
 * Renders the current playlist
 */
function renderPlaylist()
{
    queueContainer.innerHTML = `<h2>Current Playlist: ${currentPlaylist.name}</h2>`
    queueContainer.append(...currentPlaylist.queue.map(song => createSongElement(song)))
    renderCurrentSong()
}