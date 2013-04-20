function generate_projects(config, slide_direction){
    var class_slide_direction = class_slide(slide_direction);
    class_slide_direction = class_slide_direction ? class_slide_direction : '';
    $.getJSON('https://api.github.com/users/' + config.user + '/repos?&sort=updated', function(resp) {
        if (resp.length > 0) {
            $(config.element_id).append('<ul id="project-gpg-list" class="unstyled"></ul>');
            $.each(resp, function(i, repositorio) {
                if($.inArray(repositorio['name'], config.exclude_list) == -1){
                    if(config.show_forks || !repositorio['fork']){
                        var tag_li = create_project_element(repositorio, class_slide_direction);
                        $(config.element_id).append(tag_li);
                    }
                }
            });
        }
        else {
            $(config.element_id).append('<p>No public repositories.</p>');
        }
    });
}

function create_project_element(repositorio, class_slide_direction){
    var tag_name = '<h2 class="project-gpg-name">' + repositorio['name'] + '</h2>';
    var tag_language = '<h3 class="project-gpg-language muted">' + ((repositorio['language']) ? repositorio['language'] : '') + '</h3>';
    var tag_description = '<p class="project-gpg-description ' + (class_slide_direction ? 'project-gpg-description-caption' : '') +'">' + ((repositorio['description']) ? repositorio['description'] : '') + '</p>';
    var tag_li = '<li class="github-gpg-project github-gpg-sombra ' + class_slide_direction + (class_slide_direction ? ' github-gpg-project-slide' : '') +' well span3"><a href="' + repositorio['html_url'] + '">' + tag_name + tag_language + tag_description + '</a></li>';
    return tag_li;
}

function class_slide(slide_direction){
    var css_class = null;
    switch(slide_direction){
        case 'top': {
            css_class = 'github-gpg-cap-top';
            break;
        }
        case 'bottom': {
            css_class = 'github-gpg-cap-bottom';
            break;
        }
        case 'left': {
            css_class = 'github-gpg-cap-left';
            break;
        }
        case 'right': {
            css_class = 'github-gpg-cap-right';
            break;
        }
    }
    return css_class;
}

(function($){
    $.GithubPortfolioGenerator = function(settings){
        var config = {
            'user': 'ArthurAssuncao',
            'element_id' : '#github-gpg-repos',
            'slide_direction' : null,
            'show_forks' : true,
            'exclude_list' : new Array(),
        };
        if (settings){$.extend(config, settings);}
        generate_projects(config, config.slide_direction);

        return this;
    };
})(jQuery);