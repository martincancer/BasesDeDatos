const classCountNode = document.getElementById('class-count');
  const publishedClasses = document.querySelectorAll('[data-class-item]').length;

  if (classCountNode) {
    classCountNode.textContent = publishedClasses;
  }

