function greetUser() {
  const now = new Date();
  const hours = now.getHours();
  let greeting = '';

  if (hours < 12) {
    greeting = 'Selamat Pagi';
  } else if (hours < 18) {
    greeting = 'Selamat Sore';
  } else {
    greeting = 'Selamat Malam';
  }

  document.getElementById('greeting').textContent = `${greeting}, kaliann ><!`;
}

document.addEventListener('DOMContentLoaded', greetUser);
