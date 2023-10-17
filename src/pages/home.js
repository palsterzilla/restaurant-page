const home = function() {
  const topBar = document.createElement('div');
  topBar.setAttribute('class', 'top-bar');
  topBar.setAttribute('id', 'topBar');
  document.body.appendChild(topBar);

  const topInfo = document.createElement('div');
  topInfo.setAttribute('class', 'top-info');
  topInfo.setAttribute('id', 'topInfo');
  topBar.appendChild(topInfo);

  const topList = document.createElement('ul');
  const topListArr = ['62-851-555-666 ', '115 jln in aja dulu || bdgjkt, id 0509 || '];
  for (let i = 0; i < topListArr.length; i++) {
    const li = document.createElement('li');
    li.textContent = topListArr[i];

    topList.appendChild(li);
  }
  topInfo.appendChild(topList);

}

export default home;