const axios = require("axios");
const core = require("@actions/core");

const renderApi = axios.create({
	baseURL: "https://api.render.com/v1",
	headers: {
		Authorization: `Bearer ${core.getInput("apiKey", { required: true })}`,
	},
});

/**
 * @param {string} serviceId
 */
async function deploy(serviceId) {
	/**
	 * @type {{ data: { commit: { id: string; message: string; } } }}
	 * @see https://api-docs.render.com/reference/create-deploy
	 */
	const { data } = await renderApi({
		method: "POST",
		url: `/services/${serviceId}/deploys`,
	});

	core.info(`Deploy [${data.commit.id}] ${data.commit.message}`);
}

deploy(core.getInput("serviceId", { required: true })).catch((error) => {
	return core.setFailed(error.message);
});
