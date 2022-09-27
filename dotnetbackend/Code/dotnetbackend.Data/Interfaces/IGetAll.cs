using System.Collections.Generic;

namespace dotnetbackend.Data.Interfaces
{
    public interface IGetAll<T> where T : class
    {
        IEnumerable<T> GetAll();
    }
}
