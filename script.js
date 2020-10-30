document.querySelector('.btn-add').addEventListener('click', add);
document.querySelector('body').addEventListener('keypress', (e) => {if (e.key === 'Enter') add()});

function closest(el, selector) {
    var matchesFn;

    // find vendor prefix
    ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    })

    var parent;

    // traverse parents
    while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
            return parent;
        }
        el = parent;
    }

    return null;
}

function add() {

    if (document.querySelector('.inp-task').value == '') return;

    var todoSelector = document.querySelector('.todo');
    var clone = todoSelector.cloneNode(true);

    clone.querySelector('h2').textContent = document.querySelector('.inp-task').value;
    clone.style.display = 'block';

    document.querySelector('#TODOS').appendChild(clone);

    document.querySelector('.inp-task').value = '';

    clone.querySelector('.btn-remove').addEventListener('click', () => {
        closest(clone.querySelector('.btn-remove'), 'div').remove();
    })

}