import { groq } from "next-sanity";

export const membersQuery = groq`*[_type == "member"] | order(name asc){
  "id": _id, name, position, school, gradYear, interest, bio, linkedin,
  "photo": photo.asset->url
}`;

export const leadershipQuery = groq`*[_type == "leader"] | order(order asc){
  "id": _id, name, position, category, school, bio, linkedin,
  "photo": photo.asset->url
}`;

export const eventsQuery = groq`*[_type == "event"] | order(date desc){
  "id": _id, name, "slug": slug.current, date, time, location, description, status, registrationUrl,
  "image": image.asset->url
}`;

export const initiativesQuery = groq`*[_type == "initiative"] | order(name asc){
  "id": _id, name, "slug": slug.current, description, goals, participants, status,
  "image": image.asset->url
}`;

export const postsQuery = groq`*[_type == "post"] | order(date desc){
  "id": _id, title, "slug": slug.current, author, date, category, excerpt, body,
  "featuredImage": featuredImage.asset->url
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  heroHeadline, heroSubtext, stats, aboutHeadline, aboutBody, missionStatement, visionStatement
}`;
