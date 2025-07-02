document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    if (myButton && messageParagraph) {
        myButton.addEventListener('click', () => {
            messageParagraph.textContent = 'Button was clicked! Hello from JavaScript!';
            console.log('Button clicked!');
        });
    } else {
        console.error('Could not find button or message paragraph elements.');
    }
});
