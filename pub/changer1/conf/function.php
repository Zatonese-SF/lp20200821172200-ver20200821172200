<?php
/**
 * @brief appollo
 *
 * @date 2015/11/11
 * @author sakka@joint-media.co.jp
 * @version $Id: function.php 27 2015-11-11 08:12:05Z sakka $
 */

/*
 * 指定されたユーザーエージェントから、端末種別を返します。
 */
function get_device_type()
{

	$agent = isset($_SERVER["HTTP_USER_AGENT"]) ? $_SERVER["HTTP_USER_AGENT"] : '';
	if(empty($agent)){
		return DEVICE_TYPE_PC;
	}

	if(
		(strpos($agent, "iPhone")  !== FALSE) ||
		(strpos($agent, "iPod")    !== FALSE) ||
		(strpos($agent, "iPad")    !== FALSE)
	){
		// iOS
		return DEVICE_TYPE_IOS;
	}else if( strpos($agent, "Android") !== FALSE ){
		// Android
		return DEVICE_TYPE_ANDROID;
	}else{
		// PC
		return DEVICE_TYPE_PC;
	}

	return DEVICE_TYPE_PC;
}

// 広告強制提携
function execute_redirect_ad($redirect_ad_id_list, $acd, $title, $device, $redirect_flag=0)
{
	$return = $acd;

	if(empty($acd)){
		return $return;
	}

	if(isset($redirect_ad_id_list[$device])){
		if(!empty($redirect_ad_id_list[$device])){
			$other_ad_id = intval($redirect_ad_id_list[$device]);
			// 広告強制提携API
			$api_url = ASP_URL.'/api/tieup/?acd='.$acd.'&other_ad_id='.$other_ad_id;
			$other_acd = @file_get_contents($api_url);
			$return = $other_acd;
		}
	}

	if($redirect_flag == 1){
		if(isset($other_acd)){
			if(!empty($other_acd)){
				// 別の広告へリダイレクト
				$redirect_url = ASP_URL.'/api/lp/?acd='.$other_acd.'&title='.$title.'&redirect_flag=1';
				header("Location: ".$redirect_url);
				exit;
			}
		}
	}
	return $return;
}

?>