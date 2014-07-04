// Set configuration
seajs.config({
  base: "../../sea-modules/",
  alias: {
	  "$": "jquery/jquery/2.1.0/jquery",
	  "jquery": "jquery/jquery/2.1.0/jquery",
	  "bootstrap-theme.css": "gallery/bootstrap/3.0.0/bootstrap-theme.css",
	  "bootstrap.css": "gallery/bootstrap/3.0.0/bootstrap.css",
	  "bootstrap": "gallery/bootstrap/3.0.0/bootstrap",
	  "fonts/glyphicons-halflings-regular.eot": "gallery/bootstrap/3.0.0/fonts/glyphicons-halflings-regular.eot",
	  "fonts/glyphicons-halflings-regular.svg": "gallery/bootstrap/3.0.0/fonts/glyphicons-halflings-regular.svg",
	  "fonts/glyphicons-halflings-regular.ttf": "gallery/bootstrap/3.0.0/fonts/glyphicons-halflings-regular.ttf",
	  "fonts/glyphicons-halflings-regular.woff": "gallery/bootstrap/3.0.0/fonts/glyphicons-halflings-regular.woff",
	  "moment": "gallery/moment/2.6.0/moment"
  },
  map: [
    //['\/sea-modules\/dist', '/dist']
  ]
});