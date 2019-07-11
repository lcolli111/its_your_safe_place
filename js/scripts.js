$(".bx").click(function(event) {
    // $( "#foo" ).trigger( "click" );
    console.log(event.delegateTarget);
    // $( event.delegateTarget ).find("a").trigger("click");
    // event.stopPropagation();
    
    // alert( "Handler for .click() called." );

    // find the a tag inside the box
    // get the "href" value from the a tag (attr)
    // window location href 
    // tell the brower to load another webpage
  });