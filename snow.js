const snowContainer = document.getElementById('snow-container');
const snowflakeCount = 100;

for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄️';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
    snowContainer.appendChild(snowflake);
}

document.querySelectorAll('.snowflake').forEach(snowflake => {
    snowflake.style.top = -Math.random() * 100 + 'px';
});
