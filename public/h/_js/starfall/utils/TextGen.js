var creatjs = createjs||{};

function TextGen() {
		
	this.txt_fmt = {};
	var self = this;
	
    this.init = function(){
    	self.txt_fmt = {};
    }
	this.applyFormat = function(font, size, color) {
		self.txt_fmt.font = font;
		self.txt_fmt.size = size;
		self.txt_fmt.color = color;
	}
		
	this.setFormat = function(f, s, a, c, b) {
		self.txt_fmt.font = f.fontName;
		self.txt_fmt.size = s;
		self.txt_fmt.align = a;
		self.txt_fmt.color = c;
		self.txt_fmt.bold = b;
	}
	
	this.createField = function(txt) {
		var tF = new createjs.Text(txt, "normal " + self.txt_fmt.size + "px '" + self.txt_fmt.font + "'", self.txt_fmt.color);
		tF.text = txt;
		tF.mouseEnabled = false;
		return tF;
	}
		
	this.createFieldAlign = function(txt, dir) {
		var tF = new createjs.Text(txt, "normal " + self.txt_fmt.size + "px '" + self.txt_fmt.font + "'", self.txt_fmt.color);
		tF.textAlign = dir;
		tF.text = txt;
		tF.mouseEnabled = false;
		return tF;
	}
}
		