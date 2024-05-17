// 定义全局变量
var currentPage = 1;
var totalPages = 5; // 假设总页数为 3

// 页面加载完毕后执行初始化函数
window.onload = function() {
    updatePagination();
    showPage(currentPage);
};

// 更新分页按钮
function updatePagination() {
    var paginationContainer = document.querySelector('.pagination-button');

    // 清空原有按钮
    paginationContainer.innerHTML = '';

    // 添加向前的箭头按钮
    var previousFirstButton = createPaginationButton('<<');
    previousFirstButton.onclick = function() {
        if (currentPage > 1) {
            currentPage = 1;
            updatePagination();
            showPage(currentPage);
        }
    };
    paginationContainer.appendChild(previousFirstButton);

    var previousButton = createPaginationButton('<');
    previousButton.onclick = function() {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
            showPage(currentPage);
        }
    };
    paginationContainer.appendChild(previousButton);

    // 添加数字按钮
    for (var i = 1; i <= totalPages; i++) {
        var pageButton = createPaginationButton(i);
        pageButton.onclick = (function(page) {
            return function() {
                currentPage = page;
                updatePagination();
                showPage(currentPage);
            };
        })(i);
        paginationContainer.appendChild(pageButton);
    }

    // 添加向后的箭头按钮
    var nextButton = createPaginationButton('>');
    nextButton.onclick = function() {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
            showPage(currentPage);
        }
    };
    paginationContainer.appendChild(nextButton);

    var nextLastButton = createPaginationButton('>>');
    nextLastButton.onclick = function() {
        if (currentPage < totalPages) {
            currentPage = totalPages;
            updatePagination();
            showPage(currentPage);
        }
    };
    paginationContainer.appendChild(nextLastButton);

    // 更新按钮的活动状态
    var paginationButtons = paginationContainer.querySelectorAll('a');
    paginationButtons.forEach(function(button) {
        if (parseInt(button.textContent) === currentPage) {
            button.classList.add('pagination-active');
        } else {
            button.classList.remove('pagination-active');
        }
    });
}

// 创建分页按钮
function createPaginationButton(text) {
    var button = document.createElement('a');
    button.href = '#';
    button.textContent = text;
    return button;
}

// 根据页数显示对应内容
function showPage(pageNumber) {
    var items = document.querySelectorAll('.itemsPage');
    items.forEach(function(item) {
        var itemPage = parseInt(item.getAttribute('data-page'));
        if (itemPage === pageNumber) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}