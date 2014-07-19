var Game = function(){
	var _this = this;
	_this.objects = {};
	

	this.addObject = function(o){
		_this.objects[o.id] = o;
	}

	this.cmd = function(data){
		
		if(typeof _this.objects[data.id]!='undefined'){
			if(typeof _this.objects[data.id][data.cmd.name]=='function'){
				_this.objects[data.id][data.cmd.name](data.cmd.params);
			}else{
				console.error('method %s of %s undefined',data.cmd.name,data.id);
			}
		}else{
			console.error('%s undefined',data.id);
		}
		
	};
};
module.exports = new Game();