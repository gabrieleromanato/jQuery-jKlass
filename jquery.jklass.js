/** jKlass
  * @author Gabriele Romanato
  * @description jQuery implementation of Stoyan Stefanov's klass() function
  * @requires jQuery 1.4+
  * @credits Idea: http://code.google.com/p/jquery-klass/
  *          Inspiration and code: 'JavaScript Patterns' by Stoyan Stefanov (O'Reilly) Chapter 6, pages 128-30 
  */
            
            
            
(function($) {


  $.jKlass = function(Parent, props) {
  
  
    var Child, F, i;
    
    Child = function() {
    
    
      if(Child.uber && Child.uber.hasOwnProperty('init')) {
      
        Child.uber.init.apply(this, arguments);
      
      
      }
      
      if(Child.prototype.hasOwnProperty('init')) {
      
      
        Child.prototype.init.apply(this, arguments);
      
      
      }
    
    
    
    
    };
    
    
    Parent = Parent || Object;
    
    F = function() {};
    
    F.prototype = Parent.prototype;
    
    Child.prototype = new F();
    
    Child.uber = Parent.prototype;
    
    Child.prototype.constructor = Child;
    
    for (i in props) {
    
      if(props.hasOwnProperty(i)) {
      
        Child.prototype[i] = props[i];
      
      
      }
    
    
    }
  
  
  return Child;
  
  };




})(jQuery);