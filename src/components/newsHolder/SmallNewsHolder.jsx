const SmallNewsHolder = ({ post, PlaceHolder }) => {
  return (
      <div className="bg-white p-4 border rounded-xl shadow flex gap-4">
          <img
              src={PlaceHolder}
              alt={post.title}
              className="w-24 h-16 object-cover rounded-md"
          />
          <div>
              <p className="text-xs text-gray-500">{post.category.name} • {post.create_at}</p>
              <h4 className="text-sm font-semibold">{post.title}</h4>
          </div>
      </div>
  );
};

export default SmallNewsHolder;