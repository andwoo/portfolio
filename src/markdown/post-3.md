---
path: '/blog/my-third-post'
date: '2019-06-04'
title: 'My third blog post'
description: 'some desc text'
type: 'project'
image: 'gatsby-astronaut.png'
---

## yaa yaaa yaaaaa

### what it do do

filter by project type

```
{
  markdownRemark(frontmatter: {type: {eq: "project"}}) {
    frontmatter {
      path
      title
    }
  }
}
```

[Home](/)
![some picture](../images/gatsby-astronaut-2.png)
