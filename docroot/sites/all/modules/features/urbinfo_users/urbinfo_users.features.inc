<?php
/**
 * @file
 * urbinfo_users.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function urbinfo_users_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "oauthconnector" && $api == "oauthconnector") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function urbinfo_users_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}
