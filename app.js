const treeListButtons = document.querySelectorAll('.tree-list__button');

function changeStatus(e) {
  const treeListButton = e.target;
  const parent = treeListButton.parentElement;
  const treeList = parent.querySelector('.tree-list__list');
  const treeListIcon = parent.querySelector('.tree-list__item-icon');

  treeList.classList.contains('tree-list__list_visible')
    ? treeList.classList.remove('tree-list__list_visible')
    : treeList.classList.add('tree-list__list_visible');

  treeListButton.classList.contains('tree-list__button_close')
    ? treeListButton.classList.remove('tree-list__button_close')
    : treeListButton.classList.add('tree-list__button_close');

  treeListIcon.classList.toggle('tree-list__item-icon_image_folder-open');
}

treeListButtons.forEach((item) => {
  item.addEventListener('click', changeStatus);
});
