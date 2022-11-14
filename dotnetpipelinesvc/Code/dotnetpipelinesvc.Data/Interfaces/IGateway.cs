using MongoDB.Driver;

namespace dotnetpipelinesvc.Data.Interfaces
{
    public interface IGateway
    {
        IMongoDatabase GetMongoDB();
    }
}
