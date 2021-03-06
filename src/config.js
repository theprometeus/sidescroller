/*
	Server Configuration
*/

app_domain 			= "kemononaru-sidescroller.herokuapp.com";
app_host       		= "192.168.15.2";
app_port       		= 3000;

app_cache 			= {
	default: 			(1000 * 60 * 60 * 24 * 2),
	css: 				31536000,
	js: 				31536000,
	jpg: 				86400,
	png: 				86400
};

app_salt_rounds 	= 5;

app_cookie_secret 	= process.env.DYNO;

app_dir 			= path.join(__dirname, "../www/");