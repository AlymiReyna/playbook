const pullRequest = {
    title: "Playbook",
    branchName: "main",
    date_created: "10/04/2022",
    status: "Active",
    repositoryNameAssociated: "LaunchX",
    author: "Carlo Gilmar",

    getStatus: function(){
      return this.title + " is currently " + this.status
    },
    getTitleAndAuthor: function(){
        return this.title + " by " + this.author
      }
   }
   
   console.log(pullRequest.getStatus())
   console.log(pullRequest.getTitleAndAuthor())
   
   