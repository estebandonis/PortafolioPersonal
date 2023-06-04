import React from 'react'

import Projects from './Projects.jsx'

export default {
  title: 'Components/Projects',
  component: Projects,
  args: {
    backgroundColor: 'white'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Projects {...args} />
  </div>
)

export const OneLink = Template.bind({})
OneLink.args = {
  url: 'https://cnnespanol.cnn.com/wp-content/uploads/2015/06/150601115126-01-in2white.jpg?quality=100&strip=info',
  title: 'fdsfdsafasdfsaf',
  paragraph: 'fdjklsajfdksdfafdsafdsfadsfsafdsafdsafdsfasfdsafdsafasdfdsfasfsadfasfasfsdfafdsfasdfasfjñdajkflñajkdfljsañfjdksañjfñajkfjdñkajkfjsdñaf',
  repo: 'https://www.minecraft.net/es-es'
}

export const TwoLinks = Template.bind({})
TwoLinks.args = {
  url: 'https://cnnespanol.cnn.com/wp-content/uploads/2015/06/150601115126-01-in2white.jpg?quality=100&strip=info',
  title: 'fdsfdsafasdfsaf',
  paragraph: 'fdjklsajfdksdfafdsafdsfadsfsafdsafdsafdsfasfdsafdsafasdfdsfasfsadfasfasfsdfafdsfasdfasfjñdajkflñajkdfljsañfjdksañjfñajkfjdñkajkfjsdñaf',
  repo: 'https://www.minecraft.net/es-es',
  oficial: 'https://terraria.org/'
}
