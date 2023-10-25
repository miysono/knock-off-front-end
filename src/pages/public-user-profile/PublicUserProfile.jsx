import MiniListingItem from "../../components/MiniListingItem";
import ReviewCard from "../../components/ReviewCard";
import UserCard from "../../components/UserCard";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import PageBody from "../../layout/PageBody";

const listingData = {
  id: 1,
  title: "JW Marriott Bucharest Grand Hotel",
  address: "Calea 13 Septembrie",
  price_per_night: 100,
  stars: 5,
  photos: {
    cover:
      "https://s3.amazonaws.com/blackbooktravels/inventory/hotels/images/aaf1e51132232bea65707717f03cb26a8df7c104158ba9be489b38a451a3748f804d00.jpeg",
  },
};

const PublicUserProfile = () => {
  return (
    <>
      <Navbar />
      <PageBody>
        <div className="flex">
          <aside className="w-1/3 border-r-2 pr-10 my-10 h-screen border-indigo-500 border-opacity-20">
            <UserCard />
          </aside>
          <main className="pl-10 w-2/3">
            <section className="border-b-2 border-indigo-500 py-10 border-opacity-20">
              <h3 className="text-3xl font-semibold">About USER</h3>
              <div className="flex justify-between mt-5">
                <div className="flex items-center gap-2.5">
                  <img
                    className="w-8 h-8"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDklEQVR4nO2ZS07cQBCGvSFIZMWaV6LAlscOIrbkBrNDBLq6y3jBEXicAsI9EHCECJE7BKIom2BXjQRsRhjVCMGGbnuscbqJ+pdKs3GN/69dVdbUJElUVFRU1LD1NS0+KMPHCvkXIPUAufQT1BMPCvmbeKplXiF9AeSuP9Nsiy6ktOY0r3XxMVDzZT8Ms1L5jP30DR97N4mVEEeO8pGaD8Ak2kMhX1kB/DYs1wzqOQB8m+Na4Q1AId8C0i4ifep0ynfyCYb2wNBd8ABiXmtetvTeyiAQnp4A7Va8f/aDBpBycQEA0GzQAFLzLoCdnXL0TT+BzZTnWgagk430duK1PK3/TgLSqTPf0J4LAAwftAogJp0nmN1MVQDcybR5LdcY/tz6FHKZr5P/AkH70rDSEyCN2z95uh+kHP0BDCmSCGDRII1vk64xEP5ZE1flNB0I1kR37dGpzZDcUBk+a9I3NrUAMMRmeysAiOVIE/MdGbEhAMgLqgnAFnZXgwAApO+Iv8cGMb++/ue9Qr4IBKD/Q+YSIJ+vdfJpvgDIPxr3VhsAT0/iQaaU0oXRuljMMhqX+2UZjavtYkkjoUI+l+vqfJ8HgOFG8v+uVQxf+zfIVfHTCiBb4AAMlq5QyIdWAFlhh77cRcynrQD9MkppTS4M0TxUrdefS0nlM7IFlkVqAH9wXEnZVJ58VFRUVFTSQI9/G6Qga4W+AAAAAABJRU5ErkJggg=="
                  />
                  <p>Identity not confirmed</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <img
                    className="w-8 h-8"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEiUlEQVR4nO2aXagVVRSA50YP/UKZSC9l0g8WIT4IRZlFP1QP9RYkacez16w1995CMcUyiGO+9GJQkRZhL0U/5JOiVBQ99JCvGmSmBFlY3aQza81V8nZ/Tqz5seudOXNmzzlnzqVcsDnMzN579rfX2muvtec4zgX5jwoA3wQkNUB5C0i+AJQfDUrTIE9GRZp6L36mdWpEfKMzH6Tm+TcAyjZDfARIWqUK8neGuGFMc3HlAADNZQZlDxBPlQaYU1RrQPKJGR6/ve8Aa5+RawB5dy8B0oW173dGRvjqvkDUUR41xL/2DyAFdNJ1+eGeQhiUDQZ5ujoISWBmdA06TmuoS4TWkCF5u3oAOX/9kOzqCiZ2kwOFgAQG5c1yECSbBj14SMNssIKoU7Cyv56pLAhPIspdhSCITl5mSI4XnKFPiYKFhuSzyoCQjz6xsXVpRxDdZYt2mrhHIH6kUs0Qv5gLAcALAEWKdch/NBqti7Wd/up1hTB+7oYJGGyx6Gzn+ZqUXVVqBUg25e0Zx4urN1gVAqA8HoEEqyoFQT7axqyay4p3Ij83Gq2L1qz57XKDPDY6OnaFTgSQ/FQpDAS3phc5yubi2uAd2sb1eLVe62/sKHZUCWJInssC+dgCZEXUhveF18j7YpAVtoPRfQG84O5SICgfpk2L+NuCtnlM66vXAOKJ6D5PJF5En9sM5t/3l9AKyqG0RohPFVTny228RdyPbK8KxCCPZZgWny3SuO4Ft+WB6PN2JuRYCnQwOR1zutE5M8nVxmGtWxs9fW06FuMpvR9r5XBqAihYaQviusE91iDhKUfn9bE1gpb1beqsD58jby1lKiSvRGPhJ8ubVsYszi3J8Y0hPpg9ED6oz7VezsunsyJrjWxd118SW8fe8os9PBXp0NDz76tjcG+YgmbW4RlD/gNaL6+PGNSfo+3dkTn5S4qmEIbkg4ElUq7r3x9OnMtPJROiJqInNE6kjfcK94eyMWNh+curANHDPM15YnPeboj/riM/OCuhm+kqRCmzmZWGQX4/OkxoDSXebHh4fJFNrGaIv2/r7gzx81WAxGaxLXmvBqCG+Ouu46xE1E4NyngFGjlA1Lx+zhp9zCI5y0+sbFNdy8Gr292vXi15V53kjvDICXiBXhMFCwHlDV03RfazXNEcIz7+7ynI7J1dZzMK+SM3a0hOzAZ0Xbkzb23Uaq1LOoKEag73gR4fB3n8EFGwVFNkIDmdXY/3qieK9qpMrU4qZCGIczDEL/R7rVgX5Gcde7HL4ftdDPHrTllJMsB5UHZ2e4h9aKBaQJ7WI6rSAKE2THOxVbjQc1OSX5LQpSsB5FcHpIVJ3VtqNf+qriFcV24pkjH2HIDko06ptJXYna7zX/qJuTyEnt7wS+tG/rzO6aUAsmcxkK/WeXKzttPYqe7J0xpiAMqX6rqj9JmnNOQI/zxA/AOQfK5fnwzK2r59WycKlhqSMwXMYEwH3YOPlP0RQP6mA8BZIH4tCfLmrRji39u4wjNA/O5A/mZRRsKcIIx8eUL9eLyz1405dWWpDi/I/1j+AezgROv3T4PPAAAAAElFTkSuQmCC"
                  />
                  <p>Speaks X and X</p>
                </div>
                <div className="items-center flex gap-2.5">
                  <img
                    className="w-8 h-8"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy0lEQVR4nO1aW4gcVRBt32IMqF++FXyADwQRwQUVfH4IghrXiCyZnbpdNdnBNYpgBI2LH/qj+EB8f+iHRtewYjSiH0ZBBB8oKjFKjMoa1FWS3a7q3YiKTkv19GR7Zrt7eqa7p1ewoGDoqVu3zq26davrtmX9T9FE5B0EyDcCykYg2WlIFpT1N5C8aIhXq4y1nAnQWQUkPxgSL4lVpmq711rLj7z9DPEj+4xF3gYo62x7/qyRkZkVyvpbn+l/i4D4IR1rLRcyyA83jeM/Abk+MeHtHyc7POwdYJBvVtkAzIPWciAg95oWCNt2Lk0/zrmsBcaQXG2VScPD3sEGZZe/ssj1XscD8XgAZLrUBGDXnOtbe0JDpu0/e8/xgLLJkLjKgDw1WpPTwjI6Boi/aoJxrrPKIkB5uekNWbcEBMlsRLaaXVPbe1xY1qDcFujYaJVFQLxDjajW3DPbnjc9oRv5DTVc2RBvCQBNtsmunT87kN0xOMNh7iRD/KpB3tO20rB7ZVguCCcvvPqjY7MnBF7hdp27V0Z47vNOnfkCQXkr6oAbG+Mj24CgiD7XEOsGxBg+KvLgRHmySCDzUZMi8vntcjwVpOQtCqa58fnNYC9sCsvq2OgKgBtV5Ms1Idi2XGBIbjckzwDKe0DyKSC/DiRDfQExyD9Flxx8d1jOtuX0zvBrbXZj+NR2ne4dsaUMylzLu9H/8x+2zef1DERP4Zja6ctO2eYGl0nfEBTxE0AHiKZO+aRbbWYSmZ/rGYip8RVxCm3bvajnhVnrnJsNhGg0vN/dcDN3DhA/CsQfGpTvDfL2BDe/1vPCkLyUGQh2mdeg3KcbrgcXNzo3ffIiuWcY4r+ze0SeiJ2EiE/pU/G76b3Bm7OCMArEltFCJqnafEO6yjc7CEPiVWrOyZGTVGuuyaQceaZScY6IA6EvWf5+ywUIb04KKTezu1Ge7v4S1q9u/kcPVz0sIyeYmPAONMQf5bRSjSq5Fy4NKRlSQ7LorpLcGrdIrUnuzStugxD7tl7/7fBFb/98GBB/nYPeu2JBaEjpcZ8rkOZh9fziQvGzOel9IRaIHvN5gwiF2U3ay8pxcb5JCqudhQEJaq0cF6ahERQJxCamPrPVtJ4JmlI1iwDJj8V5VtK9q+jLkabGXrKKgkhbVObJ4NvIq2PB+GGGzqq0NVA4K8W9thbH3NB6MBGMIXk8jbLOQ2lQHjH7IkK+S/YKyVBKZdNqvHoGiK8c2B6hcO84gfTwGqRBfTHy70QLxyQCCcIrc81VcFjd3xVEM7xyKCeK88ZM6r4XkDxWusEUx65tpSWNv0JP/P69sa2zYd6VNBsZ4g2lG08hrslVVr+02Povl4Fkq5WF/Mb1sgDiXJIRiEyWDcKgfJEJhA8E5Z3SgRBvyA4kZe1VMH+W+So7+JphKmNo7Iq6jsu18ZAeTPNKrR8QlfrC0XoLXK3JmqQesknUw9utPChoGT3QW09YO/Xt9+/6QYH/vUpwB5mGgfgvQAErTwJyLzbI9xjiO4HkKUD5WCeKMeKVpIXRzma38h+If4nqkxVClYp3qN6RaHYBkrf1dksvNYnmTuw2dnzcO8SQ3ALEvy4BgfwBwN5jrf8SjYzMrADi9f7XFH5y4PW6r8q2a6D0L8085KqcPqSFAAAAAElFTkSuQmCC"
                  />
                  <p>Lives in X</p>
                </div>
              </div>
              <p className="text-justify mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia odit laudantium harum delectus modi sed qui dolore
                maxime? Similique temporibus aut, nemo, corrupti error placeat
                dolorum unde tenetur tempora ducimus, ipsa aliquid sequi
                voluptas possimus ex! Tenetur tempora ipsum natus.
              </p>
            </section>
            <section className="border-b-2 border-indigo-500 py-10 border-opacity-20">
              <div className="flex justify-between">
                <h3 className="text-3xl font-semibold">USER&apos;S Reviews</h3>
                <p className="text-xl hover:underline">Show all reviews </p>
              </div>
              <div className="mt-10 flex gap-5">
                <ReviewCard />
                <ReviewCard />
              </div>
            </section>
            <section className="border-b-2 border-indigo-500 py-10 border-opacity-20">
              <div className="flex justify-between">
                <h3 className="text-3xl font-semibold">USER&apos;S Listings</h3>
                <p className="text-xl hover:underline">Show all listings </p>
              </div>
              <div className="mt-10 flex justify-around">
                <MiniListingItem listingData={listingData} />
                <MiniListingItem listingData={listingData} />
                <MiniListingItem listingData={listingData} />
              </div>
            </section>
          </main>
        </div>
      </PageBody>
      <Footer />
    </>
  );
};

export default PublicUserProfile;
