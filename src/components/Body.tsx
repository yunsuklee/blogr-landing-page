import React from 'react'
import { Container } from 'react-bootstrap'

const Body = () => {
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
      <article>

      </article>
      <article>

      </article>
    </main>
  )
}

export default Body