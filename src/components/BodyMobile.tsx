import React from 'react'
import { Container } from 'react-bootstrap'

const BodyMobile = () => {
  return (
    <main>
      <h2 className='text-center mt-5 h1'>Designed for the future</h2>
      <article className='w-100' id='first'>
        <Container className='px-4'>
          <div className='w-100 text-center'>
            <h3 className='mb-4 h2'>
              Introducing an extensible editor
            </h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className='mt-5 w-100 text-center'>
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
      <article>

      </article>
      <article>

      </article>
    </main>
  )
}

export default BodyMobile