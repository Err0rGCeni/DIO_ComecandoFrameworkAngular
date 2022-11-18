a# Anotações sobre Angular

## Índice

- [Execução Local](#execução-local)
- [Web Components](#web-components)
- [TypeScript](#typescript-para-angular)
- [Ecossistema](#ecossistema-angular)
- [Componentes Angular](#componentes-angular)
- [LifeCycle Hooks Angular](#lifecycle-hooks-angular)
- [Single Page/Diretivas](#single-page-application)
- [Módulos](#módulos)
- [Projetos](#projetos)

# Execução Local

- Instalação Node.js & NPM
- Utilização do VSCode
  - Angular Language Service
  - Auto Close Tag
  - Auto Rename Tag
  - Tema (Aura Theme)\*
  - Ícones (Material Icon Theme) \*
  - editorConfig, Prettier, eslist
- Angular: <code>npm install -g @angular/cli14.1.2</code>
- ng:
  - Criar novo projeto: <code>ng new [nome-do-projeto]</code>
  - Servidor como instância local: <code>ng serve</code>
  - Gerar novo elemento (e atualizar o .module.ts): <code>ng generate [tipo] [nome]</code>
    - Criando um _componente_ de nome **title**: <code>ng generate component title</code> ou <code>ng g c title</code>

# Web Components

## Fundamentos

- Document Object Model - DOM (elementos): Navegador interpreta como uma árvore de componentes (_document_).

- Shadow DOM (componentes): Análogo à uma "sub-árvore".Permite criar componentes que possuem estrutura, estilo e comportamento encapsulados, sem correr risco de afetar outro componente.

  - CAN I USE > Shadow DOM: Google, Firefox, Safari, Edge, etc. já são compatíveis.

- Virtual DOM: Representação do DOM mantida em memória. Analisa "lugares afetados" e sincroniza com o DOM.

## Components

- Componentes: Encapsulamento de elementos, com estilo e com props.

# TypeScript para Angular

TypeScript é um superset do JavaScript.

## Vantagens

- **Strict Typing**: Restrição de tipos de dados/variáveis;
- **Structural Typing**: Um elemento é considerado compatível com outro se, para cada atributo do tipo do segundo elemento, existir um atributo correspondente e idêntico no tipo do primeiro elemento.
- **Type Annotations**: Indica o tipo de dado de variáveis de entrada/saída de funções e métodos.
- **Type Inference**: Detecção do tipo de uma expressão.
- Adições:
  - Interfaces
  - Classes
  - Enumerated types
  - Generics
  - Modules

## Instalação e Configuração

- Para executar arquivos: <code>node arquivo.ts</code>, certo? Errado! O que for do superset do TypeScript, o node não reconhece.

  - Traduzir para JavaScript: <code>npx tsc arquivo.ts</code>
  - Rodar o JavaScript <code>node src/index.js</code>

- Para criar um [tsconfig](https://www.typescriptlang.org/tsconfig/), usar: <code>npx tsc --init</code>.

  - rootDir: Utilizar "_./src_" para diminuir escrita.
    - Então o código converte todos os TS: <code> npx tsc </code>
  - outDir: Utilizar "_./build_" para separar o JS.
  - removeComments: Utilizar _true_ gera o JS sem os comentários do TS.

- No _package.json_, em _scripts_, adicionar <code>"start": "npx tsc && node build/index.js"</code> para facilitar a execução.
- Ou utilizar TS Node Dev: <code> npm install ts-node-dev </code>
  - No package.json usar: <code>"start:dev": "ts-node-dev --respawn --transpile-only src/index.ts"</code>

## Tipos

<code>let variable: type = value</code> ou por inferência <code>let variable = value</code>

- Primitivos:

  - boolean: _true_/_false_.
  - number: Inteiros ou floats.
  - string: "textos".

- Especiais:

  - null: Só recebe _null_.
  - undefined: Só recebe _undefined_.
  - any: Qualquer valor.
  - void: Vazio, útil para funções que não precisam retornar algo.

- Objetos:

  - <code>let produto:object</code>: Permite receber qualquer objeto, mas não é uma boa prática. Por exemplo, em JS, arrays são objetos.
  - Maneira correta: Criar um type e utilizá-lo.

          type Produto = {
          nome: string;
          preco: number;
          unidades: number;
          }

          let meuProduto: Produto = {
              nome: 'Sapato',
              preco: 9.99,
              unidades: 33
          }

- Arrays:

  - Para arrays com elementos do mesmo tipo, utilizar \*type**[]\*** our **\*Array**<type>\*.
  - Para vários tipos, utilizar **(type1 | type2)[]**

- Tuplas: Parecido com um array multi-type, mas é exigido que se siga a ordem da declaração.

        let tupla:[string, number, number] = ['oi', 123, 456]

- Datas: Utiliza-se da interface Date.

        let birth: Date = new Date("2077-07-07")

## Funções

Seus parâmetros e retorno podem ser 'tipados':

    function addNumber(x: number, y: number): number{
    return x + y;
    }

    let soma: number = addNumber(5,7)

Podem ser multi tipos:

    function CallToPhone(phone: number|string): number|string {
    return phone
    }

Funções assíncronas recebem _async_ e implicitamente retornam uma _Promise_, sendo recomendável explicitar o seu tipo:

    async function getDatabase(id:number): Promise<string> {
    return "Nome"
    }

## Interfaces

Parecido com _type (aliases)_, utilizado para classe.

- Permite mescla de interfaces com mesmo nome;
- Interfaces podem extender (_extends_) classes;
- Um terceiro "tipo" pode ser criado ao unir ou interseccionar outros, mas não é possível o mesmo com interfaces;

## Classes

- _Data Modifiers_: Modificam acesso a atributos e métodos.
  - _public_: Default, pode ser acessado fora da classe.
  - _private_: Só pode ser acessado dentro da classe.
  - _protected_: Só pode ser acessado dentro da classe e em subclasses.

## Generics

Tipagem genérica, dinâmica.

- Sem:

        function identity(arg: number): number {
            return arg;
        }

  ou

        function identity(arg: any): any {
            return arg;
        }

- Com:

        function identity<Type>(arg: Type): Type {
            return arg;
        }

  e

        let output = identity<string>("myString");

## Decorators

"Decora uma função para disparar outra função ou injetar outra coisa, ação, ..."

- Em TypeScript, ainda são experimentais, o que pode gerar erro na geração do JS.

# Ecossistema Angular

- Mantido pelo Google;
- Framework baseado em JavaScript;
- Typescript como linguagem principal;
- SPAs (Single Page Application) como foco;
- Componentes são a base da arquitetura ("tudo é componente");
- Estrutura organizada e bem definida;
- Sistema de Tooling muito rico;

## Definição e Mercado do Angular

- _AngularJS_ foi reescrito em Typescript (2016) para _Angular_;

* Frameworks:

  - **Angular**: Para escalar o projeto. Estrutura bem definida.
  - **React**: Curva de aprendizado mais baixa. É uma biblioteca.
  - **Aurelia**: Aproveitar estruturas da comunidade.
  - **Vue**: Evitar configurar muitos setups.

## Camadas de Web App

- **Componentes**: Elemento visual, customizável, reutilizável.
- **Gerenciamento de Estados**: Garantir as informações dos componentes e sua comunicação com outros.
- **Roteamento**: Realizar troca de URL sem recarregar a página, mudando os componentes (History API, React-Router, Vue-Router, Angular RoutingModule...).
- **Renderização**: Decidir melhor maneira de acessar e entregar para o browser o compononente propnto par ser desenhado (renderizado).

## [Angular.io](https://angular.io/) - Entendendo Código

- /src: onde fica localizado o código fonte.
  - index.html: Onde se organiza os componentes;
  - pollyfills.ts: Códigos para compatibilidade com navegadores antigos (ou se for o caso);
    +/app: Componentes (html, css, ts) do componente principal.
- Fora da /src, são arquivos de configuração;

# Componentes Angular

- Geralmente é uma função JS/TS que retorna HTML, CSS e carrega eventos JavaScript juntos.
- **Injeção de Dependências**: Padrão de desenvolvimento. Quando algo depende de outra coisa para seu funcionamento, mas ele não produz diretamente esse conteúdo.
  - Angular: Componentes criados de forma isolada serão injetados (pelo app-root) no _index.html_;
- [StackBlitz](https://stackblitz.com/fork/angular-ivy): Geração de uma aplicação mínima, online.
  - _index.html_: Aponta para o componente raiz (my-app);
  - _main.ts_: Inicializar os módulos do Angular;
  - _polyfills.ts_: Permite aumentar a compatibilidade com outros navegadores;
  - _styles.css_: Estilização;
  - _app.component.ts_: Template HTML (.html ou código html direto) + styleUrls (.css ou código css direto).
    - Decorador _@Component_
    - export class AppComponent {
      name = '...'
      }

## Criando Componente

1.  Template de um _component.ts_:

        import { Component } from '@angular/core';

        @Component({

        })

        export class MyComponent{

        }

2.  A "parte inteligente" do component.ts fica no _export class_:

        export class MyComponent{
            aText:string = 'Texto';
        }

3.  Cabe ao _...html_ receber esse atributo:

        ...
        <p>{{aText}}</p>

4.  Para passar propriedades para elementos filhos, declarar o atributo na classe do pai, invocar na tag do filho, e chamar via @Input no atributo da classe filho:

        //Pai
        ...
        export class AppComponent  {
            ...
            buttonProp:string = "Props";
        }

        //Tags do Pai
        ...
        <my-button [label]="buttonProp"></my-button>

        //Filho
        import { Component, Input } from '@angular/core';
        ...
        export class Button {
            @Input() label:string = '';
            ...
        }

        //Tags do Filho
        <div>
            <button>{{ label }}</button>
        </div>

5.  São maneiras válidas de compartilhar propriedades:

- prop="{{att}}";

       <my-button label="{{buttonLabel}}"></my-button>

- [prop]="att";
  <my-button [label]="buttonSecond"></my-button>
- Sem o uso de colchetes, a propriedade pode ser passada diretamente:

          <my-button label="Teste123"></my-button>

- Ou usando aspas simples:

        <my-button [label]="'Literal!'"></my-button>

6. Importar no _app.module.ts_ (agregador de componentes) e inserir no declarations (**_main.ts_** importa o _app.module.ts_ como se fosse uma "gaveta de módulos");

## [Binding Syntax](https://angular.io/guide/binding-syntax)

- **Interpolação**: {{valor}}
- **_Property Binding_**: [prop] = "valor"
- **_Event Binding_**: ([evento](https://developer.mozilla.org/en-US/docs/Web/API/Element)) = "Handler(_params_)"
- **_Two Way Data Binding_**: [(ngModel)] = "propriedade"
  - Importado em _app.module.ts_

# LifeCycle Hooks Angular

"**Eventos** acontecem e mudam sua vida"

## OnInit

Evento para quando o componente é iniciado.

- _implements OnInit_: (Interface para 'obrigar' a criação do método ngOnInit())

## 8 Hooks

- _ngOnInit()_: Inicialização do component;
- _ngOnChange()_: Alteração no component (valor de uma propriedade);
  - Através do @Input()
- _ngDoCheck()_: Ao verificar propriedades do componente;
  - _ngAfterContentInit()_: Quando Angular realiza projeção de conteúdo no componente;
  - _ngAfterContentChecked()_: Depois que é verificado pelo mecanismo de detecção de alteração do Angular;
  - _ngAfterViewInit()_: Após um componente ser totalmente iniciado (carregou tudo);
  - _ngAfterViewChecked()_: Depois que é verificado pelo Angular;
  - Ordem: Checked -> Content -> View
- _ngOnDestroy()_:

# Single Page Application

## Diretivas

Como o Angular manipula e altera a DOM dinâmicamente

## Diretivas de Atributo

Alteram a aparência ou comportamento de um elemento, component ou outra diretiva

- _NgClass_: Adiciona/Remove conjunto de classes CSS;
- _NgStyle_ : Adiciona/Remove conjunto de estilos ao HTML;
- _NgModel_: Adiciona vinculação de dados bidirecional a um elemento de um formulário;

## Diretivas Estruturais

Modelam ou remodelam a estrutura da DOM, adicionando ou removendo elementos na tela

- _NgIf_: Condicional que verificia se o modelo deve ser visualizado ou não (destrói);
- _NgFor_: Repete um elemento para cada item em uma lista;
- _NgSwitch_: Utilizado para alternar comportamentos;

### NgIf - Data Biding

1. No _.component.ts_, no _export class_, inserir uma propriedade **prop**;
2. No _.component.ts_, inserir essa propriedade na tag: <code><app-tag \*ngIf="prop"><\/app-tag> </code>;

### NgIf - ngTemplate

1.  Em uma tag com **NgIf**, adicionar o _else_ com o # do bloco condicional;
2.  Atribuir o # à tag ng-template;

        <app-card *ngIf="isAliveCard; else anotherBlock"></app-card>

        <ng-template #anotherBlock>
          <p>Bloco Secreto</p>
        </ng-template>

        <router-outlet></router-outlet>

### NgFor
    li *ngFor="let p of produtos; let i = index" >
    {{i}}: {{p}}
    </li>

- Conceito de Reatividade: Reage a aquilo que está conectado (alteração na variável **produtos** (array) altera a lista)

### NgSwitch/Case

    <div [ngSwitch]="menuType">
      <div *ngSwitchDefault>
        <ul>
          <li> editar perfil</li>
          <li> adicionar cartão</li>
        </ul>
      </div>

      <div *ngSwitchCase="'user'">
        <ul>
          <li> editar perfil</li>
          <li> adicionar cartão</li>
        </ul>
      </div>
      
      ...

    </div>

Análogo a um switch() {case :}

### NgClass
Atribuir uma classe utilizando class="", ou dinamicamente com [ngClass].

- [ngClass] no .html -> props no .ts -> classe no .css;
- Utilizar métodos para alterar o atributo, permitindo o comportamento dinâmico.

### NgStyle
Utilizar para alterar o estilo de propriedades específicas.

### NgModel
- Comunicação bilateral html e css;
- Utilização por [()];
- Precisa ser importado no _app.module.ts_;
  - <code>import { FormsModule } from '@angular/forms';</code>
  + Adicionar no campo _Imports_;

### NgTemplate
É um modelo que não necessariamente será utilizado. Por padrão, não está inicializado.
Para ser habilitado, precisa estar vinculado dinamicamente (condição true).

### NgContent
Permite que um componente pai passe um conteúdo para um componente filho, e reorganizar dinamicamente.
Utiliza-se o _select=_.

# Módulos
A fim de evitar imports excessivos, e ganhar produtividade, cria-se módulos além do _app.module_!

## Anatomia de um Módulo
- Pode importar outros módulos, bem como exportar;
- Declara _Components_, _Directives_ e _Pipes_;
- Provê _Services_;

- Interface: _@NgModule_({})
  - Declarations: Componentes, diretivas e _pipes_.
  - Imports: Importação de módulos pessoais e do angular.
  - Exports: Exportação do que será fornecido a outros módulos.
  - Providers: Injeções de dependências (serviços, etc.)
  - Bootstrap: Inicialização, quais componentes iniciais.

- Criando um módulo:
  - ng g m lista
  - Componentes dentro de lista
    - ng g c lista/input

- Usando o módulo:
  - Não esquecer de exportar (exports []) os componentes desejados (_.module.ts_);
  - Importar o módulo no _app.mopdule.ts_ (ou outro componente que o importe);

- Organização de projeto:
  - Criar pasta/módulo _shared_para componentes a serem reaproveitados.
  - Criar pasta/módulo de _pages_, com módulos para cada página.

# Rotas:
O _app-routing.module_, não deixa de ser um arquivo de módulos, para importar rotas.
- RouterModule: Class.
  - Importa e Exporta essa classe/módulo.
- Routes: Type.
  - <code>const routes: Routes = []</code>
  - Deve conter objetos, por exemplo: {path, component, pathMatch}.
  - Rotas coringa: path: '**', podendo utilizar redirectTo.

Para criar links entre rotas, utilizar <code> <a [routerLink]="['/rota']>\</a>"</code>.
- Para estilizar uma rota ativa, utilizar <code>[routerLinkActive]="['classe']"</code>, com uma respectiva classe no arquivo _css_.
  - Cuidado com uma rota com _pathMatch_ = 'full'.
  - Utilizar <code>[routerLinkActiveOptions]="{exact: true}"</code> para o estilo ser aplicado com a rota EXATA.

Para obter parâmetros de navegação, utilizar _ActivatedRoute_ no construtor do componente (*.component.ts).
- Exemplo: 'rota/1?name=test':
  - 1 é um parâmetro, equivale a um :id. Para obtê-lo, utiliza-se um *_.params.subscribe_;
  - ?name=test é um query. Para obtê-lo, utiliza-se um *_.queryParams.subscribe_;

Para redirecionamento por componente, também utilizar _Router_ no construtor do componente.
- Exemplo: forçar o redirecionamento para a rota inicial:
  - *_.navigate(['/'])_

## Rotas Children

    {
    path: 'portfolio',
    component: CardComponent, children: [
      {path: ':id', component: CardComponent}
    ]
    },

Tem-se uma rota 'portfolio' e uma rota filha por id.
- Atenção com o routerLinkActiveOptions com exact: true, pois a rota filha não será considerada.
- É preciso concertar a obtenção de parâmetros:
  - Usar como _*.firstChild?.*_;

# Projetos:
  - Angular Blog: https://github.com/Err0rGCeni/DIOProject_angular-blog