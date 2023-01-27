import { createClient, MicroCMSQueries } from "microcms-js-sdk"

export const microcmsApiClient = createClient({
  serviceDomain: import.meta.env.MICRO_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY
})

