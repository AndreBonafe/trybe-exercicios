window.onload = function() {
  function loadData() {
    const body = document.querySelector('body');
    const test = document.querySelector('.test');
    
    body.style.backgroundColor = localStorage.getItem('bgc');
    test.style.color = localStorage.getItem('txtc');
    test.style.fontSize = localStorage.getItem('font') + 'px';
    test.style.lineHeight = localStorage.getItem('space') + 'px';
    test.style.fontFamily = localStorage.getItem('tipo');
  }

  loadData();
  
  const bgc = document.querySelector('#bg');
  const txtc = document.querySelector('#txtc');
  const font = document.querySelector('#font');
  const space = document.querySelector('#space');
  const tipo = document.querySelector('#tipo');

  bgc.addEventListener('keydown', function(event){
    if (event.key === 'Enter' || event.keyCode === 13) {
      const body = document.querySelector('body');
      body.style.backgroundColor = bgc.value;
      localStorage.setItem('bgc', bgc.value);
    }
  })
  txtc.addEventListener('keydown', function(event){
    if (event.key === 'Enter' || event.keyCode === 13) {
      const test = document.querySelector('.test');
      test.style.color = txtc.value;
      localStorage.setItem('txtc', txtc.value);
    }
  })
  font.addEventListener('keydown', function(event){
    if (event.key === 'Enter' || event.keyCode === 13) {
      const test = document.querySelector('.test');
      test.style.fontSize = font.value + 'px';
      localStorage.setItem('font', font.value);
    }
  })
  space.addEventListener('keydown', function(event){
    if (event.key === 'Enter' || event.keyCode === 13) {
      const test = document.querySelector('.test');
      test.style.lineHeight = space.value + 'px';
      localStorage.setItem('space', space.value);
    }
  })
  tipo.addEventListener('keydown', function(event){
    if (event.key === 'Enter' || event.keyCode === 13) {
      const test = document.querySelector('.test');
      test.style.fontFamily = tipo.value;
      localStorage.setItem('tipo', tipo.value);
    }
  })
}