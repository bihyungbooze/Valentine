$imageUrls = @(
    'https://media.tenor.com/7YQUKDPb2fsAAAAi/love-couple.gif',
    'https://4kwallpapers.com/images/walls/thumbs_3t/10102.png',
    'https://4kwallpapers.com/images/walls/thumbs_3t/10102.png',
    'https://64.media.tumblr.com/747062436e2060f66805240612f027cc/995a4a98b6e87c23-cd/s540x810/c39df1c302c0e0a6da8074e012f7021099089357.gif'
)

$i = 1
foreach ($url in $imageUrls) {
    $outputFile = "couple$i.png"
    Invoke-WebRequest -Uri $url -OutFile $outputFile
    $i++
}
