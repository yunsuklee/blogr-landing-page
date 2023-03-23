import React from 'react'
import { Container } from 'react-bootstrap'

const BodyDesktop = () => {
  return (
    <main className='pt-5'>
      <article className='w-100 mt-5 pt-5'>
        <h2 className='text-center mb-5 h1'>Designed for the future</h2>
        <Container className='pt-5'>
          <div className='w-50 pt-4 pr-5'>
            <h3 className='mb-4'>
              Introducing an extensible editor
            </h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className='w-50 mt-5 pr-5'>
            <h3 className='mb-4'>
              Robust content management
            </h3>
            <p>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog
              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
            </p>
          </div>
        </Container>
      </article>
      <article className="d-flex" id="second">
        <figure className="mx-5">
          <div></div>
        </figure>
        <div className="d-flex flex-column px-5 justify-content-center">
          <h3 className="h2 mb-4 px-5 mx-5">State of the Art infrastructure</h3>
          <p className="w-75 px-5 mx-5">
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </article>
      <article id="third">

      </article>
    </main>
  )
}

export default BodyDesktop