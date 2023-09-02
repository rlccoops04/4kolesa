const tabs = document.querySelectorAll('.parameter_block_tabs_item');
const form_search_tire = document.forms[0];
const form_search_disk = document.forms[1];

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => {
            item.classList.remove('active_tab');
        });
        tab.classList.add('active_tab');
        
        if(tab.innerText == 'Шины') {
            form_search_tire.classList.remove('hide');
            form_search_disk.classList.add('hide');
        } else if(tab.innerText == 'Диски') {
            form_search_tire.classList.add('hide');
            form_search_disk.classList.remove('hide');
        }
    });
});

const selects = document.querySelectorAll('.select_block');
let width,
    producer,
    profile,
    seasons,
    diametr;
let diametr_disk,
    producer_disk,
    PCD,
    type_disk,
    ET;
let current;
selects.forEach(select => {
    const selectedInput = select.childNodes[1].childNodes[1];
    selectedInput.addEventListener('blur', (e) => {
        select.childNodes[3].classList.add('hide');
        select.childNodes[1].style.cssText = 'border-radius: 5px;';
    });
    select.childNodes[3].addEventListener('mousedown', (e) => {
        selectedInput.value = e.target.innerText;
        current = selectedInput.value;
        if(selectedInput.name == 'width') { width = current}
        else if(selectedInput.name == 'producer') { producer = current}
        else if(selectedInput.name == 'profile') { profile = current}
        else if(selectedInput.name == 'seasons') { seasons = current}
        else if(selectedInput.name == 'diametr') {diametr = current}
        if(width && producer && profile && seasons && diametr) {
            const search_btn = document.querySelector('.search_btn_tire');
            search_btn.removeAttribute('disabled');
            search_btn.style.cssText = 'background-color: rgb(214, 186, 0);';
            search_btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('отправляем данные на сервер');
                window.location.reload();
            });
        }
        if(selectedInput.name == 'diametr_disk') { diametr_disk = current}
        else if(selectedInput.name == 'producer_disk') { producer_disk = current}
        else if(selectedInput.name == 'PCD') { PCD = current}
        else if(selectedInput.name == 'type_disk') { type_disk = current}
        else if(selectedInput.name == 'ET') {ET = current}
        if(diametr_disk && producer_disk && PCD && type_disk && ET) {
            const search_btn = document.querySelector('.search_btn_disk');
            search_btn.removeAttribute('disabled');
            search_btn.style.cssText = 'background-color: rgb(214, 186, 0);';
            search_btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert('отправляем данные на сервер');
                window.location.reload();
            });
        }
    });
    select.addEventListener('mousedown', (e) => {
        select.childNodes[3].classList.remove('hide');
        select.childNodes[1].style.cssText = 'border-radius: 5px 5px 0 0px;';
        current = selectedInput.value;
        selectedInput.removeAttribute('readonly');
    });
    selectedInput.addEventListener('input', () => {
        select.childNodes[3].forEach()
    });
    
});

const catalog_btn = document.querySelector('.catalog_btn_block');
const catalog_window = document.querySelector('.catalog_window');
const strip_block = document.querySelector('.strip_block');
catalog_btn.addEventListener('click', () => {
    catalog_window.classList.toggle('hide');
    strip_block.childNodes[5].classList.toggle('opened');
    strip_block.childNodes[1].classList.toggle('opened1');
    strip_block.childNodes[3].classList.toggle('hide');
});