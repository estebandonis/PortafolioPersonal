import React from 'react'

import Gusto from './Gusto.jsx'

export default {
  title: 'Components/Gusto',
  component: Gusto,
  args: {
    backgroundColor: 'white'
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Gusto {...args} />
  </div>
)

export const LargeImg = Template.bind({})
LargeImg.args = {
  url: 'https://cnnespanol.cnn.com/wp-content/uploads/2015/06/150601115126-01-in2white.jpg?quality=100&strip=info',
  title: 'fdjskafjdkañf',
  paragraph: 'fdjklsajfdksfjñdajkflñajkdfljsañfjdksañjfñajkfjdñkajkfjsdñaf'
}

export const LargeParagraph = Template.bind({})
LargeParagraph.args = {
  url: 'https://cnnespanol.cnn.com/wp-content/uploads/2015/06/150601115126-01-in2white.jpg?quality=100&strip=info',
  title: 'fdsfdsafasdfsaf',
  paragraph:
    'fdjklsajfdksdfafdsafdsfadsfsafdsafdsafdsfasfdsafdsafasdfdsfasfsadfasfasfsdfafdsfasdfasfjñdajkflñajkdfljsañfjdksañjfñajkfjdñkajkfjsdñaf'
}
