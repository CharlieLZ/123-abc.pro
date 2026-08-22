import { analyticsConfig } from "@/config/site";

export function Analytics() {
  return (
    <>
      <script
        defer
        data-domain={analyticsConfig.plausibleDomain}
        src={analyticsConfig.plausibleScriptSource}
      ></script>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleMeasurementId}`}
      ></script>
      <script
        id="google-analytics-config"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=window.gtag||gtag;gtag('js',new Date());gtag('config','${analyticsConfig.googleMeasurementId}',{send_page_view:true});`,
        }}
      ></script>
    </>
  );
}
