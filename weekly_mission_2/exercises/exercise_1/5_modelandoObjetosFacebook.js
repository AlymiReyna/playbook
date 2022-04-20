//Facebook: user, post, biography

const user = {
    name: "Alymi Reyna",
    birthdate: "22/05/2002",
    age: 19,
    friends: 120,

    getNameAndFriends: function(){
      return this.name + " has " + this.friends + " friends."
    }
   }

const post = {
    date: "20/04/2022",
    reactions: 48,
    shares: 30,

    getReactionsAndShares: function(){
      return "This post has " + this.reactions + " reactions and " + this.shares + " shares."
    }
   }

const biography = {
    user: "Alymi Reyna",
    generalInfo: "Designer, software developer and photographer.",
    friends: "120",

    getUserAndGeneralInfo: function(){
      return this.user + ". " + this.generalInfo
    }
   }
   
   console.log(user.getNameAndFriends())
   console.log(post.getReactionsAndShares())
   console.log(biography.getUserAndGeneralInfo())