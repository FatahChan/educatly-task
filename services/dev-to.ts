import axios from 'axios';


export type Blog ={
    type_of: "article"
    id: number
    title: string
    description: string
    readable_publish_date: string
    slug: string
    path: string
    url: string
    comments_count: number
    public_reactions_count: number
    collection_id: unknown
    published_timestamp: string
    positive_reactions_count: number
    cover_image: string
    social_image: string
    canonical_url: string
    created_at: string
    edited_at: string
    crossposted_at: unknown
    published_at: string
    last_comment_at: string
    reading_time_minutes: number
    tag_list: string[]
    tags: string
    user: User
    organization: Organization
  }
  
  export interface User {
    name: string
    username: string
    twitter_username: string
    github_username: string
    user_id: number
    website_url: string
    profile_image: string
    profile_image_90: string
  }
  
  export interface Organization {
    name: string
    username: string
    slug: string
    profile_image: string
    profile_image_90: string
  }
  

const devToApi = axios.create({
    baseURL: 'https://dev.to/api',
});



export const fetchBlogPosts = async (page = 1, perPage = 10) => {
    try {
        const response = await devToApi.get('/articles', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return response.data as Blog[];
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error; // Rethrow the error for handling in the component
    }
};

export const fetchSinglePost = async (postId: number) => {
    try {
        const response = await devToApi.get(`/articles/${postId}`);
        return response.data as Blog;
    } catch (error) {
        console.error('Error fetching single post:', error);
        throw error;
    }
};

export const searchBlogPosts = async (query = '', page = 1, perPage = 10) => {
    try {
        const response = await devToApi.get('/articles', {
            params: {
                q: query,
                page,
                per_page: perPage,
            },
        });
        return response.data as Blog[];
    } catch (error) {
        console.error('Error searching blog posts:', error);
        throw error;
    }
};