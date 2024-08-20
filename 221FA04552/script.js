document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const container = document.getElementById('container');
    const text = document.getElementById('text');

    let isToggled = false;

    button.addEventListener('click', () => {
        if (isToggled) {
            text.textContent = 'Attack on Titan';
            container.style.backgroundColor = 'rgb(219, 77, 165);';
            button.textContent = 'Change';
            button.classList.remove('active');
        } else {
            text.textContent = 'Levi Ackerman';
            container.style.backgroundColor = 'lightcoral';
            button.textContent = 'Revert';
            button.classList.add('active');
        }
        isToggled = !isToggled;
    });
});
