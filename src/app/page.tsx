// import {ReactComponent as profilePic} from 'profilePic.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-gray-100 py-10 px-4">
      <section className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio!</h1>
          <Image
            src="/profilePic.jpeg"
            alt="Profile Image"
            className="rounded-full mx-auto w-40 h-40 mb-6"
            width={160}
            height={160}
          />
          <p className="text-lg text-gray-800 mb-6">
            Hi, I&apos;m <span className="text-blue-500">Sergey</span>, a{' '}
            <span className="text-blue-500">Software Engineer</span> with a
            passion for <span className="text-blue-500">.NET</span>. I
            specialize in{' '}
            <span className="text-blue-500">backend web development</span>, and
            I&apos;m dedicated to creating web api applications for various
            fields.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            On this website, you&apos;ll find a collection of my projects, which
            showcase my abilities and creative problem-solving skills. I strive
            to deliver high-quality work that meets my clients&apos; needs and
            exceeds their expectations.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            Feel free to explore my portfolio and learn more about the projects
            I&apos;ve worked on. If you have any questions, would like to
            collaborate, or want to discuss an opportunity, please don&apos;t
            hesitate to{' '}
            <a
              href="/contact"
              className="text-blue-500 underline hover:text-blue-700"
            >
              get in touch
            </a>
            .
          </p>
          <p className="text-lg text-gray-800">
            Thank you for visiting, and I look forward to connecting with you!
          </p>
        </div>
      </section>
    </main>
  );
}
