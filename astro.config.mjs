// @ts-check
import { defineConfig } from "astro/config";

// Cuando tengamos el dominio final agregaremos:
//
// site: "https://www.DOMINIO.com",
//
// y activaremos el sitemap.

export default defineConfig({
	trailingSlash: "ignore",
});