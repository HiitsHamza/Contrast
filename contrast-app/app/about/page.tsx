import PageLayout from "@/components/PageLayout"

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">About Contrast</h1>
        <div className="max-w-3xl mx-auto space-y-6 text-purple-200">
          <p>
            Contrast is a cutting-edge fashion price comparison platform designed to revolutionize your shopping
            experience. Our mission is to empower consumers by providing comprehensive, real-time price comparisons
            across a wide range of fashion brands and retailers.
          </p>
          <p>
            Founded in 2024, Contrast was born out of a simple idea: make fashion more accessible and affordable for
            everyone. We understand that finding the best deals on your favorite fashion items can be time-consuming and
            often frustrating. That's why we've created a platform that does the hard work for you, bringing together
            prices from multiple stores in one easy-to-use interface.
          </p>
          <p>
            Our team of dedicated professionals works tirelessly to ensure that Contrast remains at the forefront of
            fashion technology. We're constantly updating our database, improving our algorithms, and expanding our
            partnerships to bring you the most accurate and up-to-date information possible.
          </p>
          <p>
            At Contrast, we believe in more than just finding the lowest price. We're committed to helping you make
            informed decisions about your fashion purchases. That's why we provide detailed product information, price
            history charts, and user reviews alongside our price comparisons.
          </p>
          <p>
            We're more than just a price comparison tool - we're your fashion ally. Whether you're looking for the
            latest trends or timeless classics, Contrast is here to help you find the perfect item at the perfect price.
          </p>
          <p>
            Join us in our mission to make fashion more accessible, affordable, and enjoyable for everyone. Welcome to
            Contrast - where style meets savings.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

