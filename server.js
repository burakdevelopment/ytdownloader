const express = require('express');
const youtubedl = require('youtube-dl-exec');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', async (req, res) => {
    const { url } = req.body;
    if (!url || (!url.includes('youtube.com') && !url.includes('youtu.be'))) {
        console.log('Geçersiz URL: ', url);
        return res.json({ success: false, error: 'geçerli bir YouTube URL’si gir' });
    }

    let normalizedUrl = url;
    if (url.includes('youtu.be')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        normalizedUrl = `https://www.youtube.com/watch?v=${videoId}`;
    }

    console.log('Denenen URL: ', normalizedUrl);
    try {
        const info = await youtubedl(normalizedUrl, {
            dumpSingleJson: true,
            noCheckCertificates: true,
            noWarnings: true
        });
        console.log('Video bilgisi alındı: ', info.title);
        res.json({ success: true });
    } catch (error) {
        console.error('Hata detayları: ', error.message, error.stack);
        res.json({ success: false, error: 'Video bilgisi alınamadı Hata: ' + error.message });
    }
});

app.post('/download', async (req, res) => {
    const { url, quality } = req.body;
    if (!url || (!url.includes('youtube.com') && !url.includes('youtu.be'))) {
        return res.status(400).send('Geçersiz URL YouTube linki gir');
    }

    let normalizedUrl = url;
    if (url.includes('youtu.be')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        normalizedUrl = `https://www.youtube.com/watch?v=${videoId}`;
    }

    try {
        console.log(`İndirme başlıyor: ${normalizedUrl} - ${quality}`);
        const tempFile = path.join(__dirname, `temp_video_${quality}.mp4`);

        
        const startTime = Date.now();
        await youtubedl(normalizedUrl, {
            format: `bestvideo[height<=?${quality.replace('p', '')}]+bestaudio/best`,
            output: tempFile,
            mergeOutputFormat: 'mp4',
            noCheckCertificates: true,
            noWarnings: true
        });

        const duration = Date.now() - startTime;
        console.log(`İndirme tamamlandı süre: ${duration} ms`);

        const fileSize = fs.statSync(tempFile).size;
        console.log(`Dosya boyutu: ${fileSize} bytes`);
        if (fileSize < 1024) { 
            fs.unlinkSync(tempFile);
            throw new Error('Dosya çok küçük indirme başarısız!');
        }

        res.setHeader('Content-Disposition', `attachment; filename="video_${quality}.mp4"`);
        res.setHeader('Content-Type', 'video/mp4');
        res.download(tempFile, `video_${quality}.mp4`, (err) => {
            if (err) console.error('Dosya gönderme hatası: ', err);
            fs.unlinkSync(tempFile); 
        });

    } catch (error) {
        console.error('İndirme hatası: ', error.message, error.stack);
        if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
        res.status(500).send('indirme başarısız: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
