// Получение данных с сервера через API
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        const materialsSection = document.getElementById('materials');

        // Очистка секции с материалами перед добавлением новых данных
        materialsSection.innerHTML = '';

        // Вывод материалов на страницу
        posts.forEach(post => {
            const materialDiv = document.createElement('div');
            materialDiv.classList.add('material');

            const postId = document.createElement('p');
            postId.textContent = `ID: ${post.id}`;

            const postTitle = document.createElement('p');
            postTitle.textContent = `Title: ${post.title}`;

            // Добавление ID и заголовка в блок материала
            materialDiv.appendChild(postId);
            materialDiv.appendChild(postTitle);

            // Добавление блока материала в секцию
            materialsSection.appendChild(materialDiv);
        });
    })
    .catch(error => {
        console.error('Ошибка получения данных:', error);
    });
// Функция для фильтрации материалов по имени
function filterMaterials() {
    const filterValue = document.getElementById('filterByName').value.toLowerCase();
    const materialsSection = document.getElementById('materials');

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            // Очистка секции с материалами перед добавлением новых данных
            materialsSection.innerHTML = '';

            // Фильтрация материалов по имени
            const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(filterValue));

            // Вывод отфильтрованных материалов на страницу
            filteredPosts.forEach(post => {
                const materialDiv = document.createElement('div');
                materialDiv.classList.add('material');

                const postId = document.createElement('p');
                postId.textContent = `ID: ${post.id}`;

                const postTitle = document.createElement('p');
                postTitle.textContent = `Title: ${post.title}`;

                // Добавление ID и заголовка в блок материала
                materialDiv.appendChild(postId);
                materialDiv.appendChild(postTitle);

                // Добавление блока материала в секцию
                materialsSection.appendChild(materialDiv);
            });
        })
        .catch(error => {
            console.error('Ошибка получения данных:', error);
        });
}
