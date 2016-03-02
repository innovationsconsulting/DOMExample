Ext.define('DOMExample.view.Main', {
    extend: 'Ext.Component',
    alias: 'widget.main',
 
    config: {
        html: 'DOM Element Demo',
        style: 'position:absolute;top:50px;left:50px;width:150px;height:150px;background-color:red;border-radius:15px;'
    },
	
	initialize: function () {
		var me = this;
 
		var compEl = me.element;
 
		compEl.on({
			scope: me,
			tap: 'modifydom'
		});
	},
	
	modifydom: function () {
		var me = this;
		var compEl = me.element;
 
		compEl.dom.style.backgroundColor = 'green';
		//compEl.setStyle('background-color','green');
		compEl.setHtml('color changed to green');
		//compEl.dom.innerHTML = 'color changed to green';
	}
    
});