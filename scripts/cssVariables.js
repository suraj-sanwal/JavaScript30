function handleInput() {
    const unit = this.dataset.unit || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
}

const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('change', handleInput));
inputs.forEach(input => input.addEventListener('mousemove', handleInput));