//Подсвечивание текста по наведению

let cont = document.querySelector('.content')
let x = cont.textContent.split(' ')

console.log(x)
cont.textContent = ''

for (let y of x) {
	// cont.textContent = ''
	let newg = document.createElement('span')
	newg.textContent = `${y} `
	newg.classList.add('fokus')
	cont.appendChild(newg)
}


//Побуквенный вывод текста
let puk= document.querySelector('.puk')
let txt = document.querySelector('.txt2')

puk.addEventListener('click', () => {
	let a = txt.textContent.split('')
	// a.reverse()
	txt.textContent = ''
	for ( let i = 0; i < a.length; i++) {
		setTimeout(()=> {
			let newg = document.createElement('span')
			newg.textContent = `${a[i]}`
			txt.appendChild(newg)
		}, i*300)
	}

})

