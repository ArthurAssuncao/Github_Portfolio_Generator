var GithubPortfolioGenerator = (function (args) {
    // constructor
    var module = function (args) {
        // Initiatialization
        if(!args || !args.user){
            throw new Error('GithubPortfolioGenerator: missing user arg');
        }
        else{
            // Parameters
            this.user            = args.user;
            this.dom_node        = args.dom_node ? args.dom_node : document.body;
            this.slide_direction = args.slide_direction;
            this.show_forks      = args.show_forks == false ? false : true;
            this.exclude_list    = (args.exclude_list instanceof Array) ? args.exclude_list : new Array();
            this.repos           = [];
            this.space_char  = args.space_char ? args.space_char : null;

            // Make sure bind() is a function
            if (!Function.prototype.bind){
                Function.prototype.bind = this.bind;
            }
            // continue building
            this.postCreate.bind(this)();
        }
    };

    // dress up the module's prototype
    module.prototype = {
        constructor: module,

            postCreate : function(){
                // generate portfolio
                this.generate_projects(this.slide_direction);
            },

            create_project_element : function(repositorio, class_slide_direction){
                var regexSpaceChar = new RegExp(this.space_char, 'g');
                var tag_name = '<h2 class="project-gpg-name">' + (this.space_char === null ? repositorio['name'] : repositorio['name'].replace(regexSpaceChar, " ") ) + '</h2>';
                var tag_language = '<h3 class="project-gpg-language muted">' + ((repositorio['language']) ? repositorio['language'] : '') + '</h3>';
                var github_button_star = '<li><span class="btn btn-mini"><i class="icon-star"></i> stars</span> <span class="github-gpg-count">' + repositorio['watchers'] + '</span></li>';
                var github_button_fork = '<li><span class="btn btn-mini"><i class="icon-random"></i> forks</span> <span class="github-gpg-count">' + repositorio['forks'] + '</span></li>';
                var tag_description = '<p class="project-gpg-description ' + (class_slide_direction ? 'project-gpg-description-caption' : '') +'">' + ((repositorio['description']) ? repositorio['description'] : '') + '</p>';
                var tag_li = '<li class="github-gpg-project github-gpg-sombra ' + class_slide_direction + (class_slide_direction ? ' github-gpg-project-slide' : '') +' well span3"><a href="' + repositorio['html_url'] + '">' + tag_name + tag_language + '<ul class="github-gpg-buttons unstyled inline">' + github_button_star + github_button_fork + '</ul>' + tag_description + '</a></li>';
                return tag_li;
            },

            generate_class_slide : function(slide_direction){
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
            },

            generate_projects : function(slide_direction){
                var class_slide_direction = this.generate_class_slide(slide_direction);
                class_slide_direction = class_slide_direction ? class_slide_direction : '';
                var classThis = this;
                $.getJSON('https://api.github.com/users/' + this.user + '/repos?&sort=updated', function(resp) {
                    if (resp.length > 0) {
                        $(classThis.dom_node).append('<ul id="project-gpg-list" class="unstyled"></ul>');
                        $.each(resp, function(i, repositorio) {
                            if($.inArray(repositorio['name'], classThis.exclude_list) == -1){
                                if(classThis.show_forks || !repositorio['fork']){
                                    var tag_li = classThis.create_project_element(repositorio, class_slide_direction);
                                    $('#project-gpg-list').append(tag_li);
                                }
                            }
                        });
                    }
                    else {
                        $(classThis.dom_node).append('<h3 class="gpg-no-repositories">No public repositories.</h3>');
                    }
                });
            },

            // Bind, for browsers not supporting it by default
            bind : function (oThis){
                if (typeof this !== "function"){
                    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                }
                var aArgs = Array.prototype.slice.call(arguments, 1), 
                    fToBind = this, fNOP = function () {},
                    fBound = function () {
                      return fToBind.apply(this instanceof fNOP
                            ? this
                            : oThis || window,
                          aArgs.concat(Array.prototype.slice.call(arguments)));
                    };
                fNOP.prototype = this.prototype;
                fBound.prototype = new fNOP();
                return fBound;
            }
    };

    return module;
}());