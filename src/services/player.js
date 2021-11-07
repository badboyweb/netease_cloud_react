import request from './request';

export function getSongDetail(ids) {
    return request({
        url: "/song/detail",
        params: {
            ids
        }
    })
}

export function getLyric(id) {
    return request({
        url: "/lyric",
        params: {
            id
        }
    })
}

export function getPlaySong(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
