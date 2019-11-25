export class Animate {
	constructor(animateClassName = 'animated') {
		this.animateClassName = animateClassName;
	}
	setAnimation(element, animationName, callback) {
		const node = document.querySelector(element)
		node.classList.add(this.animateClassName, this.animateClassName+'-'+animationName)

		function handleAnimationEnd() {
			node.classList.remove(this.animateClassName, this.animateClassName+'-'+animationName)
			node.removeEventListener('animationend', handleAnimationEnd)

			if(typeof callback === 'function') callback()
		}
		node.addEventListener('animationend', handleAnimationEnd);
	}
	setAnimationExtended(...args) {
		// Parse arguments
		const element = args[0].element,
			animationName = args[0].animation,
			animationSpeed = args[0].speed,
			animationCallback = args[0].callback;

		if(element && element != 'undefined' && typeof(element === 'string')) {
			if(animationName && animationName != 'undefined' && typeof(animationName === 'string')) {

				const node = document.querySelector(element)
				node.classList.add(this.animateClassName, this.animateClassName+'-'+animationName)

				function handleAnimationEnd() {
					node.classList.remove(this.animateClassName, this.animateClassName+'-'+animationName)
					node.removeEventListener('animationend', handleAnimationEnd)

					if(typeof animationCallback === 'function') animationCallback()
				}

				node.addEventListener('animationend', handleAnimationEnd);
				return true;

			} else {
				return 'Error! Add `animation` parameter!';
			}
		} else {
			return 'Error! Add `element` parameter!';
		}
	}
}