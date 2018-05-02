<?php
	$username = $_POST['username'];
	$password = $_POST['password'];
	$raw_success = array('code' => 1, 'msg' => '验证码正确');  
	$raw_fail = array('code' => 2, 'msg' => '验证码错误');
	//json_encode：转换成json形式的字符串
	$res_success = json_encode($raw_success);  
    $res_fail = json_encode($raw_fail);  
	//header：转换成json对象
	header('Content-type:text/json');
	
	if ($username == 'admin' && $password == 'admin') {  
        echo $res_success;  
    } else {  
        echo $res_fail;  
    } 
?>
