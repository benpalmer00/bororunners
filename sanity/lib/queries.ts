import { groq } from "next-sanity";

export const sessionsQuery = groq`*[_type == "session" && isActive == true] | order(order asc)`;

export const eventsQuery = groq`*[_type == "event" && !isPast] | order(date asc)`;

export const pastEventsQuery = groq`*[_type == "event" && isPast] | order(date desc)`;

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc)`;

export const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0]{
  ...,
  "relatedPosts": *[_type == "blogPost" && slug.current != $slug] | order(publishedAt desc)[0...3]{
    title,
    slug,
    featuredImage,
    excerpt,
    publishedAt
  }
}`;

export const galleryImagesQuery = groq`*[_type == "galleryImage"] | order(dateTaken desc)`;

export const featuredGalleryImagesQuery = groq`*[_type == "galleryImage" && featured == true] | order(dateTaken desc)[0...6]`;

export const teamMembersQuery = groq`*[_type == "teamMember"] | order(order asc)`;

export const currentRunnerOfTheMonthQuery = groq`*[_type == "runnerOfTheMonth" && isCurrent == true][0]`;

export const allRunnersOfTheMonthQuery = groq`*[_type == "runnerOfTheMonth"] | order(_createdAt desc)`;

export const merchandiseQuery = groq`*[_type == "merchandiseItem" && isAvailable == true]`;

export const sponsorsQuery = groq`*[_type == "sponsor"] | order(order asc)`;
