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
            keystroke:true,
            return_location:'taker'
        }, options );
        
        var itemArray = [];
        //push all search items to array
        $('.'+settings.item_holder_class).each(function(ind, el){
          itemArray.push(el);
        })
        
        $(this).on({
          change: function(){doSearch(this)},
          keyup: function(){doSearch(this)},
          keydown: function(){doSearch(this)}
        })
        function doSearch(tosearch){
          var searchedRaw = $(tosearch).val();
          //find search results
          var results = [];
          $(itemArray).each(function(ind,item){
            var fields_to_search = $(item).find('.'+settings.search_class);
              $(fields_to_search).each(function(ind, element){
                var re = new RegExp(searchedRaw, 'g');
                if($(element).text().match(re)){
                  results.push(item);  
                }                
              })
          })
        // reset and return 
          $("."+settings.return_location).html('');
          $(results).each(function(ind, el){
            $(el).appendTo('.'+settings.return_location);
          })
        }
 
    };
 
}( jQuery ));