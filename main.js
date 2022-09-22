  const linksSocialMedia = {
    github: 'brunakarina',
    youtube: 'kabisish',
    facebook:'brunakarina',
    instagram: 'brubesz',
    twitter: 'brubesz'
  } 

  function changeSocialMediaLinks(){
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

      // alert(li.children[0].href)
    }
  }
    changeSocialMediaLinks()

    function getGithubProfileInfos(){
      const url = `https://api.github.com/users/${linksSocialMedia.github}`

      fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

    }

    getGithubProfileInfos()