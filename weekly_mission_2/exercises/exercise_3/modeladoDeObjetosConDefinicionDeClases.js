//GitHub
class Repo{

    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_closed){
         this.name = name,
         this.author = author,
        this.language = language,
        this.numberOfCommits = numberOfCommits,
        this.stars = stars,
        this.forks = forks,
        this.issues_open = issues_open,
        this.issues_closed = issues_closed
    }

    getTotalIssues(){
        return this.issues_open + this.issues_close
      }

    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
      }
}

//Instanciando objeto a la clase Repo
/*const obj = new Repo("LaunchX", "Alymi", "English", 16, 20, 11, 2, 1)
console.log(obj.getGeneralInfo())*/

class Issue{
    constructor(title, repositoryNameAssociated,status, numberOfCommits, labels, author, date_created, date_updated){
        this.title = title,
        this.repositoryNameAssociated = repositoryNameAssociated,
        this.status = status,
        this.numberOfCommits = numberOfCommits,
        this.labels = labels,
        this.author = author,
        this.date_created = date_created,
        this.date_updated = date_updated
    }

    getTitleAndAuthor(){
        return this.title + " by " + this.author
      }

      getGeneralInfo(){
        return `This repository ${this.title} was created by ${this.author}`
      }
}

class PullRequest{
    constructor(title, branchName, date_created, status, repositoryNameAssociated, author){
        this.title = title,
        this.branchName = branchName,
        this.date_created = date_created,
        this.status = status,
        this.repositoryNameAssociated = repositoryNameAssociated,
        this.author = author
    }

    getStatus(){
        return this.title + " is currently " + this.status
      }

    getTitleAndAuthor(){
          return this.title + " by " + this.author
        }
}
