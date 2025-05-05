
    function showSection(id) {
      document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
      document.querySelectorAll('.navbar button').forEach(btn => btn.classList.remove('active'));

      document.getElementById(id).classList.add('active');
      const buttons = document.querySelectorAll('.navbar button');
      buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(id)) {
          btn.classList.add('active');
        }
      });
    }
