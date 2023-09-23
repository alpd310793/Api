document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const userList = document.getElementById('user-list');
    const userDetails = document.getElementById('user-details');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then(data => {
            // Mostrar la lista de usuarios
            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                // Agregar un evento de clic para mostrar detalles del usuario
                listItem.addEventListener('click', () => {
                    // Mostrar los detalles del usuario en el área de detalles
                    userDetails.innerHTML = `
                        <h2>${user.name}</h2>
                        <p><strong>Nombre de usuario:</strong> ${user.username}</p>
                        <p><strong>Correo electrónico:</strong> ${user.email}</p>
                        <p><strong>Teléfono:</strong> ${user.phone}</p>
                        <p><strong>Website:</strong> ${user.website}</p>
                        <!-- Agrega más detalles aquí si lo deseas -->
                    `;
                });
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al llamar a la API:', error);
        });
});
