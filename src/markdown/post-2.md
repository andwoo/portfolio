---
path: "/blog/my-second-post"
date: "2019-05-04"
title: "My second blog post"
type: "project"
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
