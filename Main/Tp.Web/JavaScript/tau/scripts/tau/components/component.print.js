define(["Underscore","tau/core/component-base","tau/views/view.container","tau/ui/templates/print/ui.template.print","tau/ui/extensions/print/ui.extension.print"],function(a,b,c,d,e){return{create:function(f){return f=f||{},a.defaults(f,{template:d}),(new b(f)).attach(e).attach(c).bus}}})