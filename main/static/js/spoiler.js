document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.text').forEach(function (container) {
        const showTextSpan = container.querySelector('.show-text');
        let originalContent = showTextSpan.innerHTML;
        let shortContent = originalContent.slice(0, 250) + '...';

        showTextSpan.innerHTML = shortContent;

        const showMoreBtn = container.querySelector('.show-more-btn');
        const showLessBtn = container.querySelector('.show-less-btn');

        showMoreBtn.addEventListener('click', function () {
            showTextSpan.innerHTML = originalContent;
            showMoreBtn.style.display = 'none';
            showLessBtn.style.display = 'inline';
        });

        showLessBtn.addEventListener('click', function () {
            showTextSpan.innerHTML = shortContent;
            showLessBtn.style.display = 'none';
            showMoreBtn.style.display = 'inline';
        });
    });
});