using MongoDB.Driver;

namespace dotnetbackend.Data.Interfaces
{
    public interface IGateway
    {
        IMongoDatabase GetMongoDB();
    }
}
