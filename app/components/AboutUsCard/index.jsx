import Image from "next/image";
import Image3 from "../../../public/Image3.png";
import DetailCard from "../DetailCard";

function AboutUsCard() {
    const detail = "At Gaur Marble and Granite, we pride ourselves on being a leading provider of high-quality marble and granite products that elevate spaces to new levels of sophistication."
  return (
    <div className="my-32 flex justify-between gap-4">
      <DetailCard heading="About Us." detail={detail} />
      <Image src={Image3} width={400} height={300} className="float-right" />

    </div>
  );
}

export default AboutUsCard;
