import aquila from "@/love/hAsset/business/7.png";

const brand = () => {
	var brandObject

		brandObject = {
			logo: aquila,
			name: "Aquila Enterprise",
			app: "https://beehive-frontend.netlify.app/",
			admin: "https://beehive-admin.netlify.app/"
		}
						
	return brandObject
}

export default brand