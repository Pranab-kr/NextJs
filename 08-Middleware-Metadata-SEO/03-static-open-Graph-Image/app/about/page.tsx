export const metadata = {
  title: "About Us",
  description: "Learn more about our company and team.",
  openGraph: {
    title: "About Us",
    description: "Learn more about our company and team.",
    images: [
      {
        url: "/about-og-image.png",
        width: 800,
        height: 600,
        alt: "About Us OG Image",
      },
      {
        url: "/about-og-image-2.png",
        width: 900,
        height: 800,
        alt: "About Us OG Image 2",
      }
    ],
    url: "https://localhost:3000/about", // Replace with your actual URL
  },
};

const AboutPage = () => {
  return <div>About Page</div>;
};

export default AboutPage;
