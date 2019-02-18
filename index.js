
function getRepositories() {
  const name = document.getElementById('username').value
  const uri = 'https://api.github.com/users/' + name + '/repos'
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayRepositories);
  req.open("GET", uri)
  req.send()
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText)
  const repoList = '<ul>' + repos.map(r => {
      const dataUsername = 'data-username="' + r.owner.login + '"';
      const dataReponame = 'data-repository="' + r.name + '"';
      return `<li> ${r.name} <a href="${r.html_url}">${r.html_url}</a><br>
      <a href="#" ${dataReponame} ${dataUsername} onclick=getCommits(this)>Get Commits</a>
      <a href="#" ${dataReponame} ${dataUsername} onclick=getBranches(this)>Get Branches</a>
      </li>`
    })
    .join('') + '</ul>'
  document.getElementById("repositories").innerHTML = repoList
}


