import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Cineplex-Movies</title>
        <meta
          name="description"
          content="Understand the terms and conditions for using Cineplex-Movies, your go-to app for discovering movies."
        />
      </Head>

      <div className="container-fluid bg-light py-5">
        {/* Hero Section */}
        <div
          className="text-center bg-dark text-white py-5 rounded shadow-lg mx-auto"
          style={{ maxWidth: "80%" }}
        >
          <h1 className="mb-3">Terms and Conditions</h1>
          <p className="lead">
            Welcome to Cineplex-Movies! We&apos;re excited to have you here. Before diving into the world of movies, please take a moment to review our terms.
          </p>
        </div>

        {/* Main Content */}
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="ms-md-2 ms-lg-5">
                <h2 className="mb-3">Introduction</h2>
                <p>
                  At Cineplex-Movies, we&apos;re all about bringing the joy of movies to your fingertips. By using our app, you agree to the following terms. Don&apos;t worry—it&apos;s pretty straightforward!
                </p>

                <h3 className="mt-4">1. Your Responsibilities</h3>
                <p>
                  Cineplex-Movies is for personal, non-commercial use. Here&apos;s what we expect:
                </p>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item">Use the app responsibly and legally.</li>
                  <li className="list-group-item">Respect other users and their opinions in reviews or comments.</li>
                  <li className="list-group-item">Avoid sharing inappropriate content.</li>
                </ul>

                <h3 className="mt-4">2. Our Content</h3>
                <p>
                  We work hard to bring you accurate and up-to-date movie information. However, all content provided is for informational purposes only. If something seems off, let us know!
                </p>

                <h3 className="mt-4">3. Privacy Matters</h3>
                <p>
                  We value your privacy. Cineplex-Movies collects minimal data to improve your experience. Check out our <a href="/privacy-policy" className="text-primary">Privacy Policy</a> for details.
                </p>

                <h3 className="mt-4">4. Updates to These Terms</h3>
                <p>
                  Our lawyers make us say this: We might tweak these terms occasionally. We&apos;ll do our best to keep you informed. Keep an eye on this page for updates.
                </p>

                <h3 className="mt-4">5. Feedback and Contact</h3>
                <p>
                  Have questions or suggestions? We&apos;d love to hear from you! Reach out to us at <a href="mailto:ITsupport@cineplex-movies.com" className="text-primary">ITsupport@cineplex-movies.com</a>.
                </p>

                <div className="text-center mt-5">
                  <p className="text-muted">
                    Thanks for choosing Cineplex-Movies! Grab some popcorn and enjoy the show.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}