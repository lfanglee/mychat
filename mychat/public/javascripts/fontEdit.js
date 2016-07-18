$(function() {
    $('#font-family').click(function() {
        $('#font-selector').show();
    });
    $('#font-size').click(function() {
        $('#font-sizeSelect').show();
    });
    

    //实现点击按钮之外的地方时隐藏菜单
    $(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest("#font-family").length == 0){
			$("#font-selector").hide(); 
		}
		if(target.closest("#font-size").length == 0){
			$("#font-sizeSelect").hide(); 
		}
	});


    $('#font-selector li').click(function() {
    	font_familyT=$(this).attr('value');
        $('#font-selector li').attr('style', 'border:none');
        $(this).attr('style', 'border:1px solid grey');
        $('#font-family').attr('value', $(this).text());
    });
    $('#font-sizeSelect li').click(function() {
    	fontSizeT=$(this).text()+'px';
        $('#font-sizeSelect li').attr('style', 'border:none');
        $(this).attr('style', 'border:1px solid grey');
        $('#font-size').attr('value', $(this).text());
    });
    $('#boldset').click(function(){
        if($('#boldset').attr('class')=='boldset'){
            boldT=true;
            $('#boldset').attr('class','boldset2');
        }else{
            boldT=false;
            $('#boldset').attr('class','boldset');
        }
        
    });
    $('#iset').click(function(){
        if($('#iset').attr('class')=='iset'){
            iT=true;
            $('#iset').attr('class','iset2');
        }else{
            iT=false;
            $('#iset').attr('class','iset');
        }
        
    });
});
