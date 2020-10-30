if (localStorage.TODOS == undefined) localStorage.TODOS = '';

document.querySelector('#TODOS').innerHTML += localStorage.TODOS;
document.querySelector('.btn-add').addEventListener('click', add);
document.querySelector('body').addEventListener('keypress', (e) => { if (e.key === 'Enter') add() });
update();

document.querySelectorAll('.check').forEach(item => {
    $(item).change(function () {
        if ($(this).is(":checked")) {
            $(closest(item, 'div')).addClass('done');
        } else {
            $(closest(item, 'div')).removeClass('done');
        }
        localStorage.TODOS = document.querySelector('#TODOS').innerHTML.slice(237)
    });
});

document.querySelectorAll('.done input').forEach(item => {
    item.checked = true;
})

function closest(el, selector) {
    var matchesFn;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
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

    document.querySelector('#TODOS').innerHTML += clone.outerHTML;

    document.querySelector('.inp-task').value = '';

    update();

    localStorage.TODOS = document.querySelector('#TODOS').innerHTML.slice(237);
}

function update() {
    document.querySelectorAll('.todo').forEach(item => {
        item.querySelector('.btn-remove').addEventListener('click', () => {
            closest(item.querySelector('.btn-remove'), 'div').remove();

            localStorage.TODOS = document.querySelector('#TODOS').innerHTML.slice(237);
        });
    })
}
