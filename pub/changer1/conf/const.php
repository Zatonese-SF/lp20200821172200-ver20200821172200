<?PHP
/**
 * @brief appollo
 *
 * @date 2015/11/11
 * @author sakka@joint-media.co.jp
 * @version $Id: const.php 31 2015-11-16 07:32:14Z sakka $
 */

define('DEV_FLAG', 0);// 開発フラグ 0=本番 1=stg 2=dev 3=local

define('DEVICE_TYPE_UNKNOWN', 0);// 不明
define('DEVICE_TYPE_PC'     , 1);// PC
define('DEVICE_TYPE_ANDROID', 2);// ANDROID
define('DEVICE_TYPE_IOS'    , 3);// iOS

// ASPのURL
define('ASP_URL', 'https://appollo.jp');

// 表示用曜日
$WEEK = array('日','月','火','水','木','金','土');
//------------------------------------------------------------------------------
// ページ基本情報定義
//------------------------------------------------------------------------------
// まとめ名
define('MATOME_NAME', 'オフパコ・ソーシャル・ネットワーク');
// 記事タイトル名
define('TITLE_NAME', '超エチエチなオフパコ専用のSNS!!');
// リダイレクト先URL
define('SEND_URL_DEF', 'http://www.yahoo.co.jp/');
// 広告名その1
define('IOS_NAME01', 'Goody');
define('AND_NAME01', 'Goody');
define('PC_NAME01', 'セフレゲット');
// 広告名その2
define('IOS_NAME02', 'Goody');
define('AND_NAME02', 'Goody');
define('PC_NAME02', 'セフレゲット');
// 広告ID(画像名及びストアURLに使用)
define('IOSID', 'goody');
define('ANDID', 'goody');
define('PCID', 'sfget');
// アプリ指定フォルダ
$iosapp = "goody";
$andapp = "goody";
$pcapp = "sfget";
// 強制提携広告IDのリスト
$REDIRECT_AD_ID_LIST = array(
DEVICE_TYPE_UNKNOWN => '1022',
DEVICE_TYPE_PC      => '1022',
DEVICE_TYPE_ANDROID => '1534',
DEVICE_TYPE_IOS     => '2322',
);
?>