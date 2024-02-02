export const googleApi = "AIzaSyCMjdFtJKIpks7hqxsVKIxypOqL8_AE_fo"
export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+googleApi
const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${"channelId"}&key=`+googleApi;