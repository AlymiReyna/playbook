//Twitter: user, trending topic, hashtag

const user = {
    name: "Alymi Reyna",
    username: "@ReynaAlymi",
    age: 19,
    followers: 12,

    getNameAndUsername: function(){
      return this.name + " is registered as " + this.username
    }
   }

const trendingTopic = {
    title: "Ukraine",
    date: "20/04/2022",
    tweets: 17000,
    rank: 2,

    getTitleRankAndTweets: function(){
      return this.title + " is the #" + this.rank + " trending topic with " + this.tweets + " tweets." 
    }
   }

const hashtag = {
    title: "#TheOscars2022",
    date: "27/03/2022",

    getTitleAndDate: function(){
      return this.title + " " + this.date
    }
   }
   
   console.log(user.getNameAndUsername())
   console.log(trendingTopic.getTitleRankAndTweets())
   console.log(hashtag.getTitleAndDate())