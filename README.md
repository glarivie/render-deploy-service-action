# Render deploy service action

Trigger a deploy of a Render service.

## Inputs

| Inputs    | Required | Description                                                 | Links                                                |
| --------- | -------- | ----------------------------------------------------------- | ---------------------------------------------------- |
| serviceId | \*       | The ID of the service                                       | https://api-docs.render.com/reference/create-deploy  |
| apiKey    | \*       | Authenticate all requests to the Render API with an API key | https://api-docs.render.com/reference/authentication |

## Example usage

Use GitHub Action secrets to set the values of `serviceId` and `apiKey` and then add to your workflow with:

```yml
- uses: glarivie/render-deploy-service-action@v1.0.3
  with:
    serviceId: ${{ secrets.MY_RENDER_SERVICE_ID }}
    apiKey: ${{ secrets.MY_RENDER_API_KEY }}
```
