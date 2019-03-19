// your code here
function getCommits(el) {
  const repoName = el.dataset.repository;
  const rootURL = 'https://api.github.com';
  const uri =
    rootURL + '/repos/' + el.dataset.username + '/' + repoName + '/commits';
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', uri);
  req.send();
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.commit.author.name +
        '<li><strong>' +
        commit.author.login +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}


