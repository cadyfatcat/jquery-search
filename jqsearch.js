/*
            /$$$$$$   /$$$$$$                                          /$$      
           /$$__  $$ /$$__  $$                                        | $$      
       /$$| $$  \ $$| $$  \__/  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$| $$$$$$$ 
      |__/| $$  | $$|  $$$$$$  /$$__  $$ |____  $$ /$$__  $$ /$$_____/| $$__  $$
       /$$| $$  | $$ \____  $$| $$$$$$$$  /$$$$$$$| $$  \__/| $$      | $$  \ $$
      | $$| $$/$$ $$ /$$  \ $$| $$_____/ /$$__  $$| $$      | $$      | $$  | $$
      | $$|  $$$$$$/|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$      |  $$$$$$$| $$  | $$
      | $$ \____ $$$ \______/  \_______/ \_______/|__/       \_______/|__/  |__/
 /$$  | $$      \__/                                                            
|  $$$$$$/                                                                      
 \______/                                                                       

JQuery Search created by Alex Funaro @A_funs
2014 MIT License

*/
(function ( $ ) {
 
    $.fn.jqsearch = function( options ) {
 
        var settings = $.extend({
            search_class: "jq_searchable",
            item_holder_class: "jq_item_holder",
            highlight_class:"highlight",
            keystroke:true
        }, options );
        
        var itemArray = [];

        //push all search items to array
        $('.+settings.item_holder_class+').each(function(el){
          itemArray.push(el);
        })
        
        $(this).on({
          change: doSearch(this),
          keyup: doSearch(this),
          keydown: doSearch(this)
        })
        
        function doSearch(this){
          $(this).val();
        }
        
        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
 
    };
 
}( jQuery ));