export const pageview = (url: string) => {
  (window as any).gtag("config", "G-T6X327NM0X", {
    page_path: url,
  });
};
