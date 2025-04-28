  const LargeNewsHolder = ({ post , placeHolder}) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow">
            <img
                src={post.thumbnail || placeHolder}
                alt={post.title}
                className="w-full h-56 object-cover"
            />
            <div className="p-4">
                <p className="text-xs text-red-500 mb-2">{post.category.name} • {post.create_at}</p>
                <h2 className="text-lg font-bold">{post.title}</h2>
                
            </div>
        </div>
    );
  };

export default LargeNewsHolder;
