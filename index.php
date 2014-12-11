<?php
	if (isset($_REQUEST['build'])) {
		define('ENV', 'live');
	} else {
		define('ENV', 'development');
	}
	
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Test Grunt</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
	<link rel="shortcut icon" href="/favicon.ico">
	
	<!-- Add or edit css in the less/main.less file -->
	<?php if (ENV === 'development'): ?>
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<script src="bower_components/modernizr/modernizr.js"></script>
	<?php else: ?>
		<link rel="stylesheet" type="text/css" href="css/main.min.css">
		<script src="js/modernizr.min.js"></script>
	<?php endif ?>

</head>

<body>
	<div class="container">
		<p class="lead">Hello Big World</p>
		<?php include_once('template/welcome.php') ?>
	</div>
</body>

<!-- Load JavaScript Vendors and plugins in the Gruntfile.js file -->
<!-- Edit Main JavaScript file in the main.js file -->
<?php if (ENV === 'development'): ?>
	<script type="text/javascript" src="js/vendors.js"></script>
	<script type="text/javascript" src="js/plugins.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
<?php else: ?>
	<script type="text/javascript" src="js/vendors.min.js"></script>
	<script type="text/javascript" src="js/plugins.min.js"></script>
	<script type="text/javascript" src="js/main.min.js"></script>
<?php endif ?>	

</html>