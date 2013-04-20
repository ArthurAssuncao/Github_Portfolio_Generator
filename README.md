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
        $.GithubPortfolioGenerator(options);
    });
</pre>
* Enjoy it!

###Opções
`user`, um nome de usuário no Github.<br>
`slide_direction`, direção do slide caption, pode ser `top`, `bottom`, `left`, `right` ou qualquer outro valor para não usar o slide caption e mostrar os textos ao carregar o projeto.<br>
`exclude_list`, lista de projetos que não serão exibidos.

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
            $.GithubPortfolioGenerator({
                'user' : 'ArthurAssuncao',
                'slide_direction' : 'bottom',
                'exclude_list' : ['excluded_project'],
            });
        });
        </script>
    </body>
</html>


```
