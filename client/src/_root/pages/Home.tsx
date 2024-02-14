import Banner from "@/components/Banner";
import Movies from "@/components/Movies";

function Home() {
  return (
    <div className="text-white">
      {<Banner />}
      <Movies />
    </div>
  );
}

export default Home;
