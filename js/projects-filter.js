// Projects Filter

document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('click', () => {
    if (!skill.classList.contains('selected')) {
      document.querySelectorAll('.techs').forEach(techHtml => {
        let hasTech = false;
        techHtml.innerHTML.split('|').forEach(arrayTech => {
          if (arrayTech.toLowerCase() === skill.getAttribute('id')) hasTech = true;
        });
        if (!hasTech) {
          if (document.querySelector(`.project#${techHtml.getAttribute('for')}`).classList.contains('fadeIn'))
            document.querySelector(`.project#${techHtml.getAttribute('for')}`).classList.remove('fadeIn');
          document.querySelector(`.project#${techHtml.getAttribute('for')}`).classList.add('fadeOut');
        }
        skill.classList.add('selected');
      });
    } else {
      document.querySelectorAll('.skill').forEach(skill => skill.classList.remove('selected'));
      document.querySelectorAll('.project').forEach(project => {
        if (project.classList.contains('fadeOut')) {
          project.classList.remove('fadeOut');
          project.classList.add('fadeIn');
        }
      });
    }
  });
});
