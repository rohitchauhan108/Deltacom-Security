import servicesData from "../../../public/data/services.json";
import ServiceDetailClient from "../../../components/ServiceDetailClient";
import AccessControlLink from "../../../components/AccessControlLink";

const slug = "video-surveillance";
const serviceData = servicesData.services.find((s) => s.slug === slug);

export default function VideoSurveillancePage() {
  return (
    <>
      <ServiceDetailClient service={serviceData} slug={slug} />
      <AccessControlLink />
    </>
  );
}
