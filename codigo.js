function validaArrays(array, num) {
	try {
		if (!array && !num) throw new ReferenceError('É necessário enviar os parametros');

if (typeof array !== 'object')
			throw new TypeError('Parametro não reconhecido. Envie um elemento do tipo Array!');

if (typeof num !== 'number')
			throw new TypeError('Parametro não reconhecido.Envie um elemento do tipo Number!');

if (array.length !== num) throw new RangeError('Tamanho do array inválido!');

		return array;
	} catch (e) {
		if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Erro desconhecido');
			console.log(e.stack);
		}
	}
}

console.log(validaArrays([1, 2, 3], 0));
