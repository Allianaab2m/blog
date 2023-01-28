import { SpearlyApiClient } from "@spearly/sdk-js";

const API_DOMAIN = "https://api.spearly.com"

export const spearlyApiClient = 
  new SpearlyApiClient(API_DOMAIN, import.meta.env.SPEARLY_API_KEY)
