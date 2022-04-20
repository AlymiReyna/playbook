const repo = {
    title: "Playbook",
    repositoryNameAssociated: "LaunchX",
    status: "Open",
    numberOfComments: 122,
    labels: "BackEnd, JS, LaunchX",
    author: "Carlo Gilmar",
    date_created: "10/04/2022",
    last_updated: "20/04/2022",
    getTitleAndAuthor: function(){
      return this.title + " by " + this.author
    },
    getGeneralInfo: function(){
      return `This repository ${this.title} was created by ${this.author}`
    }
   }
   
   console.log("Título del repo:" + repo.title)
   console.log(repo.getTitleAndAuthor())
   console.log(repo.getGeneralInfo())
   