# IaN.Functions

JavaScript não tem tantas funções que sejam simples para iniciantes ou até
para pessoas mais experientes. Então pensando nisso eu criei uma stack de
funções que vão de funções de string até funções para tratar arrays. 😃  

E tem total compatibilidade com node.js.

## 📘 Como utiliza-la
Para utilizar os funções é simples, se você estiver utilizando html é apenas
colocar o código abaixo no html

    <script type='text/javascript' src='./IaN.Functions.js'></script>

Se estiver utilizando pug sera este código

    script(type='text/javascript' src='./IaN.Functions.js')

## 📃 Documentação
## ❕ Variáveis
Para o debugging a stack oferece um objecto com muitas propriedades
como uma array com cada letra do alfabeto latino, nomes,
chaves de criptografia cifra de cesar, um objeto com propriedades muito
usadas para classificação de um livro, uma função que retorna apenas um
hello world, um código básico html hello world.
E para acessar essas propriedades segue o código abaixo.

    Alfabeto: _DEBUG.alphabet
    Nomes: _DEBUG.names
    Objeto: _DEBUG.object
    Função: _DEBUG.function
    Código html: _DEBUG.html

E para rever um valor que foi recentemente pego, provavelmente ele
estará na variável $0, exemplo:

    >  arrays.removeValues(['0', '1', null], null)
    <· undefined
    >  $0
    <· ['0', '1']

Mas caso o resultado que você esteja procurando não esteja nesta variável
basta procurar no histórico que fica em _INFOS.historic.

## ❕ Funções
As funções estão distribuídas em objetos com o nome indicando para que servem.
Sabendo disso os objetos que a stack tem são "arrays", "strings", "data" e
"visual", cada objeto remete a um uso.  

### 🚨 Atenção
Todas as funções mostradas que contem o campo "values" pode ser passado
uma função com valores ou apenas um único valor.
Toas as funções mostradas que contem o campo "arrays" deve ser passado
uma array com todas as array que deseja caso contrario a função não funcionara
como esperado.

### _INFOS.add(add = ['arrays', 'strings', 'data', 'visual'])
Esta função serve para adicionar todas as funções da stack ao
código nativo JavaScript.

    >  _INFOS.add()
    <· undefined

Com isto ja podemos utiliza-las por meio dos comandos:

    Data.cryptography
    String.verifyValues
    Visual.createElements
    Array.addEquivalence

Para adicionar apenas as funções que preferir você pode utilizar os
parâmetros desta função:

    _INFOS.add('strings')

Este código vai adicionar ao JavaScript apenas as funções de string.
Para adicionar outras funções utilize o código abaixo.

    _INFOS.add(['strings', 'arrays'])

com este comando apenas as funções de tratamento de string ficaram
disponíveis.

## ❗ arrays
### arrays.removeValues(array, valores);
Esta função serve para a remoção de diferentes valores de uma array.

    >  arrays.removeValues(
           [ '-', null, undefined, '*', '/', '+' ],
           [ null, undefined ]
       )
    <· ['-', '*', '/', '+']

### arrays.removePositions(array, position);
Esta funções serve para remove vetores de uma array.

    >  arrays.removePositions(
           ['0', '1', '2', '3', '4', '5', '6'],
           [0, 2, 5]
       )
    <· ['1', '3', '4', '6']

### arrays.removeValuesEquivalence(arrays, values);
Esta função serve para remover os vetores de uma array com base
nos vetores das outas arrays.

    >  arrays.removeValuesEquivalence(
           [
               ['id-0', 'id-1', 'id-2', null],
               ['product-0', 'product-1', 'product-2', undefined],
               [['ingrediente-0'], ['ingrediente-0'], ['ingrediente-0'], undefined]
           ],
           [ null, undefined ]
       )
    <· v (3) [Array(3), Array(3), Array(3)]
         > 0: ['id-0', 'id-1', 'id-2']
         > 1: ['product-0', 'product-1', 'product-2']
         v 2: [Array(1), Array(1), Array(1)]
           > ['ingrediente-0']
           > ['ingrediente-0']
           > ['ingrediente-0']

### arrays.verifyValues(array, values);
Esta função retorna um boolean indicando se o/os valor/es passados
existem na array.

    >  arrays.verifyValues(
           [null, undefined, ''],
           ['', 'x']
       )
    <· (2) [true, false]

### arrays.valuesPosition(array, values);
Esta função retorna o/os vetor/es correspondente a o/os valores passados.

    >  arrays.arrayPosition(
           [null, undefined, '', ''],
           [null, ''],
       )
    <· v (2) [0, Array(2)]
         > 0: 0
         > 1: (2) [2, 3]

### arrays.addEquivalence(arrays, add);
Esta função serve adicionar um numero igual de vetores as arrays passadas
adicionando o valor passado, baseado na maior array.

    >  arrays.addArrayEquivalence(
           [
               ['0'],
               ['0', '1'],
               [undefined, '1', '2']
           ],
           'quark'
       )
    <· v (3) [Array(3), Array(3), Array(3)]
         > 0: (3) ['0', 'quark', 'quark']
         > 1: (3) ['0', '1', 'quark']
         > 2: (3) [undefined, '1', '2']

### arrays.check.larger(arrays);
Esta função retorna o vetor em que se encontra a maior array.

    >  arrays.check.lager(
           [
               ['0'],
               ['0', '1', '2'],
               ['0', '1']
           ]
       )
    <· 1

### arrays.check.small(arrays);
Esta função retorna o vetor em que se encontra a menor array.

    >  arrays.check.small(
           [
               ['0'],
               ['0', '1', '2'],
               ['0', '1']
           ]
       )
    <· 0

### arrays.changeValues(arrays, values, newValues);
Esta função troca os itens das arrays passadas para novos valores.

    >  arrays.changeValues(
           [
               ['0', '2', '1'],
               ['1', '0', '2'],
               ['2', '1', '0']
           ],
           ['1', '2', '0'],
           ['item-1', 'item-2', 'item-0']
        )
    <· v (3) [Array(3), Array(3), Array(3)]
         > 0: (3) ['item-0', 'item-2', 'item-1']
         > 1: (3) ['item-1', 'item-0', 'item-2']
         > 2: (3) ['item-2', 'item-1', 'item-0']

### arrays.sumValues(array, values);
Esta função soma todos os valores iguais ao passado.

    >  arrays.sumValues(
           [null, undefined, '', '', null, ''],
           ['', null, undefined]
       )
    <· (3) [2, 1, 0]

## ❗ strings
### strings.valuesPosition(string, values);
Esta função retorna a posição inicial de uma frase dentro de uma string.

    >  strings.valuesPosition(
           'Hello, my name is Eliton',
           [', my', 'llo']
       )
    <· (2) [5, 2]

### strings.verifyValues(string, values);
Esta função serve para verificar valores em string. Ela retorna um
valor boolean.

    >  strings.verifyValues(
           'Eliton',
           ['Eli', 'onx']
       )
    <· (2) [true, false]

## ❗ data
### data.cryptography(string, keys, mode);
Esta função serve para criptografar uma string seu modelo padrão foi feito para
cifra de cesar, mas também aceita ascii e morse. O modo serve para dizer se é para
criptografar ou descriptografar, sendo seus valores true e false.

<br/>
Cifra de cesar

    >  data.cryptography(
           'Eliton',
           'Erlçiotyopnm',
           true
       ).result
    <· 'rçoypm'

    >  data.cryptography(
           'rçoypm',
           'Erlçiotyopnm',
           false
       ).result
    <· 'Eliton'

Morse

    >  data.cryptography(
           'eliton',
          '',
           true
       ).morse()
    <· '. .-.. .. - --- -.'

    >  data.cryptography(
           '. .-.. .. - --- -.',
           '',
           false
       ).morse()
    <· 'Eliton'

Ascii

    >  data.cryptography(
           'Eliton',
           '',
           true
       ).ascii()
    <· (6) [69, 108, 105, 116, 111, 110]

    >  data.cryptography(
           [69, 108, 105, 116, 111, 110],
           '',
           false
       ).ascii()
    <· (6) ['E', 'l', 'i', 't', 'o', 'n']

### validation(type, text);
Esta função serve para validar valores de tipo telefônico por enquanto.

    >  data.validation(
           'phone',
           '+99 99 999999999'
       )
    <· true

    >  data.validation(
           'phone',
           '9999999'
       )
    <· false

### createDB()
Esta função serve para criar um mini banco de dados apenas com tabelas simples
feitas de objetos e strings. Para usar é simples! Exemplo:

<br/>
Criar banco de dados

    >  const db = data.createDB()
    <· undefined

Criar tabela

    >  db.createTable('users')
    <· undefined

Ver todas as tabelas

    >  db.tables
    <· {users: {...}}

Criar registro em uma tabela

    >  db.tables.users.addRow({ name: 'Eliton', age: 15 })
    <· undefined

Pegar registro na tabela

    >  db.tables.users.getRow(0)
    <· v { name: 'eliton', age: 15 }

Editar registro na tabela

    >  db.tables.users.updateRow(0, { name: 'eliton' })
    <· undefined

Pegar todos os registros da tabela

    >  db.tables.users.rows()
    <· [{...}]

Remover tabela do banco

    >  db.removeTable('users')
    <· undefined

## ❗ visual
### visual.createElements()
Esta função serve para criar elementos na pagina com mais facilidade
ela permite falar aonde os elementos serão criados e também adicionar
atributos a esses elementos.

<br/>
Primeiro precisamos instanciar

    >  const ce = visual.createElements()
    <· undefined

Agora podemos falar aonde queremos que seja colocado os elementos

    >  ce.on( document.querySelector('body') )
    <· undefined

E já podemos criar um elemento com uma função também

    >  ce.create('button', {
           innerText: 'click here',
           listen: {
               event: 'click',
               fun: () => {
                   alert('ok')
               }
           }
       })
    <· {on: ƒ}

Assim o elemento já sera adicionado no local, mas você pode notar
que quando criamos um elemento é retornado uma função chamado "on"
ela serve para quando criamos um container e queremos que os próximos
elementos sejam guardados nela, podemos usar-la assim:

    >  ce.create('div', { id: 'container' }).on()

E assim poderemos continuar criando elementos que eles serão guardados
dentro desta div

### visual.framePanels(_panels)
Essa função serve para criar uma hierarquia de telas ou divs ela serve
para ir e voltar telas. Primeiro precisamos instancia-la passando as telas

    >  const frames = visual.framePanels(
           [
               document.getElementById('login'),
               document.getElementById('panel')
           ]
       )
    <· {next: ƒ, back: ƒ, setInfos: ƒ}

Ele ira ocultar todas as telas menos a primeira com a classe 'd-none', mas
caso queira trocar é só fazer isso:

    >  frames.setInfos({ hideClass: '< classe para ocultar >' })
    <· undefined

Para ir para a proxima tela basta fazer isto:

    >  frames.next()
    <· undefined

Para voltar:

    >  frames.back()
    <· undefined

E podemos também adicionar mais de uma escolha de tela, exemplo:

    >  const frames = visual.framePanels(
           [
               document.getElementById('selectOption'),
               [
                   document.getElementById('enterTitle'),
                   document.getElementById('remove')
               ],
               document.getElementById('enterContents')
           ]
       )
    <· {next: ƒ, back: ƒ, setInfos: ƒ}

Então para podermos ir para a proxima tela passaremos um parâmetro, com
o id da tela dentro da array, exemplo:

    >  frames.next(0)
    <· undefined

Vai para a tela de "enterTitle".  
Podemos também mudar a tela onde estamos usando o setInfos:

    >  frames.setInfos({ now: 0 })
    <· undefined

Assim fomos para a tela inicial, mas para não dar conflito precisaremos
limpar o histórico de navegação da função:

    >  _INFOS.historic.framePanels = []
    <· undefined

## ❗ get(_query)
Esta função funciona como um "document.querySelectorAll" mas ela transform
a array de html em array normal e se mais de um elemento é selecionado ela não
retorna-ra uma array com apenas um elemento mas sim apenas o elemento, exemplo:

    >  get('body')
    <· <body></body>

<br/>
<hr>
Espero que consiga aproveitar bem todas as funções da stack.

Qualquer duvida sobre qualquer coisa é só me contactar por uma issue!

Boa sorte 😃
