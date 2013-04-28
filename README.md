Github Portfolio Generator
==========================

Gera portfólio com os projetos públicos hospedados no Github.

[Demo](http://github.arthurassuncao.com)

###Como usar
* Crie um arquivo html;
* Adicione o css do Twitter Bootstrap e o css do Twitter Bootstrap Responsive ao arquivo html;
* Adicione o js do JQuery ao arquivo html;
* Crie uma `div` com o id `github-gpg-repos`;
* Adicione o css e js do Github Portfolio Generator ao arquivo html;
* Crie uma tag script com o seguinte código:
<pre>
$(document).ready(function() {
        new GithubPortfolioGenerator(options);
});
</pre>
* Enjoy it!

###Opções
`user`, um nome de usuário no Github, opção obrigatória.<br>
`dom_node`, nó do DOM ou id do elemento onde serão inseridos os projetos, `default` é `body`.<br>
`slide_direction`, direção do slide caption, pode ser `top`, `bottom`, `left`, `right` ou qualquer outro valor para não usar o slide caption e mostrar os textos ao carregar o projeto, `default` é `null`.<br>
`show_forks`, `true` para exibir os forks e `false` para não exibir, `default` é `true`.<br>
`exclude_list`, lista de projetos que não serão exibidos, `default` é um Array vazio.<br>
`space_char`, caracter usado como espaço em seus projetos, como o underline para serparar as palavras, esse caracter será substituido por espaço.

###Código de exemplo
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Arthur Assunção" />
        <title>Github Portfolio Generator Example</title>
        <link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-responsive.min.css" />
        <link rel="stylesheet" type="text/css" href="github_portfolio_generator.css" />
    </head>
    <body>
        <div id="github-gpg-repos"></div>
        
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script type="text/javascript" src="github_portfolio_generator.js"></script>
        <script type="text/javascript">
        $(document).ready(function() {
            new GithubPortfolioGenerator({
                user : 'ArthurAssuncao',              // any github username
                dom_node : '#github-gpg-repos',       // (optional) dom_node to attach to or element id, body by default
                slide_direction : 'bottom',           // (optional) slide direction, null by default
                show_forks : true,                    // (optional) show forked repos, true by default
                exclude_list : ['excluded_project'],  // (optional) list excluded repos
                space_char : "_"                      // (optional) separator character, it's substituted by space
            });
        });
        </script>
    </body>
</html>
```
