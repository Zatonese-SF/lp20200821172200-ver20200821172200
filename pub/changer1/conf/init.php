<?php
/**
 * @brief appollo
 *
 * @date 2015/10/13
 * @author sakka@joint-media.co.jp
 * @version $Id: init.php 30 2015-11-16 06:20:35Z sakka $
 */

require_once(dirname(__FILE__).'/const.php');
require_once(dirname(__FILE__).'/function.php');

// 入力パラメータ
$title = isset($_GET['title']) ? trim($_GET['title']) : TITLE_NAME;// タイトル
$acd   = isset($_GET['acd']) ? trim($_GET['acd']) : '';// 広告コード

// デバイス
$device = get_device_type();

// 広告強制提携
$redirect_flag = 0;// 0=LPはそのままで広告コードだけ変える 1=別広告に飛ばす
$acd = execute_redirect_ad($REDIRECT_AD_ID_LIST, $acd, $title, $device, $redirect_flag);

// 現在のURL
$current_url = './?acd='.$acd.'&title='.$title;

// 次の遷移先URL
if(!empty($acd)){
	$send_url = ASP_URL.'/api/sd/?acd='.$acd;
}else{
	$send_url = SEND_URL_DEF;
}

// パラメタ受け渡し
$jump_query = '?acd='.$acd.'&title='.$title;

?>