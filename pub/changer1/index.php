<?php

	require_once(dirname(__FILE__).'/conf/init.php');

	$agent = $_SERVER["HTTP_USER_AGENT"];
	if((strpos($agent, "iPhone") !== FALSE) || (strpos($agent, 'iPod') !== false) || (strpos($agent, 'iPad') !== false)){
		include('./ios.html');
	} else if (strpos($agent, "Android") !== FALSE){
		include('./and.html');
	} else{
		$url = "./pc/$pcapp/".$jump_query;  //その他
		
		$jmpurl = "$url";
		header("Location: $jmpurl\n\n");
	}

?>