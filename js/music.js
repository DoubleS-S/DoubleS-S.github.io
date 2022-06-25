const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: '光るなら',
        artist: 'Goose house',
        url: 'https://m701.music.126.net/20220625183252/a973c2f4122a2b041b4d1ca13d660318/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/8955010614/676a/8aaf/e581/76cb32c7d5274e5f8e663afb33413ae0.m4a',
        cover: 'https://p1.music.126.net/w1pQ83qhoVMJ_eMpRyoAtA==/109951166200199773.jpg?param=130y130',
    }, 
	]
});
