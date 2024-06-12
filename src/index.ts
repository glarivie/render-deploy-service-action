import axios, { AxiosHeaders } from "axios";
import core from "@actions/core";

const renderApi = axios.create({
	baseURL: "https://api.render.com/v1",
	headers: new AxiosHeaders({
		Authorization: `Bearer ${core.getInput("apiKey", { required: true })}`,
	}),
});

interface RenderApiSuccessResponse {
	id: string;
	commit: {
		id: string;
		message: string;
		createdAt: Date;
	};
}

async function deploy(serviceId: string) {
	/** @see https://api-docs.render.com/reference/create-deploy */
	const { data } = await renderApi<RenderApiSuccessResponse>({
		method: "POST",
		url: `/services/${serviceId}/deploys`,
	});

	core.info(`Deploy [${data.commit.id}] ${data.commit.message}`);
}

deploy(core.getInput("serviceId", { required: true })).catch((error) => {
	return core.setFailed(error.message);
});
