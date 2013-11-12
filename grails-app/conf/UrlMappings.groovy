class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}

		"/"(view:"/index")
		"/index2" (view:"/index2")
		"/secondPage" (view:"/secondPage")
		"500"(view:'/error')
		"/example" (view:"example")
                "/login/$action?"(controller: "login")
                "/logout/$action?"(controller: "logout")
	}
}
