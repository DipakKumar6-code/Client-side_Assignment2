import Image from "next/image";

export default function About() {
    return (
      <section className="py-5 text-light">
        <div className="container">
          <div className="row align-items-center gx-4">
            <div className="col-md-5">
              <div className="ms-md-2 ms-lg-5">
                <Image
                  className="img-fluid rounded-3"
                  src="/hollywood_movies.jpeg"
                  alt="Image"
                  width={400}
                  height={210}
                />
              </div>
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="ms-md-2 ms-lg-5">
                <span className="">Our Success Story</span>
                <h2 className="display-5 fw-bold">CineplexMovies-Barrie</h2>
                <p className="lead">
  Enjoy the latest movies with Cineplex-Movies! Our app fetches live movie data to bring you up-to-date showtimes, ratings, and details.
</p>
<p className="lead mb-6">
  Built with Next.js and Bootstrap, Cineplex-Movies offers a sleek, mobile-friendly experience for browsing movies and finding your next blockbuster hit.
</p>
<p className="lead mb-2">
  From top-rated films to the latest releases, Cineplex-Movies makes it easy to stay on top of what's playing at the cinema.
</p>
<strong>Ready to watch your next movie? Cineplex-Movies is here to help!</strong>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  