(function () {
  angular
    .module('urbinfo.common')
    .factory('locale', locale);

  function locale() {
    return {
      // Buttons:
      BTN_ADD: Drupal.t('Add'),
      BTN_ADD_CATEGORY: Drupal.t('Add category'),
      BTN_ADD_COVER_IMAGE: Drupal.t('Add cover image'),
      BTN_ADD_DESCRIPTION: Drupal.t('Add description'),
      BTN_ADD_BUSINESS_DETAILS: Drupal.t('Add business details'),
      BTN_ADD_LOGO: Drupal.t('Add your logo'),
      BTN_ADD_SLIDE: Drupal.t('Add a slide'),
      BTN_ADD_SPECIAL: Drupal.t('Add a new special'),
      BTN_ADD_TEAM_MEMBER: Drupal.t('Add a profile'),
      BTN_ALL: Drupal.t('All'),
      BTN_CANCEL: Drupal.t('Cancel'),
      BTN_CHANGE: Drupal.t('Change'),
      BTN_CONFIRM: Drupal.t('Confirm'),
      BTN_CLOSE: Drupal.t('Close'),
      BTN_DONE: Drupal.t('Done'),
      BTN_DONE_EDITING: Drupal.t('Done editing'),
      BTN_EDIT: Drupal.t('Edit'),
      BTN_EDIT_DESCRIPTION: Drupal.t('Edit description'),
      BTN_EDIT_GALLERY: Drupal.t('Edit gallery'),
      BTN_EDIT_SLIDE: Drupal.t('Edit slide'),
      BTN_EDIT_SPECIALS: Drupal.t('Edit specials'),
      BTN_EDIT_TEAM: Drupal.t('Edit team'),
      BTN_FILTER: Drupal.t('Filter'),
      BTN_GET_DIRECTIONS: Drupal.t('Get directions'),
      BTN_GO: Drupal.t('Go'),
      BTN_LOGIN: Drupal.t('Login'),
      BTN_SIGNUP: Drupal.t('Create a new account'),
      BTN_PRINT: Drupal.t('Print'),
      BTN_REMOVE: Drupal.t('Remove'),
      BTN_RESET: Drupal.t('Reset'),
      BTN_SAVE: Drupal.t('Save'),
      BTN_SHARE: Drupal.t('Share'),
      BTN_SHOW_DESCRIPTION: Drupal.t('Show description'),
      BTN_SWITCH_LANGUAGE: Drupal.t('Switch language'),
      BTN_SWITCH_TO_LANGUAGE: Drupal.t('Switch to'),

      // Links:
      LNK_DOWNLOAD_MENU: Drupal.t('Download menu'),
      LNK_MORE: Drupal.t('More…'),
      LNK_LESS: Drupal.t('Less…'),
      LNK_HIDE: Drupal.t('Hide…'),
      LNK_SEND_MESSAGE: Drupal.t('Send a message'),
      LNK_FORGOT_PASSWORD: Drupal.t('Forgot password?'),

      // Field labels:
      LBL_ADDRESS: Drupal.t('Address'),
      LBL_ADDRESS_1: Drupal.t('Address 1'),
      LBL_ADDRESS_2: Drupal.t('Address 2'),
      LBL_BUSINESS_NAME: Drupal.t('Business name'),
      LBL_BUSINESS_TYPE: Drupal.t('Business type'),
      LBL_CATEGORIES: Drupal.t('Categories'),
      LBL_COUNTRY: Drupal.t('Country'),
      LBL_DESCRIPTION: Drupal.t('Description'),
      LBL_EMAIL: Drupal.t('Email'),
      LBL_TELEPHONE: Drupal.t('Phone'),
      LBL_FROM: Drupal.t('From…'),
      LBL_GET_DIRECTIONS: Drupal.t('Get directions'),
      LBL_IMAGE: Drupal.t('Image'),
      LBL_JOB_TITLE: Drupal.t('Job title'),
      LBL_LIST: Drupal.t('List'),
      LBL_LOCALITY: Drupal.t('Locality'),
      LBL_MAP: Drupal.t('Map'),
      LBL_NAME: Drupal.t('Name'),
      LBL_PASSWORD: Drupal.t('Password'),
      LBL_PASSWORD_CONFIRM: Drupal.t('Confirm password'),
      LBL_POST_CODE: Drupal.t('Post code'),
      LBL_TITLE: Drupal.t('Title'),
      LBL_VIDEO: Drupal.t('Video'),
      LBL_VIDEO_URL: Drupal.t('Video URL'),
      LBL_DRIVING: Drupal.t('Driving'),
      LBL_CYCLING: Drupal.t('Cycling'),
      LBL_TRANSIT: Drupal.t('Public transport'),
      LBL_WALKING: Drupal.t('Walking'),
      LBL_SEARCH_ON_MOVE: Drupal.t('Search when I move the map'),
      LBL_SEARCH_AREA: Drupal.t('Search this area'),
      LBL_FACILITIES: Drupal.t('Facilities'),
      LBL_AVERAGE_PRICE: Drupal.t('Average price'),
      LBL_MENU: Drupal.t('Menu'),
      LBL_HAS_CONTENT: Drupal.t('has content'),
      LBL_EMPTY_CONTENT: Drupal.t('empty content'),
      LBL_VALID_TILL: Drupal.t('Expiry date'),
      LBL_AGREE_WITH_TERMS: Drupal.t('Agree with these terms'),

      // Errors:
      ERR_REQUIRED: Drupal.t('Required'),
      ERR_INVALID_VIDEO_URL: Drupal.t('Invalid or unsupported video URL'),
      ERR_INVALID_LOGIN: Drupal.t('Incorrect login details. Please try again.'),
      ERR_INVALID_EMAIL: Drupal.t('Must be a valid email address'),
      ERR_MSG_OPENING_HOURS_FORMAT: Drupal.t('Must be a valid time format'),
      ERR_PASSWORDS_DONT_MATCH: Drupal.t('Passwords don\'t match'),
      ERR_PASSWORD_5_MINLENGTH: Drupal.t('Password should have minimum a 5 characters length.'),


      // General message text:
      MSG_ADD_SLIDE: Drupal.t('Add a slide'),
      MSG_ADD_SPECIAL: Drupal.t('Add a special'),
      MSG_ADD_TEAM_MEMBER: Drupal.t('Add a team member'),
      MSG_CLOSED: Drupal.t('Closed'),
      MSG_CLOSED_TODAY: Drupal.t('Closed today'),
      MSG_CONFIRM_REMOVE_SLIDE: Drupal.t('Are you sure you want to remove this slide?'),
      MSG_CONFIRM_REMOVE_TEAM_MEMBER: Drupal.t('Are you sure you want to remove this team member?'),
      MSG_DIRECTIONS_FROM: Drupal.t('Directions from !location'),
      MSG_DIRECTIONS_SUMMARY: Drupal.t('!distance in about !duration'),
      MSG_DRAG_IMAGES: Drupal.t('Drag images to change order'),
      MSG_EDIT_BUSINESS_DESCRIPTION: Drupal.t('Edit business description'),

      MSG_EDIT_BUSINESS_DETAILS: Drupal.t('Edit business details'),
      MSG_EDIT_OPENING_HOURS: Drupal.t('Edit opening hours'),
      MSG_EDIT_SLIDE: Drupal.t('Edit slide'),
      MSG_EDIT_SPECIAL: Drupal.t('Edit special'),
      MSG_EDIT_TEAM_MEMBER: Drupal.t('Edit team member'),
      MSG_GALLERY: Drupal.t('Gallery'),
      MSG_OPEN_TODAY: Drupal.t('Open today'),
      MSG_OR: Drupal.t('Or'),
      MSG_REQUIRED_FIELD: Drupal.t('This field is required'),
      MSG_SHOW_ME: Drupal.t('Show me:'),
      MSG_SPECIALS: Drupal.t('Specials'),
      MSG_TEAM: Drupal.t('Our team'),
      MSG_TEAM_MEMBER: Drupal.t('Team member'),
      MSG_UPDATING_RESULTS: Drupal.t('Updating results…'),
      MSG_SEARCH_RESULTS_NONE: Drupal.t('No results for !query near !location'),
      MSG_SEARCH_RESULTS_SINGLE: Drupal.t('1 result for !query near !location'),
      MSG_SEARCH_RESULTS_COUNT: Drupal.t('!count results for !query near !location'),
      MSG_EMPTY_DESCRIPTION: Drupal.t('You can add a short description of your business here.'),
      MSG_EMPTY_BUSINESS_DETAILS: Drupal.t('You can add business details like email, phone number, average price and facilities here.'),
      MSG_EMPTY_TEAM: Drupal.t('Show your customers the faces behind your business and add a personal touch to your page.'),
      MSG_EMPTY_SPECIALS: Drupal.t('Here you can list current special offers and promotions.'),
      MSG_EMPTY_GALLERY: Drupal.t('Why not add some images and videos of your business to show your customers what you’re all about?'),
      MSG_SWITCH_TO_LANGUAGE: Drupal.t('Switch to another language'),
      MSG_SWITCH_LANGUAGE_BUSINESS_DESCRIPTION: Drupal.t('You can add description in another language'),
      MSG_SWITCH_TO_ANOTHER_LANGUAGE_HEADER: Drupal.t('You can translate this field into another language'),
      MSG_SWITCH_TO_ANOTHER_LANGUAGE_TEXT: Drupal.t('Select a language below and you will be redirected to that language page.')
    };
  }
}());
