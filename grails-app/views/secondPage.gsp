
<%@ page contentType="text/html;charset=UTF-8" %>

<!DOCTYPE html>
<html>
	<head>
		<title>Dimes Server Reviews</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="stylesheet" href="${resource(dir:'css', file:'finedine.css')}" />
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.2/jquery.mobile.structure-1.3.2.min.css" />
		<link rel="stylesheet" href="${resource(dir:'css', file:'style.css')}">
		<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
		<script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
		<script type="text/javascript" src="http://oauth.googlecode.com/svn/code/javascript/oauth.js"></script>
		<script type="text/javascript" src="http://oauth.googlecode.com/svn/code/javascript/sha1.js"></script>
		<script type="text/javascript" src="https://rawgithub.com/padolsey/prettyPrint.js/master/prettyprint.js"></script>
		<g:javascript src="js.js" />
		<!-- Custom overwrite spreadsheet-->

	</head>
    <body>


		<!-- Browse page -->
		<div data-role="page" id="browse" data-theme="a">
			<div data-role="header" data-id="main" data-position="fixed" data-theme="a">
				<a href="#home" data-role="button" data-icon="home" data-transition="slide" data-direction="reverse">Home</a>
				<h1>FineDine</h1>
				<a href="#settings" data-role="button" data-icon="gear" data-transition="slide">Settings</a>
			</div>
			<div data-role="content" data-theme="a">
				<ul data-role="listview" data-filter="true" data-filter-placeholder="Search for Spots">
					<g:each var="res" in="${result}">
						<li>
							<a href="${resource(file:'example')}" data-transition="slide">
								<h2>${res.name}</h2>
								${res.id}
								<p>${res.rating}</p>
								<p>${res.address}</p>
								<p>${res.categories}</p>
							</a>
						</li>
					</g:each>
				</ul>
			</div>
			<div data-id="main" data-role="footer" data-position="fixed" data-theme="a">
				<h1>Advertisement</h1>
			</div>
		</div>

                                    </body>
                                </html>
