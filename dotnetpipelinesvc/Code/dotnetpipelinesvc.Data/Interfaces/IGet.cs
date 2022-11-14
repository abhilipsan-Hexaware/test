using System.Collections.Generic;

namespace  dotnetpipelinesvc.Data.Interfaces
{
    public interface IGet<T,TKey> where T : class
    {
        T Get(TKey id) ;
    }
}
