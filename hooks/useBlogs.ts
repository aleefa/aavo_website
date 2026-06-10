import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { MOCK_BLOGS, MOCK_FEATURED_STORIES, Blog } from '@/lib/mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function useBlogDetail(slug: string) {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: async () => {
      await delay(500); // Simulate API call
      return MOCK_BLOGS.find(blog => blog.slug === slug) || MOCK_FEATURED_STORIES.find(blog => blog.slug === slug) || null;
    },
  });
}

export function useInfiniteBlogs(category: string, searchTerm: string, limit: number = 6) {
  return useInfiniteQuery({
    queryKey: ['blogs', category, searchTerm],
    queryFn: async ({ pageParam = 0 }) => {
      await delay(300); // Simulate API call
      
      let filteredBlogs = MOCK_BLOGS;
      
      // Filter by category
      if (category !== 'All Stories') {
        filteredBlogs = filteredBlogs.filter(blog => 
          blog.tag === category || 
          blog.tag.toLowerCase() === category.toLowerCase()
        );
      }
      
      // Filter by search term
      if (searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        filteredBlogs = filteredBlogs.filter(blog =>
          blog.title.toLowerCase().includes(lowerSearchTerm) ||
          blog.excerpt.toLowerCase().includes(lowerSearchTerm)
        );
      }
      
      // Pagination
      const start = pageParam * limit;
      const end = start + limit;
      const paginatedBlogs = filteredBlogs.slice(start, end);
      
      return {
        blogs: paginatedBlogs,
        hasMore: end < filteredBlogs.length,
        total: filteredBlogs.length,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.hasMore) {
        return allPages.length;
      }
      return undefined;
    },
  });
}
