function init(){
	var num = document.getElementById("num");
	num.value = 0;
	num.disabled = "disabled";//禁用文本框
	var oButton = document.getElementsByTagName("input");//给button添加事件
	for(var i = 0; i < oButton.length; i++){
		oButton[i].onclick = function(){
			if(!isNaN(this.value)){
				num.value = (num.value + this.value)*1;
			}
			else{
				switch(this.value){
					case"+":
						num_value = Number(num.value);
						num.value = 0;
						fh = "+";
						break;
					case"-":
						num_value = Number(num.value);
						num.value = 0;
						fh = "-";
						break;
					case"*":
						num_value = Number(num.value);
						num.value = 0;
						fh = "*";
						break;
					case"/":
						num_value = Number(num.value);
						num.value = 0;
						fh = "/";
						break;
					case".":
						if(num.value.indexOf(".") == -1){//判断小数点是否存在
							num.value += ".";
						}
						break;
					case"C":
						num.value = 0;
						break;
					case"←":
						if(num.value.length>1){
						 	num.value = num.value.substring(0, num.value.length-1);
						}else{
							num.value = 0;
						}
						break;
					case"+/-":
						num.value *= -1;
						break;
					case"=":
						switch(fh){
							case"+":
								num.value = num_value + Number(num.value);
								break;
							case"-":
								num.value = num_value - Number(num.value);
								break;
							case"*":
								num.value = num_value * Number(num.value);
								break;
							case"/":
								if(Number(num.value)==0){
									alert("除数不能为0");
									num.value = 0;
								}else{
									num.value = num_value / Number(num.value);
								}
								break;
						}
						break;
				}
			}
		}
	}
}