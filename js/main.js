/* eslint no-undef:off  */
(function($) {

    $('#new-quote-button').on('click', function(event) {
        event.preventDefault();

        $.ajax({
            method: 'GET',
            url: apilets.url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            cache: false,
            success: function(data) {
                let quote = data[0].content.rendered;
                let author = data[0].title.rendered;
                let quoteSource = data[0]._qod_quote_source;
                let quoteSourceUrl = data[0]._qod_quote_source_url;
                let slug = data[0].slug;

                $('.entry-content').html(quote);
                $('.entry-title-text').text(author);

                let source = quoteSource && quoteSourceUrl ? '<a href="' + quoteSourceUrl + '" target="_blank">' + quoteSource + '</a>' : quoteSource;
                $('.entry-reference').html(source ? ', ' + source : '');

                history.pushState(null, null, apilets.mainUrl + '/' + slug + '/');
            }
        });
    });
    
        
    

})(jQuery);