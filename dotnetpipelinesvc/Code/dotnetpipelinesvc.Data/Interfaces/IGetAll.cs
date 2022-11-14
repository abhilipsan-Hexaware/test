using System.Collections.Generic;

namespace dotnetpipelinesvc.Data.Interfaces
{
    public interface IGetAll<T> where T : class
    {
        IEnumerable<T> GetAll();
    }
}
