function init() {
  const chapterInput = document.getElementById('chapterInput');
  const addBtn = document.getElementById('addBtn');
  const chapterList = document.getElementById('chapterList');

  storageToSet('bomChapters').forEach((chapter) => {
    addChapterToList(chapter, chapterList);
  });

  function handleInput() {
    const chapter = chapterInput.value;

    if (!chapter) {
      return;
    }

    addChapterToList(chapter, chapterList);

    // clean up
    chapterInput.value = '';
    chapterInput.focus();
  }

  addBtn.addEventListener('click', () => handleInput);
  chapterInput.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 13) {
      // if enter key then add to list
      handleInput();
    }
  });
}

function addChapterToList(chapter, list) {
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = chapter;
  listItem.appendChild(span);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.addEventListener('click', removeChapter);

  listItem.appendChild(deleteBtn);
  list.appendChild(listItem);

  // persist the chapter
  storeChapter(chapter);
}

function removeChapter(event) {
  const listItem = event.currentTarget.parentNode; // button's parent

  purgeChapter(listItem.children[0].textContent);

  listItem.parentNode.removeChild(listItem);
}

function storeChapter(chapter) {
  let currentChapters = storageToSet('bomChapters');
  currentChapters.add(chapter);
  setToStorage('bomChapters', currentChapters);
}

function purgeChapter(chapter) {
  let currentChapters = storageToSet('bomChapters');
  currentChapters.delete(chapter);
  setToStorage('bomChapters', currentChapters);
}

function storageToSet(key) {
  return new Set(JSON.parse(localStorage.getItem(key)));
}

function setToStorage(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

window.onload = init;
