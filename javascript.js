const skillElements = document.querySelectorAll('.skill-progress');

skillElements.forEach(skillElement => {
  const progress = skillElement.getAttribute('data-progress');
  skillElement.style.setProperty('--progress', progress / 100);
});
