const moment = require("moment");
module.exports = function generateXml(episodes) {
  let result = `<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">
<channel>
<title>Life Knocking</title>
<description>
Three friends and a microphone. What more could you ask for? Who knows where the conversation will go, but one thing's for sure, you're in store for quite a show! How will you answer the door!?
</description>
<image>
<title>Life Knocking</title>
<url>
http://s3.amazonaws.com/LifeKnocking/pics/LifeKnockingPodcastImage.jpg
</url>
<link>http://www.lifeknockingpodcast.com</link>
</image>
<language>en-us</language>
<copyright>Copyright 2018 I Own This</copyright>
<lastBuildDate>Tue, 13 Nov 2018 02:54:00 +0000</lastBuildDate>
<itunes:author>Life Knocking</itunes:author>
<itunes:subtitle>
Three friends and a microphone. What more could you ask for? Who knows where the conversation will go, but one thing's for sure, you're in store for quite a show! How will you answer the door!?
</itunes:subtitle>
<itunes:summary>
Three friends and a microphone. What more could you ask for? Who knows where the conversation will go, but one thing's for sure, you're in store for quite a show! How will you answer the door!?
</itunes:summary>
<itunes:image href="http://s3.amazonaws.com/LifeKnocking/pics/LifeKnockingPodcastImage.jpg"/>
<itunes:explicit>no</itunes:explicit>
<itunes:category text="Comedy"/>
<itunes:category text="Society &amp; Culture">
<itunes:category text="Personal Journals"/>
</itunes:category>
<itunes:category text="Kids &amp; Family"/>
<itunes:owner>
<itunes:email>LifeKnockingpodcast@gmail.com</itunes:email>
<itunes:name>Brandon Myers</itunes:name>
</itunes:owner>
<link>http://www.lifeknockingpodcast.com/podcasts</link>`;
  for (let i = 0; i < episodes.length; i++) {
    const ep = episodes[i];
    result += `<item>
<title>${ep.title}</title>
<description>
${ep.summary}
</description>
<link>
${ep.url}
</link>
<pubDate>${moment(ep.date_published)
      .add(4, "h")
      .format("ddd, DD MMM YYYY HH:mm:ss")} +0000</pubDate>
<itunes:image href="http://s3.amazonaws.com/LifeKnocking/pics/LifeKnockingPodcastImage.jpg"/>
<itunes:summary>
${ep.summary}
</itunes:summary>
<itunes:author>Life Knocking</itunes:author>
<itunes:duration>${ep.duration}</itunes:duration>
<itunes:order>${i}</itunes:order>
<itunes:explicit>no</itunes:explicit>
<itunes:subtitle>
${ep.summary.substring(0, 255)}
</itunes:subtitle>
<enclosure url="${ep.url}" length="${ep.file_size}" type="audio/mpeg"/>
</item>`;
  }
  result += `</channel>
</rss>`;
  return result;
};
