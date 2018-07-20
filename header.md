<script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"></script>
<script>
  fetch('/_book/gitbook/style.css').catch(error => {
    window.location = window.location.href;
  });
</script>

<div style="display: flex; align-items: center">
  <img alt="logo" id="logo-img" src="https://en.gravatar.com/userimage/107370100/a08594145564536138dfaaf072c7b241.png" />
  <h1 style="margin: 0 10px;">
    <span id="logo-city">Austin</span>
    Coding Academy
  </h1>
</div>

<script type="text/javascript">
  var img, city, key;
  switch (window.location.host.split('.')[1]) {
    case 'houstontxcodingacademy':
      img = "https://en.gravatar.com/userimage/107370100/8929bf98bfb0323911888716a93da00b.png";
      city = "Houston";
      key = "houstontx";
      break;
    case 'sanantoniocodingacademy':
      img = "https://secure.gravatar.com/userimage/107370100/0918789e7818ad581794ec8ae0a889d8.png";
      city = "San Antonio";
      key = "sanantonio";
      break;
    case 'dallascodingacademy':
      img = "https://secure.gravatar.com/userimage/107370100/4e6f9d7f5c483b96ca3907d1929ea27c.png";
      city = "Dallas";
      key = "dallas";
      break;
    default:
      img = "https://en.gravatar.com/userimage/107370100/a08594145564536138dfaaf072c7b241.png";
      city = "Austin";
      key = "austin";
      break;
  }
  document.getElementById('logo-img').setAttribute('src', img);
  document.getElementById('logo-city').innerText = city;
  document.querySelector('link[rel="shortcut icon"]').setAttribute('href', 'gitbook/images/' + key + '.ico');
</script>
