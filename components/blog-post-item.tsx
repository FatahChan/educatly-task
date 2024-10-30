import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Adjust the import based on your setup
import Image from "next/image";
import { Blog } from "@/services/dev-to";

const BlogPostItem = ({ blog }: { blog: Blog }) => {
  const coverImage = {
    src: blog.cover_image,
    width: Number(blog.cover_image?.match(/width=(\d+)/)?.at(1)) || 1000,
    height: Number(blog.cover_image?.match(/height=(\d+)/)?.at(1)) || 420,
  };

  const profileImage = {
    src: blog.user.profile_image,
    width: Number(blog.user.profile_image?.match(/width=(\d+)/)?.at(1)) || 640,
    height:
      Number(blog.user.profile_image?.match(/height=(\d+)/)?.at(1)) || 640,
  };
  return (
    <Card className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader>
        {coverImage.src ? (
          <Image
            src={coverImage.src}
            width={coverImage.width}
            height={coverImage.height}
            alt={blog.title}
            className="w-full object-cover"
          />
        ) : (
          <div className="bg-muted-foreground w-full h-24"></div>
        )}
      </CardHeader>
      <CardContent>
        <span className="text-sm text-gray-500">{blog.tag_list[0]}</span>
        <h2 className="text-xl font-semibold mt-2 truncate">{blog.title}</h2>
        <p className="text-gray-600 mt-1 truncate">{blog.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto">
        <div className="flex items-center">
          {profileImage.src ? (
            <Image
              src={profileImage.src}
              width={profileImage.width}
              height={profileImage.height}
              alt={blog.user.name}
              className="w-8 h-8 rounded-full mr-2"
            />
          ) : (
            <div className="bg-muted-foreground w-8 h-8 rounded-full mr-2"></div>
          )}
          <span className="text-sm">{blog.user.name}</span>
        </div>
        <span className="text-xs text-gray-400">
          {new Date(blog.published_at).toLocaleDateString()}
        </span>
      </CardFooter>
    </Card>
  );
};

export default BlogPostItem;
