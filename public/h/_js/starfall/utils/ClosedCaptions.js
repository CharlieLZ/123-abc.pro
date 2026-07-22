	function ClosedCaptions() {
		
		var txtGen;
		var cc_bar;
		var cc_info;
		
		var self = this;

		this.setTextFormat = function(__name, __size) {
			txtGen = new TextGen();
			txtGen.init();
			txtGen.applyFormat(__name, __size, '#FFFFFF');
			txtGen.txt_fmt.kerning = true;
			txtGen.txt_fmt.letterSpacing = 0;
			txtGen.txt_fmt.align = 'center';
		}
		this.setCCinfo = function(__obj) {
			cc_info = __obj;
		}
		this.shiftCCbar = function(__x, __y) {
			cc_bar.x = __x;
			cc_bar.y = __y;
		}
		this.createCCbar = function(__txt) {
			if (cc_bar) {
				cc_bar.parent.removeChild(cc_bar);
				cc_bar = null;
			}
			if (__txt == '') return;
			__txt = __txt.replace(/[\r\n]+/g, '\n');
			cc_bar = self.createTextField(__txt, '#FFFFFF', '#000000');
			cc_bar.x = cc_info.ptX;
			cc_bar.y = cc_info.ptY;
			cc_info['mc'].addChild(cc_bar);
		}
		this.createTextField = function(__text, txtColor, btnColor) {
			var __mc = new createjs.MovieClip();
			
			var cc_txt = txtGen.createField(__text);
			cc_txt.color = txtColor;
			var __bounds = cc_txt.getBounds();
			cc_txt.x -= __bounds.width/2;
			cc_txt.y -= __bounds.height/2;
			__mc.addChild(cc_txt);
				
			var txt_btn = new createjs.Shape();
			__mc.addChildAt(txt_btn, 0);
	
			txt_btn.x = cc_txt.x;
			txt_btn.y = cc_txt.y;
			if (browserType == 'Safari') {
				txt_btn.y = txt_btn.y+8;
			}
			txt_btn.graphics.beginFill(btnColor);
			txt_btn.graphics.drawRoundRect(-10, -10, __bounds.width+20, __bounds.height+20, 10);
			txt_btn.graphics.endFill();
			txt_btn.alpha = .75;
				
			return __mc;
		}
	}