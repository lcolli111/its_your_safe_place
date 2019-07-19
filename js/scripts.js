$(".bx").click(function(event) {
    // $( "#foo" ).trigger( "click" );
    console.log(event.delegateTarget);
    // $( event.delegateTarget ).find("a").trigger("click");
    // event.stopPropagation();
    
    // alert( "Handler for .click() called." );

    // find the a tag inside the box
    // get the "href" value from the a tag (attr)
    // window location href 
    // tell the browser to load another webpage
  });
  var visitor = prompt("What is your name?");
  var message = "Welcome " + visitor;
  alert(message);
  
    

