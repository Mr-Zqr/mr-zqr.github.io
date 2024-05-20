---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin

#################################################
  - block: markdown
    id: news
    content:
      title: News
      text: |-
        {{% spoiler text="2024/05: Had a great time at ICRA2024, Yokohama, Japan ;)" %}}
        ![me at ICRA 2024](202405_icra2024.jpg "Me at ICRA 2024")
        {{% /spoiler %}}
        
        {{% spoiler text="2024/01: First paper accepted by ICRA2024! 🎉" %}}
        Our paper "[LIKO: LiDAR, Inertial, and Kinematic Odometry for Bipedal Robots]({{< relref "/publication/zhao-2024/_index.md" >}})" accepted by ICRA 2024 for oral presentation! This is my first academic paper and I cannot wait to go to Yokohama!
        {{% /spoiler %}}
    design:
      columns: '2'

#################################################
  - block: collection
    id: publication
    content:
      title: Publication
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: compact

#################################################      
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false

#################################################  
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      # Contact (add or remove contact options as necessary)
      email: qingray.zhao[AT]gmail.com

      contact_links:
        - icon: twitter
          icon_pack: fab
          name: DM Me
          link: 'https://twitter.com/qingruizhao1'
        - icon: image
          icon_pack: fas
          name: My photo blog
          link: https://mr-zqr.github.io/photo_blog/
    design:
      columns: '2'
---