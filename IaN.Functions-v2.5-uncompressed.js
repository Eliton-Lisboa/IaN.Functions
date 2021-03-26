/*
    @preserve JS.Functions v2.5
    @license Copyright 2021 Eliton Lisboa
    @license MIT Licensed (https://github.com/Eliton-Lisboa/JS.Functions/blob/main/LICENSE)
*/
'use strict'

const Data = {}
const Visual = {}
var $0 = ''

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
    out: _$value => {
        let _result = ''

        if (Array.isArray(_$value) && _$value.length == 1) {
            _result = _$value[0]
        }
        else {
            _result = _$value
        }

        $0 = _result
        _INFOS.historic.functions.push(_result)
        return _result
    },
    add: _$add => {
        const add = {
            arrays: { func: arrays, implements: 'Array' },
            strings: { func: strings, implements: 'String' },
            data: { func: data, implements: 'Data' },
            visual: { func: visual, implements: 'Visual' }
        }

        if (!_$add) { _$add = Object.keys(add) }
        else if (!Array.isArray(_$add)) { _$add = [_$add] }

        for (let x = 0; x < _$add.length; x++) {
            for (let y = 0; y < Object.keys(add[_$add[x]].func).length; y++) {
                eval(`${add[_$add[x]].implements}.${Object.keys(add[_$add[x]].func)[y]} = ${_$add[x]}.${Object.keys(add[_$add[x]].func)[y]}`)
            }

        }

        try { get('body').innerHTML +=`<style>.d-none { display: none; }</style>` }
        catch (_err) {}
    },
    historic: {
        get: [],
        framePanels: [],
        functions: []
    }
}

const arrays = {
    removeValues: ($array, _$values) => {
        let _newArray = []

        for (let x = 0; x < $array.length; x++) {
            if (!arrays.verifyValues(_$values, $array[x])) {
                _newArray.push( $array[x] )
            }
        }

        $0 = _newArray
        return _newArray
    },
    removePositions: ($array, _$positions) => {
        let _newArray = []

        if (!Array.isArray(_$positions)) { _$positions = [_$positions] }

        for (let x = 0; x < $array.length; x++) {
            if (!arrays.verifyValues(_$positions, x)) {
                _newArray.push( $array[x] )
            }
        }

        $0 = _newArray
        return _newArray
    },
    removeValuesEquivalence: ($arrays, _$values) => {
        let _newArrays = []
        let _tmpBool = false
    
        $arrays = arrays.addEquivalence($arrays)

        if (!Array.isArray(_$values)) { _$values = [_$values] }
        for (let x = 0; x < $arrays.length; x++) { _newArrays.push([]) }

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
                    _newArrays[y].push( $arrays[y][x] )
                }
            }

        }

        $0 = _newArrays
        return _newArrays
    },
    verifyValues: ($array, _$values) => {
        let _result = []
        let _tmpBool = false
    
        if (!Array.isArray(_$values)) { _$values = [_$values] }
    
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
    
        if (!Array.isArray(_$values)) { _$values = [_$values] }

        for (let x = 0; x < _$values.length; x++) {
            _result.push([])

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

        return _INFOS.out(_result)
    },
    addEquivalence: ($arrays, _add) => {
        let _newArrays = $arrays
        const largerArray = arrays.check.larger($arrays)

        for (let x = 0; x < $arrays.length; x++) {
            if (x !== largerArray) {
                const addOn = $arrays[largerArray].length - $arrays[x].length

                for (let y = 0; y < addOn; y++) {
                    _newArrays[x].push(_add)
                }
            }
        }

        $0 = _newArrays
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

            $0 = _large
            return _large
        },
        small: $arrays => {
            let _small = 0

            for (let x = 0; x < $arrays.length; x++) {
                if ($arrays[x].length < $arrays[_small].length) {
                    _small = x
                }
            }

            $0 = _small
            return _small
        }
    },
    changeValues: ($array, _$values, _$newValues) => {
        let _newArray = []

        if (!Array.isArray(_$values)) { _$values = [_$values] }
        if (!Array.isArray(_$newValues)) { _$newValues = [_$newValues] }

        for (let x = 0; x < $array.length; x++)
        {
            if (arrays.verifyValues(_$values, $array[x])) {
                _newArray.push(_$newValues[arrays.valuesPosition(_$values, $array[x])])
            }
            else {
                _newArray.push($array[x])
            }

        }
    
        $0 = _newArray
        return _newArray
    },
    sumValues: ($array, _$values) => {
        let _counts = []

        if (!Array.isArray(_$values)) { _$values = [_$values] }
        _counts = arrays.addEquivalence([ _$values, _counts ], -1)[1]

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

        if (!Array.isArray(_$values)) { _$values = [_$values] }
        _result = arrays.addEquivalence([ _$values, _result ], [])[1]

        for (let x = 0; x < _$values.length; x++) {

            for (let y = 0; y < _string.length; y++) {

                if (_string.substring(y, y + _$values[x].length) === _$values[x]) {
                    _result[x] = y
                }
            }

        }

        for (let x = 0; x < _result.length; x++) {
            if (Array.isArray(_result[x])) {
                _result[x] = -1
            }
        }

        return _INFOS.out(_result)
    },
    verifyValues: (_string, _$values) => {
        let _result = strings.valuesPosition(_string, _$values)

        for (let x = 0; x < _result.length; x++) {
            if (_result[x] == -1) {
                _result[x] = false
            }
            else {
                _result[x] = true
            }
        }


        return _INFOS.out(_result)
    }

}

const data = {
    cryptography: (_string, _keys = _DEBUG.keys, _mode = true) => {
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

            return _INFOS.out(_newString.trim())
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

            return _INFOS.out(_newString)
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

            return _INFOS.out(_newString)
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
            result: _INFOS.out(_newString),
            morse,
            ascii,
            roman
        }
    },
    validation: (_type, _text) => {
        let _result = false

        if (_type == 'phone') {
            _result = /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}/g.test(_text)

            if (_text.length < 8) { _result = false }
        }

        return _INFOS.out(_result)
    },
    createDB: () => {
        const database = {}
        const tables = {}

        function createTable(_table) {
            database[_table] = []
            tables[_table] = {
                addRow: _row => {
                    database[_table].push(_row)
                },
                getRow: _id => {
                    return database[_table][_id]
                },
                updateRow: (_id, _newRow) => {
                    Object.assign(database[_table][_id], _newRow)
                },
                rows: () => {
                    return database[_table]
                }
            }

            _INFOS.out(_table)
        }

        function dropTable(table) {
            delete database[table]
            delete tables[table]
        }

        return {
            createTable,
            dropTable,
            tables
        }
    }

}

const visual = {
    createElements: () => {
        let add_on = ''

        const on = on => {
            add_on = on || $0
        }

        const create = (ele, infos) => {
            const element = document.createElement(ele)

            Object.keys(infos).forEach(info => {
                element[info] = infos[info]
            })

            try {
                element.addEventListener(infos.listen.event, infos.listen.fun)
            }
            catch (_err) {}

            add_on.appendChild(element)
            $0 = infos.id || infos.className || infos.name || element

            const addOn = () => {
                on(element)
            }

            return {
                on: addOn
            }
        }

        return {
            on,
            create
        }
    },
    framePanels: _panels => {
        const panels = _panels
        const infos = {
            now: 0,
            hideClass: 'd-none'
        }

        const next = _branch => {
            if (infos.now == panels.length - 1) { throw('The index selected is greater than the number of panels') }
            const historic = _INFOS.historic.framePanels

            if (Array.isArray(panels[infos.now])) {
                panels[infos.now][historic[historic.length - 1]].classList.add(infos.hideClass)
            }
            else {
                panels[infos.now].classList.add(infos.hideClass)
            }

            if (Array.isArray(panels[infos.now + 1])) {
                panels[infos.now + 1][_branch].classList.remove(infos.hideClass)
                _INFOS.historic.framePanels.push(_branch)
            }
            else {
                panels[infos.now + 1].classList.remove(infos.hideClass)
                _INFOS.historic.framePanels.push(infos.now + 1)
            }

            infos.now++
        }

        const back = () => {
            if (infos.now == 0) { throw('The selected index is less than the number of panels') }
            const historic = _INFOS.historic.framePanels

            if (Array.isArray(panels[infos.now])) {
                panels[infos.now][historic[historic.length - 1]].classList.add(infos.hideClass)
            }
            else {
                panels[infos.now].classList.add(infos.hideClass)
            }

            if (Array.isArray(panels[infos.now - 1])) {
                panels[infos.now - 1][historic[historic.length - 2]].classList.remove(infos.hideClass)
            }
            else {
                panels[infos.now - 1].classList.remove(infos.hideClass)
            }

            _INFOS.historic.framePanels.pop()
            infos.now--
        }

        const setInfos = _infos => {
            Object.assign(infos, _infos)

            const hidePanels = _panels => {
                _panels.forEach(_panel => {
                    if (Array.isArray(_panel)) {
                        hidePanels(_panel)
                    }
                    else {
                        _panel.classList.add(infos.hideClass)
                    }

                })
            }
            hidePanels(panels)
            panels[infos.now].classList.remove(infos.hideClass)
        }
        setInfos(infos)

        return {
            next,
            back,
            setInfos
        }
    }

}

const get = _query => {
    try {
        const elements = document.querySelectorAll(_query)
        const array = []

        for (let x = 0; x < elements.length; x++) {
            array.push(elements[x])
        }

        _INFOS.historic.get.push( _INFOS.out(array) )
        return _INFOS.out(array)
    }
    catch (_err) {}
}

try {
    module.exports = {
        Data,
        Visual,
        _DEBUG,
        _INFOS,
        arrays,
        strings,
        data
    }

} catch (_err) {}
