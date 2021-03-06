/*
    @preserve JS.Functions v2.3
    @license Copyright 2021 Eliton Lisboa
    @license MIT Licensed (https://github.com/Eliton-Lisboa/JS.Functions/blob/main/LICENSE)
*/
'use strict'

const _DEBUG = {
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    names: ['João', 'Pedro', 'Victor', 'Maria', 'Eliton', 'Andrielly', 'Eduardo', 'Eduarda', 'Joaquin', 'Marcos', 'Stefane', 'Jeazon', 'Andréa'],
    keys: 'adbecfdgehfigjhkiljmknlompnqorpsqtrusvtwuxvywzxaybzcADBECFDGEHFIGJHKILJMKNLOMPNQORPSQTRUSVTWUXVYWZXAYBZC',

    object: {
        image: './jpg image.png',
        title: 'My new book',
        subtitle: 'nerd adventures',
        tags: [
            'adventure',
            'terror',
            'arcade',
            'action'
        ],
        writer: 'I',
        views: 15500.00
    },
    function: () => 'Hello, World!',
    html: '<div> <p> Hello, World! </p> </div>'

}

const _INFOS = {
    out: (_$value) => {
        if (Array.isArray(_$value) && _$value.length == 1) {
            return _$value[0]
        }
        else {
            return _$value
        }
    },
    add: (_$add = ['arrays', 'strings', 'data']) => {
        const add = {
            arrays: { func: arrays, implements: 'Array' },
            strings: { func: strings, implements: 'String' },
            data: { func: data, implements: 'String' }
        }

        for (let x = 0; x < _$add.length; x++) {
            for (let y = 0; y < Object.keys(add[_$add[x]].func).length; y++) {
                eval(`${add[_$add[x]].implements}.${Object.keys(add[_$add[x]].func)[y]} = ${_$add[x]}.${Object.keys(add[_$add[x]].func)[y]}`)
            }

        }

    }
}

const arrays = {
    removeValues: ($array, _$values) => {
        let _newArray = []
        let _tmpBool = true

        if (!Array.isArray(_$values)) {
            _$values = [_$values]
        }

        for (let x = 0; x < $array.length; x++)
        {
            _tmpBool = true

            for (let y = 0; y < _$values.length; y++)
            {
                if ($array[x] === _$values[y]) {
                    _tmpBool = false
                }
            }

            if (_tmpBool) {
                _newArray.push( $array[x] )
            }
        }

        return _newArray
    },
    removePositions: ($array, _$positions) => {
        let _newArray = []

        if (!Array.isArray(_$positions)) {
            _$positions = [_$positions]
        }

        for (let x = 0; x < $array.length; x++) {
            if (!arrays.verifyValues(_$positions, x)) {
                _newArray.push( $array[x] )
            }
        }

        return _newArray
    },
    removeValuesEquivalence: ($arrays, _$values) => {
        let _newArray = []
        let _tmpBool = false
    
        $arrays = arrays.addEquivalence($arrays)

        for (let x = 0; x < $arrays.length; x++) { _newArray.push( [] ) }

        if (!Array.isArray(_$values)) {
            _$values = [_$values]
        }

        for (let x = 0; x < $arrays[0].length; x++) {
            _tmpBool = false

            for (let y = 0; y < $arrays.length; y++)
            {
                for (let z = 0; z < _$values.length; z++)
                {
                    if (!arrays.verifyValues(_$values, $arrays[y][x])) {
                        _tmpBool = true
                    }

                }
            }

            if (_tmpBool) {
                for (let y = 0; y < $arrays.length; y++) {
                    _newArray[y].push( $arrays[y][x] )
                }
            }

        }

        return _newArray
    },
    verifyValues: ($array, _$values) => {
        let _result = []
        let _tmpBool = false
    
        if (!Array.isArray(_$values)) {
            _$values = [_$values]
        }
    
        for (let x = 0; x < _$values.length; x++) {
            _tmpBool = false
    
            for (let y = 0; y < $array.length; y++) {
                if ($array[y] === _$values[x]) {
                    _tmpBool = true
    
                }
    
            }
    
            if (_tmpBool) {
                _result.push( true )
            }
            else {
                _result.push( false )
            }
    
        }
    
        return _INFOS.out(_result)
    },
    valuesPosition: ($array, _$values) => {
        let _result = []
        let _tmpBool = false
    
        if (!Array.isArray(_$values)) {
            _$values = [_$values]
        }

        for (let x = 0; x < _$values.length; x++) {
            _result.push( [] )
            
            for (let y = 0; y < $array.length; y++) {
                _tmpBool = false
    
                if ($array[y] === _$values[x]) {
                    _tmpBool = true
                }
    
                if (_tmpBool) {
                    _result[x].push( y )
                }
            }
    
        }

        for (let x = 0; x < _result.length; x++) {
            if (_result[x].length == 1) {
                _result[x] = _result[x][0]
            }
        }

        return _INFOS.out(_result)
    },
    addEquivalence: ($arrays, _add) => {
        let _newArrays = $arrays
    
        for (let x = 0; x < $arrays.length; x++)
        {
            if ($arrays[x].length - 1 < $arrays[arrays.check.larger($arrays)].length - 1)
            {
                for (let y = 0; y < $arrays[arrays.check.larger($arrays)].length - $arrays[x].length + 1; y++)
                {
                    _newArrays[x].push( _add )
                }
            }
        }
    
        return _newArrays
    },
    check: {
        larger: $arrays => {
            let _large = 0
        
            for (let x = 0; x < $arrays.length; x++) {
                if ($arrays[x].length > $arrays[_large].length) {
                    _large = x
                }
            }
        
            return _large
        },
        small: $arrays => {
            let _small = 0
        
            for (let x = 0; x < $arrays.length; x++) {
                if ($arrays[x].length < $arrays[_small].length) {
                    _small = x
                }
            }
        
            return _small
        }
    },
    changeValues: ($arrays, _$values, _$newValues) => {
        let _newArrays = []
        let _tmpBool = false
        let _tmp = 0
    
        if (!Array.isArray(_$values)) {
            _$values = [_$values]
            _$newValues = [_$newValues]
        }
    
        for (let x = 0; x < $arrays.length; x++) {
            _newArrays.push( [] )
            
            for (let y = 0; y < $arrays[x].length; y++) {
                _tmpBool = false
    
                for (let z = 0; z < _$values.length; z++)
                {
                    if ($arrays[x][y] === _$values[z]) {
                        _tmpBool = true
                        _tmp = z
                    }
    
                }
    
                if (_tmpBool) {
                    _newArrays[x].push( _$newValues[_tmp] )
                }
                else {
                    _newArrays[x].push( $arrays[x][y] )
                }
    
            }
    
        }
    
        return _newArrays
    },
    sumValues: ($array, _$values) => {
        let _counts = []

        if (!Array.isArray(_$values)) {
            _$values = [_$values]
        }

        for (let x = 0; x < _$values.length; x++) { _counts.push(-1) }

        for (let x = 0; x < $array.length; x++) {
            for (let y = 0; y < _$values.length; y++) {
                if ($array[x] === _$values[y]) {
                    _counts[y]++
                }
            }
        }

        return _INFOS.out(_counts)
    }

}

const strings = {
    valuesPosition: (_string, _$values) => {
        let _result = []

        if (!Array.isArray(_$values)) {
            _$values = [_$values]
        }

        for (let x = 0; x < _$values.length; x++) {
            _result.push(-1)

            for (let y = 0; y < _string.length; y++) {

                if (_string.substring(y, y + _$values[x].length) === _$values[x]) {
                    _result[x] = y
                }
            }

        }

        return _INFOS.out(_result)
    },
    verifyValues: (_string, _$values) => {
        let _result = []

        if (!Array.isArray(_$values)) {
            _$values = [_$values]
        }

        for (let x = 0; x < _$values.length; x++) {
            _result.push(false)

            for (let y = 0; y < _string.length; y++) {

                if (_string.substring(y, y + _$values[x].length) === _$values[x]) {
                    _result[x] = true
                }
            }

        }

        return _INFOS.out(_result)
    }

}

const data = {
    cryptography: (_string = '', _keys = _DEBUG.keys, _mode = true) => {
        let _newString = ''

        const morse = () => {
            _newString = ''
            const letters = [
                { letter: 'a', morse: '.-'   },
                { letter: 'b', morse: '-...' },
                { letter: 'c', morse: '-.-.' },
                { letter: 'd', morse: '-..'  },
                { letter: 'e', morse: '.'    },
                { letter: 'f', morse: '..-.' },
                { letter: 'g', morse: '--.'  },
                { letter: 'h', morse: '....' },
                { letter: 'i', morse: '..'   },
                { letter: 'j', morse: '.---' },
                { letter: 'k', morse: '-.-'  },
                { letter: 'l', morse: '.-..' },
                { letter: 'm', morse: '--'   },
                { letter: 'n', morse: '-.'   },
                { letter: 'o', morse: '---'  },
                { letter: 'p', morse: '.--.' },
                { letter: 'q', morse: '--.-' },
                { letter: 'r', morse: '.-.'  },
                { letter: 's', morse: '...'  },
                { letter: 't', morse: '-'    },
                { letter: 'u', morse: '..-'  },
                { letter: 'v', morse: '...-' },
                { letter: 'w', morse: '.--'  },
                { letter: 'x', morse: '-..-' },
                { letter: 'y', morse: '-.--' },
                { letter: 'z', morse: '--..' },
                { letter: '0', morse: '-----' },
                { letter: '1', morse: '.----' },
                { letter: '2', morse: '..---' },
                { letter: '3', morse: '...--' },
                { letter: '4', morse: '....-' },
                { letter: '5', morse: '.....' },
                { letter: '6', morse: '-....' },
                { letter: '7', morse: '--...' },
                { letter: '8', morse: '---..' },
                { letter: '9', morse: '----.' },
                { letter: '.', morse: '.-.-.-' },
                { letter: ',', morse: '--..--' },
                { letter: '?', morse: '..--..' },
                { letter: '!', morse: '-.-.--' },
                { letter: '/', morse: '-..-.'  },
                { letter: '(', morse: '-.--.'  },
                { letter: ')', morse: '-.--.-' },
                { letter: ':', morse: '---...' },
                { letter: ';', morse: '-.-.-.' },
                { letter: '=', morse: '-...-'  },
                { letter: '+', morse: '.-.-.'  },
                { letter: '-', morse: '-....-' },
                { letter: '$', morse: '...-..-'},
                { letter: '@', morse: '.--.-.' },
                { letter: 'Ø', morse: '---.'   },
                { letter: '&', morse: '.-...'  },
                { letter: ' ', morse: '.......' }
            ]

            if (_mode) {
                for (let x = 0; x < _string.split('').length; x++) {
                    let letter = _string.split('')[x]
                    for (let y = 0; y < letters.length; y++) {
                        if (letters[y].letter == _string.split('')[x].toLowerCase()) {
                            letter = letters[y].morse
                        }
                    }

                    _newString += letter + ' '
                }

            }
            else {
                for (let x = 0; x < _string.split(' ').length; x++) {
                    let letter = _string.split(' ')[x]
                    for (let y = 0; y < letters.length; y++) {
                        if (letters[y].morse == _string.split(' ')[x].toLowerCase()) {
                            letter = letters[y].letter
                        }
                    }
    
                    _newString += letter + ''
                }

            }

            return _newString.trim()
        }

        const ascii = () => {
            _newString = []

            if (_mode) {
                for (let x = 0; x < _string.length; x++) {
                    _newString.push( _string.substring(x, x + 1).charCodeAt(0) )
                }
            }
            else {
                for (let x = 0; x < _string.length; x++) {
                    _newString.push( String.fromCharCode( _string[x] ) )
                }
            }

            return _newString
        }

        const roman = () => {
            _newString = ''

            if (_mode) {
                let romans = String(+_string).split('')
                const keys = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
                        '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
                        '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']

                for (let x = 2; x >= 0; x--) {
                    _newString = ( keys[+romans.pop() + (x * 10)] || '' ) + _newString;
                }

                _newString = Array(+romans.join('') + 1).join('M') + _newString;
            }
            else {
                _newString = 0
                _string.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, x => {
                    _newString += {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}[x]; 
                })
            }

            return _newString
        }

        let _key = ''
        let _value = ''
        let _tmp = [ 1, 0 ]

        if (_mode) { _tmp = [ 0, 1 ] }

        for (let x = _tmp[0]; x < _keys.length; x += 2) { _key += _keys.substring(x, x + 1) }
        for (let x = _tmp[1]; x < _keys.length; x += 2) { _value += _keys.substring(x, x + 1) }

        for (let x = 0; x < _string.length; x++) {

            if ( arrays.verifyValues(_key, _string.substring(x, x + 1)) ) {
                _newString += _value[ arrays.valuesPosition(_key, _string.substring(x, x + 1)) ]
            }
            else {
                _newString += _string.substring(x, x + 1)
            }

        }

        return {
            result: _newString,
            morse,
            ascii,
            roman
        }
    },
    validation: (_type, _text) => {
        let _result = false

        if (_type == 'phone') {
            _result = /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}/g.test(_text)
        }

        return _result
    }

}
